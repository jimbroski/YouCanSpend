import Server from '../app/server';
import Logger from '../app/logger';

class TimeChecker {
  constructor(){};

  monthSinceLastVisit(){
    return new Promise((resolve, reject) => {
      let setTimeNow = Server.set('checkin/time_now', Server.server_time);
      // doc: write current server time in the database. This way we can compare the last timestamp with today's time.
      setTimeNow.then(() => {
        let getCheckin = Server.get('checkin');

        getCheckin.then(values => {
          if(values.time_last != null){
            Promise.all([this.resetBudgetBalance(values), this.upgradeSavingsBalance(values)]).then(() => {
              Server.delete('checkin/time_now');
              Server.set('checkin/time_last', Server.server_time);
              new Logger('info', 'Successfully synced with data with server.')
              resolve(values.time_last);
            });
          }else{
            Server.delete('checkin/time_now');
            Server.set('checkin/time_last', Server.server_time).then(() => {
              new Logger('info', 'First server connection set.')
              resolve(values.time_last);
            });
          };
        });
      });

    });
  };

  resetBudgetBalance(times){
    return new Promise((resolve, reject) => {
      let month_difference = this.calculateMonthDifference(times.time_now, times.time_last);

      if(month_difference > 0){
        Server.db.child('Budget').once('value', snapshot => {
          let budget_resetters = Object.keys(snapshot.val()).map(key => {
            Server.patch(`Budget/${key}`, {balance: snapshot.val()[key].amount});
          });
          Promise.all(budget_resetters).then(() => resolve());
        });
      }else{
        resolve();
      };

    });
  };

  upgradeSavingsBalance(times){
    return new Promise((resolve, reject) => {
      resolve('upgraded savings');
    });
  };

  calculateMonthDifference(time_now, time_last){
    time_now  = new Date(time_now);
    time_last = new Date(time_last); // TODO: Testing date: new Date(1475410092755);
    return (time_now.getMonth() - time_last.getMonth()) + (12 * (time_now.getFullYear() - time_last.getFullYear()));
  };

};
export default new TimeChecker();

import Server from '../app/server';
import Logger from '../app/logger';

class TimeChecker {
  constructor(){
    this.time_now = 0;
  };

  monthSinceLastVisit(){
    return new Promise((resolve, reject) => {
      let setTimeNow = Server.set('checkin/time_now', Server.server_time);
      // doc: write current server time in the database. This way we can compare the last timestamp with today's time.
      setTimeNow.then(() => {
        let getCheckin = Server.get('checkin');

        getCheckin.then(values => {
          this.time_now = values.time_now;

          if(values.time_last != null){
            Promise.all([this.resetBudgetBalance(), this.upgradeSavingsBalance()]).then(() => {
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

  resetBudgetBalance(){
    return new Promise((resolve, reject) => {
      console.log(this.time_now);
      
      resolve('resetted budget');
    });
  };

  upgradeSavingsBalance(){
    return new Promise((resolve, reject) => {
      resolve('upgraded savings');
    });
  };
};
export default new TimeChecker();

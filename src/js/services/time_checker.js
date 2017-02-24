import Server from '../app/server';
import Logger from '../app/logger';
import Transaction from '../models/transaction';

class TimeChecker {
  constructor(){
    this.time_now = new Date();
  };

  monthSinceLastVisit(){
    return new Promise((resolve, reject) => {
      let setTimeNow = Server.set('checkin/time_now', Server.server_time);
      // doc: write current server time in the database. This way we can compare the last timestamp with today's time.
      setTimeNow.then(() => {
        let getCheckin = Server.get('checkin');

        getCheckin.then(values => {
          this.time_now = new Date(values.time_now);
          let month_difference = this.calculateMonthDifference(values.time_now, values.time_last);

          if((values.time_last != null) && (month_difference > 0)){
            Promise.all([this.resetBudgetBalance(), this.upgradeSavingsBalance(month_difference)]).then(() => {
              Server.delete('checkin/time_now');
              Server.set('checkin/time_last', Server.server_time);
              new Logger('info', 'Successfully synced with data with server.')
              resolve(values.time_last);
            });
          }else{
            Server.delete('checkin/time_now');
            Server.set('checkin/time_last', Server.server_time)
            new Logger('info', 'All good. Nothing needed to be synced.')
            resolve(values.time_last);
          };
        });
      });

    });
  };

  resetBudgetBalance(){
    return new Promise((resolve, reject) => {
      Server.db.child('Budget').once('value', snapshot => {
        let budget_resetters = Object.keys(snapshot.val()).map(key => {
          Server.patch(`Budget/${key}`, {balance: snapshot.val()[key].amount});
        });
        Promise.all(budget_resetters).then(() => resolve());
      });
    });
  };

  upgradeSavingsBalance(month_difference){
    return new Promise((resolve, reject) => {
      Server.db.child('Saving').once('value', snapshot => {
        let saving_payers = Object.keys(snapshot.val()).map(key => {
          let new_transaction = new Transaction({
            amount: (- snapshot.val()[key].rate) * month_difference,
            name: `Saving: ${snapshot.val()[key].name}`,
            payable_id: key,
            payable: 'Saving'
          });
          return new_transaction.save(`Transaction/Saving/${key}`);
        });
        Promise.all(saving_payers).then(() => resolve());
      });
      resolve();
    });
  };

  // Helper Methods

  calculateMonthDifference(time_now, time_last){
    time_now  = new Date(time_now);
    time_last = new Date(time_last); // TODO: Testing date: new Date(1475410092755);
    return (time_now.getMonth() - time_last.getMonth()) + (12 * (time_now.getFullYear() - time_last.getFullYear()));
  };

  daysInMonthLeft(){
    return (new Date(this.time_now.getFullYear(), this.time_now.getMonth(), 0).getDate()) - this.time_now.getDate();
  };

};
export default new TimeChecker();

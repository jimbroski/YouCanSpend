import Record from "../app/record.js";
import Budget from '../models/budget';

class Transaction extends Record {
  constructor(params){
    super(params);
    this.id = params.id;
    this.amount = params.amount;
    this.name = params.name;
    this.budget_id = params.budget_id;
  };

  beforeCommit(){
    // doc: framework methods run before save()
    return [
      this.validates_presence([this.amount, this.name, this.budget_id]),
      this.validates_numerical([this.amount]),
      this.validates_string([this.name]),
      this.validates_max_length_of(20, [this.name]),
      this.updateBudgetBalance()
      // TODO validates_association_presence([this.budget_id])
    ];
  };

  updateBudgetBalance(){
    Budget.find(this.budget_id).then(budget => {
      budget.params = {balance: (budget.balance - this.amount)};
      budget.update();
    })
  };
}

export default Transaction;

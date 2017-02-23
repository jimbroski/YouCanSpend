import Record from "../app/record.js";
import Budget from '../models/budget';

class Transaction extends Record {
  constructor(params){
    super(params);
    this.id = params.id;
    this.amount = params.amount;
    this.name = params.name;
    this.payable_id = params.payable_id;
    this.payable = params.payable;

    this.item_selector = `transaction_item_${this.id}`
  };

  beforeCommit(){
    // doc: framework methods run before save()
    return [
      this.validates_presence([this.amount, this.name, this.payable_id]),
      this.validates_numerical([this.amount]),
      this.validates_string([this.name]),
      this.validates_max_length_of(25, [this.name]),
      this.updateBudgetBalance()
      // this.updateSavingBalance()
      // TODO validates_association_presence([this.payable_id])
    ];
  };

  updateBudgetBalance(){
    (this.payable == 'Budget') && Budget.find(this.payable_id).then(budget => {
      budget.params = {balance: (budget.balance - this.amount)};
      budget.update();
    })
  };

  // doc: Required because of Uglify
  static model(){
    return "Transaction";
  };
}

export default Transaction;

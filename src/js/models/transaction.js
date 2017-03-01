import Record from "../app/record.js";
import Budget from '../models/budget';
import Saving from '../models/saving';
import modelSelector from '../services/model_selector'

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
      this.recalculatePayableBalance()
      // TODO validates_association_presence([this.payable_id])
    ];
  };

  beforeDestroy(){
    // doc: framework methods run before update()
    return [this.recalculatePayableBalance()]
  };

  recalculatePayableBalance(){
    var BudgetOrSaving = modelSelector(this.payable);
    BudgetOrSaving.find(this.payable_id, this.payable).then(record => {
      if(Object.keys(this.previous_state).length === 0){
        // doc: New transaction
        record.params = {balance: (record.balance - this.amount)};
        record.update();
      }else{
        // doc: Update transaction
        let amount_difference = this.previous_state.amount - this.amount;
        record.params = {balance: (record.balance + amount_difference)};
        record.update();
      }
    });
  };

  // doc: Required because of Uglify
  static model(){
    return "Transaction";
  };
}

export default Transaction;

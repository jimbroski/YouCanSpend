import Record from "../app/record.js";

class Transaction extends Record {
  constructor(params){
    super(params);
    this.id = params.id;
    this.amount = params.amount;
    this.name = params.name;
    this.budget_id = params.budget_id;
  }

  beforeSave(){
    // doc: framework methods run before save()
    return [
      this.validates_presence([this.amount, this.name, this.budget_id]),
      this.validates_numerical([this.amount]),
      this.validates_string([this.name]),
      this.validates_max_length_of(10, [this.name])
      // TODO validates_association_presence([this.budget_id])
      // TODO this.updateBudgetBalance
    ];
  }
}

export default Transaction;

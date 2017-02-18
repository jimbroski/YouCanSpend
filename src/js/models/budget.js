import Record from "../app/record.js";

class Budget extends Record {
  constructor(params){
    super(params);
    this.id = params.id;
    this.amount = params.amount;
    this.balance = params.balance;
    this.name = params.name;
    this.icon = "shopping_basket"; // TODO adjustable

    this.item_selector = `budget_item_${this.id}`
  };

  beforeSave(){
    // doc: framework methods run before save()
    return [
      this.validates_presence([this.amount, this.balance, this.name]),
      this.validates_numerical([this.amount, this.balance]),
      this.validates_string([this.name]),
      this.validates_max_length_of(10, [this.name]),
      this.validates([() => (Budget.list_of_icons().indexOf(this.icon) > -1)])
      // this.recalculate_balance
      // this.convert amount to decimal float
    ];
  }

  // Class Methods
  static list_of_icons(){
    return ['shopping_basket'];
  }
}

export default Budget;

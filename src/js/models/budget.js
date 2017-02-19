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

  // Callbacks

  beforeCommit(){
    // doc: framework methods run before save() or update()
    return [
      this.validates_presence([this.amount, this.balance, this.name]),
      this.validates_numerical([this.amount, this.balance]),
      this.validates_string([this.name]),
      this.validates_max_length_of(25, [this.name]),
      this.validates([() => (Budget.list_of_icons().indexOf(this.icon) > -1)]),
      this.convertToDecimal()
    ];
  };

  beforeUpdate(){
    // doc: framework methods run before update()
    return [
      this.recalculate_balance()
    ]
  };

  // Custom Methods

  recalculate_balance(){
    if(this.previous_state != undefined){
      this.params.balance = this.balance - (this.previous_state.amount - this.amount);
    };
    return true;
  };

  convertToDecimal(){
    this.params.amount = (Number(this.amount).toFixed(2))/1;
    this.params.balance = (Number(this.balance).toFixed(2))/1;
    return true;
  };

  // Class Methods
  static list_of_icons(){
    return ['shopping_basket'];
  };
}

export default Budget;

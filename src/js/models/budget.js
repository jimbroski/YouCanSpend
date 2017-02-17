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

  validate(){
    // TODO validate id uniqueness and presence
    // TODO validate amount being a valid decimal and present
    // TODO validate name presence and length
    // TODO validate icon string is equal to any of the icons
    return true;
  }

}

export default Budget;

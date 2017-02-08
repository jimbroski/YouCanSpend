import Record from "../app/record.js";

class Budget extends Record {
  constructor(params){
    super();
    this.id = params.id;
    this.amount = params.amount;
    this.name = params.name;
    this.icon = "shopping_basket"; // TODO adjustable

    this.item_selector = `budget_item_${this.id}`
  };

  validate(){
    // TODO validate id uniqueness and presence
    // TODO validate amount being a valid decimal and present
    // TODO validate name presence and length
    // TODO validate icon string is equal to any of the icons
  }

  save(){
    // TODO save this budget to firebase?
  }

}

export default Budget;

import Record from "../app/record.js";

class Saving extends Record {
  constructor(params){
    super(params);
    this.id = params.id;
    this.balance = params.balance;
    this.rate = params.rate;
    this.name = params.name;
    this.icon = "shopping_basket"; // TODO adjustable

    this.item_selector = `saving_item_${this.id}`
  };

  // Callbacks
  beforeCommit(){
    // doc: framework methods run before save() or update()
    return [
      this.validates_presence([this.rate, this.balance, this.name]),
      this.validates_numerical([this.rate, this.balance]),
      this.validates_string([this.name]),
      this.validates_max_length_of(25, [this.name]),
      this.validates([() => (Saving.list_of_icons().indexOf(this.icon) > -1)]),
      this.convertToDecimal()
    ];
  };

  beforeUpdate(){
    // doc: framework methods run before update()
    return []
  };

  convertToDecimal(){
    this.params.rate = (Number(this.rate).toFixed(2))/1;
    this.params.balance = (Number(this.balance).toFixed(2))/1;
    return true;
  };

  // Class Methods
  static list_of_icons(){
    return ['shopping_basket'];
  };

  // doc: Required because of Uglify
  static model(){
    return "Saving";
  };
}

export default Saving;

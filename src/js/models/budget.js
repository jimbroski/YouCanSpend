import Record from "../app/record.js";
import NumHelper from "../app/num_helper";

class Budget extends Record {
  constructor(params){
    super(params);
    this.id = params.id;
    this.amount = params.amount;
    this.balance = params.balance;
    this.name = params.name;
    this.icon = params.icon;

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
      this.params.balance = NumHelper.toPrice( this.balance - (this.previous_state.amount - this.amount) );
    };
    return true;
  };

  convertToDecimal(){
    this.params.amount = NumHelper.toPrice(this.amount);
    this.params.balance = NumHelper.toPrice(this.balance);
    return true;
  };

  // Class Methods
  static list_of_icons(){
    return ['crop_square', 'shopping_basket', 'pets', 'card_giftcard', 'cake', 'school', 'kitchen', 'free_breakfast', 'local_bar', 'flight', 'restaurant', 'brush', 'phonelink', 'weekend', 'business', 'loyalty', 'group', 'home', 'healing', 'favorite', 'person'];
  };

  // doc: Required because of Uglify
  static model(){
    return "Budget";
  };
}

export default Budget;

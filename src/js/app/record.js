class Record {
  // ================
  // Class (static) Methods
  static model(){
    return this.name;
  };

  static records(){
    // TODO Get those budgets from Firebase or other storage:
    return {
      "Budget": {
        "1": {
          name: "groceries",
          amount: 123.34,
          balance: 44
        },
        "2": {
          name: "beer",
          amount: 212.34,
          balance: -23
        },
        "3": {
          name: "cars",
          amount: 9999.93,
          balance: 3342
        },
        "4": {
          name: "incusrance",
          amount: 123.34,
          balance: 44.23
        },
        "5": {
          name: "and",
          amount: 123.34,
          balance: 123
        }
      }
    };
  };

  static all(){
    let model_records = this.records()[this.model()];

    let record_ids = Object.keys(model_records);
    let all_objects = [];

    record_ids.forEach(record_id => {
      model_records[record_id].id = record_id;
      all_objects.push(new this(model_records[record_id]));
    });

    return all_objects;
  }

  static find(id){
    // TODO find record by ID (on firebase?)
  };

  // ================
  // Instance Methods
  constructor(params){
    // ...
  };

  save(){
    if(this.validate()){
      console.log('budget save');
      // TODO Assign ID

      // TODO save this budget to firebase?
    }else{
      return "Input is invalid";
    }
  };

}

export default Record;

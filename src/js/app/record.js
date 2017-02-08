class Record {
  // ================
  // Class (static) Methods
  static model(){
    return this.name;
  }

  static all(){
    let records = {
      "Budget": {
        "1": {
          name: "groceries",
          amount: 123.34
        },
        "2": {
          name: "beer",
          amount: 212.34
        },
        "3": {
          name: "cars",
          amount: 9999.93
        },
        "4": {
          name: "incusrance",
          amount: 123.34
        },
        "5": {
          name: "and",
          amount: 123.34
        }
      }
    };
    let model_records = records[this.model()];
    // TODO ^ Get those budgets from Firebase or other storage

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
  }

  // ================
  // Instance Methods
  constructor(params){
    // ...
  };

  validate(){
    // ...
  }

  save(){
    // ...
  }

}

export default Record;

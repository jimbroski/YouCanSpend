import Server from './server';

class Record {
  // ================
  // Class (static) Methods
  // ================
  static model(){
    return this.name;
  };

  // === Queries
  static all(){
    // Server.seedDemoContent(); // TODO: Remove Dev Method
    // doc: Request data from the server/database for the given model
    return Server.get(this.model()).then(records => {
      records = Object.keys(records).map(key => {
        // doc: Assign record ID and create an instance of the current model
        let record = records[key];
        record.id = key;
        return new this(record);
      });
      return records;
    });
  };

  static find(id){
    // TODO find record by ID (on firebase?)
  };

  // ================
  // Instance Methods
  // ================
  constructor(params){
    this.params = params;
  };

  model(){
    return this.constructor.name;
  };

  // === CRUD
  save(){
    console.log(this.beforeSave());
    if(!this.beforeSave().some(e => e == false)){
      console.log('budget save'); // TODO remove this dev mthod
      return Server.post(this.model(), this.params);
    }else{
      // doc: return indexes of failed validations
      var indexes = [];
      this.beforeSave().forEach((bfFunction, i) => !bfFunction && indexes.push(i));

      let error_message = "At least one BeforeSave function failed on positions: " + indexes;
      console.log(error_message);
      return error_message;
    }
  };

  update(){};

  destroy(){};

  // === Validations
  validates_presence(fields){
    return fields.every((element) => (element != "undefinded") && (element != null) && (element.length > 0));
  };
  validates_numerical(fields){
    return fields.every((element) => !isNaN(element));
  };
  validates_string(fields){
    return fields.every((element) => typeof element == 'string');
  };
  validates_max_length_of(length, fields){
    return fields.every((element) => element.length < length);
  };
  validates(fields){
    return fields.every((element,index,array) => element());
  };

}

export default Record;

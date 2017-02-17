import Server from './server';

class Record {
  // ================
  // Class (static) Methods
  static model(){
    return this.name;
  };

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
  constructor(params){
    this.params = params;
  };

  model(){
    return this.constructor.name;
  };

  save(){
    if(this.validate()){
      console.log('budget save'); // TODO remove this dev mthod
      Server.post(this.model(), this.params);
      // TODO Assign ID
      // TODO save this budget to firebase?
    }else{
      return "Input is invalid";
    }
  };

  update(){};

  destroy(){};

}

export default Record;

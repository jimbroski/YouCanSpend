import Server from './server';

class Record {
  // ================
  // Class (static) Methods
  static model(){
    return this.name;
  };

  static all(){
    // Server.seedDemoContent(); // TODO: Remove Dev Method
    return Server.get(this.model()).then(records => {
      records = records.map(record => {
        record.id = records.indexOf(record);
        return new this(record);
      });
      return records;
    });
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

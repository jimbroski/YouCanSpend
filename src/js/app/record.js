import Server from './server';
import Logger from './logger';

class Record {
  // ================
  // Class (static) Methods
  // ================
  static newInstanceWithKeyAsId(records){
    if(records){
      records = Object.keys(records).map(key => {
        // doc: Assign record ID and create an instance of the current model
        let record = records[key];
        record.id = key;
        return new this(record);
      });
    }else{
      records = [];
    }
    return records;
  };

  // === Queries
  static all(){
    // Server.seedDemoContent(); // TODO: Remove Dev Method
    // doc: Request data from the server/database for the given model
    return Server.get(this.model()).then(records => {
      this.previous_values = this;
      return this.newInstanceWithKeyAsId(records);
    });
  };

  static find(id, path = this.model()){
    return Server.get(`${path}/${id}`).then(record => {
      record.id = id;
      return new this(record);
    });
  };

  static from_to(path, child, from_val, to_val){
    return Server.db.child(path).orderByChild(child).startAt(from_val).endAt(to_val).once('value').then(records => {
      return this.newInstanceWithKeyAsId(records.val());
    });
  };

  // ================
  // Instance Methods
  // ================
  constructor(params){
    this.params = params;
    this.previous_state = {};
    this.created_at = params.created_at
    this.updated_at = params.updated_at
  };

  model(){
    return this.constructor.model();
  };

  // === CRUD
  save(path = this.model()){
    return this.validateBeforeCommit().then(() => {
      this.params.created_at = Server.server_time;
      this.params.updated_at = Server.server_time;
      Server.post(path, this.params)
    }).catch(() => Promise.reject());
  };

  update(path = this.model()){
    // doc: apply params to budget in order to validate it
    Object.assign(this.previous_state, this);
    Object.assign(this, this.params);
    return this.validateBeforeCommit().then(() => {
      try{ this.beforeUpdate() }catch(e){};
      this.params.updated_at = Server.server_time;
      Server.patch(`${path}/${this.id}`, this.params);
    }).catch(() => Promise.reject());
  };

  destroy(path = this.model()){
    try{ this.beforeDestroy() }catch(e){};
    return Server.delete(`${path}/${this.id}`);
  };

  // === Validations
  validateBeforeCommit(){
    var self = this;
    return new Promise((resolve, reject) => {
      if(!self.beforeCommit().some(e => e == false)){
        resolve();
      }else{
        // doc: return indexes of failed validations
        var indexes = [];
        self.beforeCommit().forEach((bfFunction, i) => !bfFunction && indexes.push(i));
        let error_message = "At least one BeforeSave function failed on positions: " + indexes;
        reject(new Logger('error', error_message));
      }
    });
  };

  validates_presence(fields){
    return fields.every((element) => (element != "undefinded") && (element != null) && (element.toString().length > 0));
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

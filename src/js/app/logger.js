class Logger {
  constructor(type, message){
    this.message = message;
    this.type = type;

    this.logErrors();
    this.logInfo();
  };

  logErrors(){
    (this.type == 'error') && console.log(this.message);
  };

  logInfo(){
    (this.type == 'info') && console.log(this.message);
  };
};
export default Logger;

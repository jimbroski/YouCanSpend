class Logger {
  constructor(type, message){
    this.message = message;
    this.type = type;

    this.logErrors();
  };

  logErrors(){
    (this.type == 'error') && console.log(this.message);
  };
};
export default Logger;

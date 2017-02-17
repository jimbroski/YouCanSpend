class Controller  {
  // ================
  // Class (static) Methods
  static controller(){
    return this.name;
  };

  // ================
  // Instance Methods
  constructor(params){
    // ...
  };

  initializeVariables(variables){
    // doc: resolve all given (model) promises
    return Promise.all(Object.values(variables)).then(values => {
      var self = this;
      // doc: assign all promise results to the given variables for the controller instance
      Object.keys(variables).forEach(function(key, i) {
        self[key] = values[i];
      });
      // doc: execute the controller's afterInit() function if it exists
      (typeof self.afterInit == 'function') && self.afterInit();
    });
  };
};
export default Controller;

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

  controller(){
    return this.constructor.name;
  }

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

  // Helper Methods
  getUrlParams(params) {
    var paramStrings = window.location.search.substring(1).split('&');
    for(let paramString of paramStrings){
      var paramArray = paramString.split('=');
      if(paramArray[0] == params){
        return paramArray[1] == 'undefined' ? true : paramArray[1];
      }
    };
  };

};
export default Controller;

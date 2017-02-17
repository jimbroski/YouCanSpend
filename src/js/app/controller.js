class Controller  {
  initializeVariables(variables){
    return Promise.all(Object.values(variables)).then(values => {
      var self = this;

      Object.keys(variables).forEach(function(key, i) {
        self[key] = values[i];
      });

      (typeof self.afterInit == 'function') && self.afterInit();
    });
  };
};
export default Controller;

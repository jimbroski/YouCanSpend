class AppController {
  constructor(){
    this.bindFunctions();
    this.startup();
  }

  bindFunctions(){
    // TODO Link to Budgets
    // TODO Link to Savings
    // TODO Link to Settings
  }

  startup(){
    console.log("Hello World");
  }
}

export default new AppController(); // Initialize on Startup

import Routes from '../routes';

class AppController {
  constructor(){
    this.current_route = false;

    this.bindFunctions();
    this.startup();
  }

  // Constructor Functions
  bindFunctions(){
    document.querySelectorAll('[data-route]').forEach(a => a.addEventListener("click", e => {
      this.go_to(a.getAttribute('data-route'));
    }));

    // TODO Listen to route changes?
  }

  startup(){
    // Go To Root
    this.go_to('BudgetIndex');
  };

  // Instance Methods
  go_to(route, params = false){
    this.current_route = params ? new Routes[route](params) : new Routes[route];
    componentHandler.upgradeAllRegistered();
  }
}

export default new AppController(); // Initialize just once

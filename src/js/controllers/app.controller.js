import Controller from '../app/controller';
import Routes from '../routes';
import TimeChecker from '../services/time_checker';

class AppController extends Controller {
  constructor(){
    super();
    this.current_route = '';

    this.initializeVariables({
      time_checked: TimeChecker.monthSinceLastVisit()
    });
  };

  afterInit(){
    // doc: default framework function
    this.bindFunctions();
    this.startup();
  };

  // Constructor Functions
  bindFunctions(){
    Array.from(document.querySelectorAll('[data-route]')).forEach(a => a.addEventListener("click", e => {
      this.go_to(a.getAttribute('data-route'));
    }));
  };

  startup(){
    // Go To Root
    this.go_to('BudgetIndex');
  };

  // Instance Methods
  go_to(route, params = false){
    document.querySelector('#root').innerHTML = '<div class="text-center padding-30"><div class="mdl-spinner mdl-js-spinner is-active"></div></div>';
    componentHandler.upgradeAllRegistered();
    this.current_route = params ? new Routes[route](params) : new Routes[route];
    window.location.hash = `/${this.current_route.controller()}`;
  }
}

export default new AppController(); // Initialize just once

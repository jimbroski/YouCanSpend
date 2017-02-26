import Controller from '../app/controller';
import Routes from '../routes';
import Server from '../app/server';
import TimeChecker from '../services/time_checker';

class AppController extends Controller {
  constructor(){
    super();
    this.current_route = '';

    console.log(process.env);
    if(process.env.NODE_ENV){
      console.log('test');
      console.log(process.env.NODE_ENV);
    }else{
      console.log('dev');
    }

    this.initAfterAuthorize();
  };

  initAfterAuthorize(){
    Server.authorize()
    .then(() => {
      this.initializeVariables({
        time_checked: TimeChecker.monthSinceLastVisit()
      });
    })
    .catch(() => {
      this.logged_in = false;
      this.go_to('SettingsNew');
    });
  };

  afterInit(){
    // doc: default framework function
    this.logged_in = true;
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

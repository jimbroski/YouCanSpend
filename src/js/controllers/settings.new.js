import Controller from '../app/controller';
import App from './app.controller';
import Server from '../app/server';
import SettingsNewView from '../views/settings.new.view';

class SettingsNew extends Controller {
  constructor(){
    super();
    this.resetCurrentAmount();

    this.afterInit();
  };

  afterInit(){ // doc: default framework function
    this.renderTemplates();
    this.bindFunctions();
  };

  // Constructor Methods
  renderTemplates(){
    let user_params = {};
    document.querySelector('#root').innerHTML = SettingsNewView.index(user_params);
  };

  bindFunctions(){
    document.querySelector('#Settings_signin').addEventListener("click", e => this.signin());
    document.querySelector('#Settings_signup').addEventListener("click", e => this.signup());
    componentHandler.upgradeAllRegistered();
  };

  // Instance Methods
  resetCurrentAmount(){
    document.querySelector('#amount_current').innerHTML = '';
  };

  signin(){
    let email = document.querySelector('#Settings_email').value;
    let password = document.querySelector('#Settings_password').value;

    Server.auth.signInWithEmailAndPassword(email, password).then(() => {
      console.log('Signed in.');
      App.initAfterAuthorize();
    })
  };

  signup(){
    let email = document.querySelector('#Settings_email').value;
    let password = document.querySelector('#Settings_password').value;
    let email_validator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    Server.auth.createUserWithEmailAndPassword(email, password).then(() => {
      console.log('Signed up.');
      App.initAfterAuthorize();
    })
  };

};

export default SettingsNew;

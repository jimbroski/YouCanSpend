import Controller from '../app/controller';
import App from './app.controller';
import Server from '../app/server';
import SettingsEditView from '../views/settings.edit.view';

class SettingsEdit extends Controller {
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
    document.querySelector('#root').innerHTML = SettingsEditView.index(user_params);
  };

  bindFunctions(){
    // document.querySelector('#Settings_submit').addEventListener("click", e => this.updateUser());
    document.querySelector('#Settings_signout').addEventListener("click", e => this.signout());
    componentHandler.upgradeAllRegistered();
  };

  // Instance Methods
  resetCurrentAmount(){
    document.querySelector('#amount_current').innerHTML = '';
  };

  signout(){
    Server.auth.signOut().then(() => {
      console.log('Signed Out');
    })
  };

  updateUser(){
    // let email = document.querySelector('#Settings_email').value;
    // let password = document.querySelector('#Settings_password').value;
    // let email_validator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //
    // Server.auth.createUserWithEmailAndPassword(email, password).then(() => {
    //   console.log('new user created')
    // })
  };

};

export default SettingsEdit;

import Controller from '../app/controller';
import App from './app.controller';
import Saving from '../models/saving';
import SavingNewView from '../views/saving.new.view';

class SavingNew extends Controller{
  constructor(){
    super();
    this.hideCurrentSaving();
    this.initializeVariables({});
  };

  afterInit(){
    // doc: default framework function
    this.renderTemplates();
    this.bindFunctions();
  };

  // Constructor Methods
  renderTemplates(){
    document.querySelector('#root').innerHTML = SavingNewView.new();
  };

  bindFunctions(){
    document.querySelector('#Saving_submit').addEventListener("click", this.submitSaving);
    componentHandler.upgradeAllRegistered();
  };

  // Instance Methods
  submitSaving(){
    this.saving = new Saving({
      rate: document.querySelector('#Saving_rate').value,
      balance: document.querySelector('#Saving_balance').value,
      name: document.querySelector('#Saving_name').value
    });

    this.saving.save()
      .then(() => App.go_to("SavingIndex") /* TODO add saving to URL to preload current_saving*/)
      .catch(() => {});
  };

  hideCurrentSaving(){
    document.querySelector('#amount_current').innerHTML = '';
  };

}

export default SavingNew;

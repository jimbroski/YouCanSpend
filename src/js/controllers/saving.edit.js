import Controller from '../app/controller';
import Logger from '../app/logger';
import App from './app.controller';
import Saving from '../models/saving';
import SavingEditView from '../views/saving.edit.view';

class SavingEdit extends Controller{
  constructor(id){
    super();
    this.initializeVariables({
      saving: Saving.find(id)
    });
  };

  afterInit(){
    // doc: default framework function
    this.renderTemplates();
    this.bindFunctions();
  };

  // Constructor Methods
  renderTemplates(){
    document.querySelector('#root').innerHTML = SavingEditView.edit(this.saving);
    componentHandler.upgradeAllRegistered();
  };

  bindFunctions(){
    document.querySelector('#Saving_submit').addEventListener("click", e => this.submitSaving());
    document.querySelector('#Saving_destroy').addEventListener("click", e => this.destroySaving());
  };

  // Instance Methods
  submitSaving(){
    this.saving.params = {
      rate: document.querySelector('#Saving_rate').value,
      balance: document.querySelector('#Saving_balance').value,
      name: document.querySelector('#Saving_name').value
    }

    this.saving.update()
      .then(() => App.go_to("SavingIndex") /* TODO add saving to URL to preload current_saving*/)
      .catch(() => {});
  };

  destroySaving(){
    if(confirm("Are you sure you want to delete this saving? (This can't be undone!)")){
      this.saving.destroy().then(e => {
        this.resetCurrentSaving();
        App.go_to("SavingIndex");
      }).catch(e => new Logger('error', `Could not delete saving ${this.saving.id}`));
    }
  };

  resetCurrentSaving(){
    document.querySelector('#amount_current').innerHTML = '';
  };

};
export default SavingEdit;

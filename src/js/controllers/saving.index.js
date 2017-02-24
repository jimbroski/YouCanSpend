import Controller from '../app/controller';
import App from './app.controller';
import Saving from '../models/saving';
import SavingIndexView from '../views/saving.index.view';

class SavingIndex extends Controller {
  constructor(){
    super();
    this.initializeVariables({
      savings: Saving.all()
    });
  };

  afterInit(){
    // doc: default framework function
    this.getCurrentSaving().then(result => {
      this.current_saving = result;
      this.renderCurrentSaving();
    }).catch(()=>{});
    this.renderTemplates();
    this.bindFunctions();
  };

  // Constructor Methods
  renderTemplates(){
    document.querySelector('#root').innerHTML = SavingIndexView.all(this.savings);
  };

  bindFunctions(){
    this.savings.forEach(saving => {
      document.querySelector('#' + saving.item_selector).addEventListener("click", e => {
        this.current_saving = saving;
        this.switchCurrentSaving();
      });
    });

    document.querySelector('#saving_new').addEventListener("click", e => App.go_to('SavingNew'));
    componentHandler.upgradeAllRegistered();
  };

  // Instance Methods
  getCurrentSaving(){
    var self = this;
    return new Promise((resolve,reject) => {
      let saving_id = this.getUrlParams('saving');
      let found_saving = self.savings.find(saving => saving.id == saving_id);
      (found_saving != 'undefinded') ? resolve(found_saving) : reject();
    });
  };

  renderCurrentSaving(){
    document.querySelector('#amount_current').innerHTML = '';
    document.querySelector('#amount_current').innerHTML = SavingIndexView.current(this.current_saving);
    document.querySelector('#saving_edit').addEventListener("click", e => App.go_to('SavingEdit', this.current_saving.id));
    document.querySelector('#add_new_fab').innerHTML = SavingIndexView.add_new_fab();
    document.querySelector('#add_new_fab').addEventListener("click", e => App.go_to('TransactionNew', {
      payable: 'Saving',
      payable_id: this.current_saving.id
    }));
    document.querySelector('#transaction_index').addEventListener("click", e => App.go_to('TransactionIndex', {
      payable: 'Saving',
      payable_id: this.current_saving.id
    }));
  };

  switchCurrentSaving(){
    history.pushState(null, null, `?saving=${this.current_saving.id}#${this.controller()}`);
    this.renderCurrentSaving();
  };
};

export default SavingIndex;

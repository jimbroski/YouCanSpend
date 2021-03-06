import Controller from '../app/controller';
import Logger from '../app/logger';
import App from './app.controller';
import Budget from '../models/budget';
import BudgetEditView from '../views/budget.edit.view';

class BudgetEdit extends Controller{
  constructor(id){
    super();
    this.initializeVariables({
      budget: Budget.find(id)
    });
  };

  afterInit(){
    // doc: default framework function
    this.renderTemplates();
    this.bindFunctions();
  };

  // Constructor Methods
  renderTemplates(){
    document.querySelector('#root').innerHTML = BudgetEditView.edit(this.budget);
    componentHandler.upgradeAllRegistered();
  };

  bindFunctions(){
    document.querySelector('#Budget_submit').addEventListener("click", e => this.submitBudget());
    document.querySelector('#Budget_destroy').addEventListener("click", e => this.destroyBudget());
  };

  // Instance Methods
  submitBudget(){
    this.budget.params = {
      amount: document.querySelector('#Budget_amount').value,
      name: document.querySelector('#Budget_name').value
    }

    this.budget.update()
      .then(() => App.go_to("BudgetIndex") /* TODO add budget to URL to preload current_budget*/)
      .catch(() => {});
  };

  destroyBudget(){
    if(confirm("Are you sure you want to delete this budget? (This can't be undone!)")){
      this.budget.destroy().then(e => {
        this.resetCurrentBudget();
        App.go_to("BudgetIndex");
      }).catch(e => new Logger('error', `Could not delete budget ${this.budget.id}`));
    }
  };

  resetCurrentBudget(){
    document.querySelector('#amount_current').innerHTML = '';
  };

};
export default BudgetEdit;

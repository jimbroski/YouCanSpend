import Controller from '../app/controller';
import App from './app.controller';
import Budget from '../models/budget';
import BudgetNewView from '../views/budget.new.view';

class BudgetNew extends Controller{
  constructor(){
    super();
    this.hideCurrentBudget();
    this.initializeVariables({});
  };

  afterInit(){
    // doc: default framework function
    this.renderTemplates();
    this.bindFunctions();
  };

  // Constructor Methods
  renderTemplates(){
    document.querySelector('#root').innerHTML = BudgetNewView.new();
  };

  bindFunctions(){
    document.querySelector('#Budget_submit').addEventListener("click", this.submitBudget);
    componentHandler.upgradeAllRegistered();
  };

  // Instance Methods
  submitBudget(){
    this.budget = new Budget({
      amount: document.querySelector('#Budget_amount').value,
      balance: document.querySelector('#Budget_amount').value,
      name: document.querySelector('#Budget_name').value,
      icon: "crop_square" // TODO adjustable
    });

    this.budget.save()
      .then(() => App.go_to("BudgetIndex") /* TODO add budget to URL to preload current_budget*/)
      .catch(() => {});
  };

  hideCurrentBudget(){
    document.querySelector('#amount_current').innerHTML = '';
  };

}

export default BudgetNew;

import Controller from '../app/controller';
import App from './app.controller';
import Transaction from '../models/transaction';
import TransactionNewView from '../views/transaction.new.view';

class TransactionNew extends Controller{
  constructor(budget_id){
    super();

    this.budget_id = budget_id;

    this.initializeVariables({});
  };

  afterInit(){
    // doc: default framework function
    this.renderTemplates();
    this.bindFunctions();
  };

  // Constructor Methods
  renderTemplates(){
    document.querySelector('#root').innerHTML = TransactionNewView.new();
  };

  bindFunctions(){
    // document.querySelector('#Budget_submit').addEventListener("click", this.submitBudget);
    componentHandler.upgradeAllRegistered();
  };

  // Instance Methods
  submitTransaction(){
    // this.budget = new Budget({
    //   amount: document.querySelector('#Budget_amount').value,
    //   balance: document.querySelector('#Budget_amount').value,
    //   name: document.querySelector('#Budget_name').value
    // });
    //
    // this.budget.save()
    //   .then(() => App.go_to("BudgetIndex") /* TODO add budget to URL to preload current_budget*/)
    //   .catch(() => {});
  };

}

export default TransactionNew;

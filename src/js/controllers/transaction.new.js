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

    this.focusInput();
  };

  // Constructor Methods
  renderTemplates(){
    document.querySelector('#root').innerHTML = TransactionNewView.new();
  };

  bindFunctions(){
    document.querySelector('#Transaction_submit').addEventListener("click", e => this.submitTransaction());
    componentHandler.upgradeAllRegistered();
  };

  // Instance Methods
  submitTransaction(){
    this.transaction = new Transaction({
      amount: document.querySelector('#transaction_amount_input').value,
      name: document.querySelector('#transaction_name_input').value,
      budget_id: this.budget_id
    });
    this.transaction.save()
      .then(() => {
        App.go_to("BudgetIndex") /* TODO add budget to URL to preload current_budget*/
      })
      .catch(() => {});
  };

  focusInput(){
    document.querySelector('#transaction_amount_input').focus();
  };

}

export default TransactionNew;

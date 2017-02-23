import Controller from '../app/controller';
import App from './app.controller';
import Transaction from '../models/transaction';
import TransactionNewView from '../views/transaction.new.view';

class TransactionNew extends Controller{
  constructor(params){
    super();

    this.payable = params.payable;
    this.payable_id = params.payable_id;

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
      payable_id: this.payable_id,
      payable: this.payable
    });
    this.transaction.save(`Transaction/${this.payable}/${this.payable_id}`)
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

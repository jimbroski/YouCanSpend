import Controller from '../app/controller';
import App from './app.controller';
import Transaction from '../models/transaction';
import TransactionEditView from '../views/transaction.edit.view';

class TransactionEdit extends Controller{
  constructor(params){
    super();
    this.payable = params.payable;
    this.payable_id = params.payable_id;
    this.association_path = `Transaction/${this.payable}/${this.payable_id}`;

    this.initializeVariables({
      transaction: Transaction.find(params.id, this.association_path)
    });
  };

  afterInit(){
    // doc: default framework function
    this.renderTemplates();
    this.bindFunctions();
  };

  // Constructor Methods
  renderTemplates(){
    document.querySelector('#root').innerHTML = TransactionEditView.edit(this.transaction);
    componentHandler.upgradeAllRegistered();
  };

  bindFunctions(){
    document.querySelector('#Transaction_submit').addEventListener("click", e => this.submitTransaction());
    document.querySelector('#Transaction_destroy').addEventListener("click", e => this.destroyTransaction());
  };

  // Instance Methods
  submitTransaction(){
    this.transaction.params = {
      amount: document.querySelector('#transaction_amount_input').value,
      name: document.querySelector('#transaction_name_input').value
    }

    this.transaction.update(this.association_path)
      .then(() => App.go_to('TransactionIndex', {payable: this.payable, payable_id: this.payable_id}))
      .catch(() => {});
  };

  destroyTransaction(){
    if(confirm("Are you sure you want to delete this record? (This can't be undone!)")){
      this.transaction.destroy(this.association_path).then(e => {
        App.go_to('TransactionIndex', {payable: this.payable, payable_id: this.payable_id})
      }).catch(e => new Logger('error', `Could not delete budget ${this.transaction.id}`));
    }
  };

  focusInput(){
    document.querySelector('#transaction_amount_input').focus();
  };

}

export default TransactionEdit;

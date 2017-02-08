import Budget from '../models/budget';
import BudgetNewView from '../views/budget.new.view';

class BudgetNew {
  constructor(){
    // Inizialize Variables
    // this.budget = new Budget();
    // Inizialize Views
    this.renderTemplates();
    this.bindFunctions();
  };

  // Constructor Methods
  renderTemplates(){
    document.querySelector('#root').innerHTML = BudgetNewView.new(); 
  };

  bindFunctions(){
    // document.querySelector('#Budget_submit').addEventListener("click", this.submitBudget);
  };

  // Instance Methods
  // submitBudget(){
  //   function getAndValidateAmount(){
  //     return document.querySelector('#Budget_amount').value;
  //   };
  //
  //   function getAndValidateName(){
  //     return  document.querySelector('#Budget_name').value;
  //   }
  //
  //   let newBudget = new Budget({
  //     amount: getAndValidateAmount(),
  //     name: getAndValidateName()
  //   });
  //   document.querySelector('#root').innerHTML = newBudget.templateListItem();
  //   console.log(newBudget);
  // }

}

export default BudgetNew;

import Budget from '../models/budget';

class BudgetIndex {
  constructor(){
    // Inizialize Variables
    this.budgets = Budget.all();
    this.current_budget = this.getCurrentBudget();
    // Inizialize Views
    this.renderTemplates();
    this.bindFunctions();
  };

  // Constructor Methods
  renderTemplates(){
    document.querySelector('#root').innerHTML = this.renderAllBudgets();
  };

  bindFunctions(){
    this.budgets.forEach(budget => {
      document.querySelector('#' + budget.item_selector).addEventListener("click", e => {
        this.current_budget = budget;
        this.renderCurrentBudget();
      });
    });

    // document.querySelector('#Budget_submit').addEventListener("click", this.submitBudget);
  };

  // Instance Methods
  getCurrentBudget(){
    // TODO use current route in URL to determine current Budget
    return false;
  };

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


  // Template Methods
  renderAllBudgets(){
    return this.budgets.map(budget => budget.templateListItem()).join('');
  };

  renderCurrentBudget(){
    document.querySelector('#amount_current').innerHTML = this.current_budget.templateCurrent();
  }
};

export default BudgetIndex;

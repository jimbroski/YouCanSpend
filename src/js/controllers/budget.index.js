import Budget from '../models/budget';
import BudgetNew from '../controllers/budget.new.js';

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

    document.querySelector('#budget_add_spending').addEventListener("click", this.gotoBudgetNew);
  };

  // Instance Methods
  getCurrentBudget(){
    // TODO use current route in URL to determine current Budget
    return false;
  };

  gotoBudgetNew(){
    new BudgetNew;
  }

  // Template Methods
  renderAllBudgets(){
    return this.budgets.map(budget => budget.templateListItem()).join('');
  };

  renderCurrentBudget(){
    document.querySelector('#amount_current').innerHTML = this.current_budget.templateCurrent();
  }
};

export default BudgetIndex;

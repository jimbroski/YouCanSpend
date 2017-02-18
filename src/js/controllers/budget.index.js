import Controller from '../app/controller';
import App from './app.controller';
import Budget from '../models/budget';
import BudgetIndexView from '../views/budget.index.view';

class BudgetIndex extends Controller {
  constructor(){
    super();
    this.initializeVariables({
      budgets: Budget.all()
    });
  };

  afterInit(){
    // doc: default framework function
    this.getCurrentBudget().then(result => {
      this.current_budget = result;
      this.renderCurrentBudget();
    }).catch(()=>{});
    this.renderTemplates();
    this.bindFunctions();
  };

  // Constructor Methods
  renderTemplates(){
    document.querySelector('#root').innerHTML = BudgetIndexView.all(this.budgets);
  };

  bindFunctions(){
    this.budgets.forEach(budget => {
      document.querySelector('#' + budget.item_selector).addEventListener("click", e => {
        this.current_budget = budget;
        this.switchCurrentBudget();
      });
    });

    document.querySelector('#budget_new').addEventListener("click", e => App.go_to('BudgetNew'));
    componentHandler.upgradeAllRegistered();
  };

  // Instance Methods
  getCurrentBudget(){
    var self = this;
    return new Promise((resolve,reject) => {
      let budget_id = this.getUrlParams('budget');
      let found_budget = self.budgets.find(budget => budget.id == budget_id);
      (found_budget != 'undefinded') ? resolve(found_budget) : reject();
    });
  };

  renderCurrentBudget(){
    document.querySelector('#amount_current').innerHTML = BudgetIndexView.current(this.current_budget);
    document.querySelector('#budget_edit').addEventListener("click", e => App.go_to('BudgetEdit', this.current_budget.id));
    document.querySelector('#add_new_fab').innerHTML = BudgetIndexView.add_new_fab();
    document.querySelector('#add_new_fab').addEventListener("click", e => App.go_to('TransactionNew', this.current_budget.id));
  };

  switchCurrentBudget(){
    history.pushState(null, null, `?budget=${this.current_budget.id}#${this.controller()}`);
    this.renderCurrentBudget();
  };
};

export default BudgetIndex;

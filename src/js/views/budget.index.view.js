import TimeChecker from '../services/time_checker';

class BudgetIndexView {
  static all(budgets){
    return `
      <div class="mdl-list page-content">
        ${budgets.map(budget => this.templateListItem(budget)).join('')}

        <div id="budget_new" data-route="BudgetNew" class="budget_list_item mdl-list__item">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-avatar">add</i>
            <span>Add new Budget</span>
          </span>
        </div>
      </div>

      <div id="add_new_fab"></div>`;
  };

  static templateListItem(budget){
    return `
      <div id="${budget.item_selector}" class="budget_list_item mdl-list__item mdl-list__item--two-line">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-avatar">${budget.icon}</i>
          <span>$${budget.balance}</span>
          <span class="mdl-list__item-sub-title">on ${budget.name}</span>
        </span>
      </div>`;
  };

  static current(budget){
    return `
      <div class="amount text-center">
        <button id="transaction_index" class="mdl-button mdl-js-button mdl-button--icon">
          <i class="material-icons">receipt</i>
        </button>
        &nbsp;$${budget.balance}
      </div>
      <div class="name text-center">on <strong>${budget.name}</strong> in ${TimeChecker.daysInMonthLeft()} days. <i id="budget_edit" class="material-icons">edit</i></div>`;
  };

  static add_new_fab(){
    return `
      <button id="transaction_new" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
        <i class="material-icons">add</i>
      </button>`;
  }

};

export default BudgetIndexView;

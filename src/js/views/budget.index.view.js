class BudgetIndexView {
  static all(budgets){
    return budgets.map(budget => this.templateListItem(budget)).join('');
  };

  static templateListItem(budget){
    return `
    <div id="${budget.item_selector}" class="budget_list_item mdl-list__item mdl-list__item--two-line">
      <span class="mdl-list__item-primary-content">
        <i class="material-icons mdl-list__item-avatar">${budget.icon}</i>
        <span>$${budget.amount}</span>
        <span class="mdl-list__item-sub-title">on ${budget.name}</span>
      </span>
    </div>`
  };

  static current(budget){
    return `
    <div class="amount text-center">$${budget.amount}</div>
    <div class="name text-center">on ${budget.name} <a class="" href="#"><i class="material-icons">edit</i></a></div>`
  };

};

export default BudgetIndexView;

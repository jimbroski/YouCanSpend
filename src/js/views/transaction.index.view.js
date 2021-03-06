class TransactionIndexView {
  static all(transactions){
    return `
      <div class="list-header">Current Period</div>
      <div class="mdl-list page-content">
        ${transactions.map(transaction => this.templateListItem(transaction)).join('')}
      </div>`;
  };

  static templateListItem(transaction){
    return `
      <div id="${transaction.item_selector}" class="mdl-list__item mdl-list__item--two-line">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-avatar">monetization_on</i>
          <span><strong>${transaction.amount}</strong> on ${transaction.name}</span>
          <span class="mdl-list__item-sub-title">${new Date(transaction.created_at).toDateString()}</span>
        </span>
        <span class="mdl-list__item-secondary-content">
          <button class="transaction-edit--js mdl-button mdl-js-button mdl-button--icon">
            <i class="material-icons">mode_edit</i>
          </button>
        </span>
      </div>`;
  };
};

export default TransactionIndexView;

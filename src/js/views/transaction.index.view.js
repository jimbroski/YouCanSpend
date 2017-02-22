class TransactionIndexView {
  static all(transactions){
    return `
      <div class="mdl-list page-content">
        ${transactions.map(transaction => this.templateListItem(transaction)).join('')}
      </div>`;
  };

  static templateListItem(transaction){
    return `
      <div id="${transaction.item_selector}" class="transaction_list_item mdl-list__item mdl-list__item--three-line">
        <span class="mdl-list__item-primary-content">
          <span>$${transaction.amount}</span><br>
          <span class="mdl-list__item-sub-title">on ${transaction.name}</span><br>
          <span>${new Date(transaction.created_at).toDateString()}</span>
        </span>
      </div>`;
  };
};

export default TransactionIndexView;

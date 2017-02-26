import TimeChecker from '../services/time_checker';

class SavingIndexView {
  static all(savings){
    return `
      <div class="mdl-list page-content">
        ${savings.map(saving => this.templateListItem(saving)).join('')}

        <div id="saving_new" data-route="SavingNew" class="saving_list_item mdl-list__item">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-avatar">add_circle</i>
            <span>Add new Saving</span>
          </span>
        </div>
      </div>

      <div id="add_new_fab"></div>`;
  };

  static templateListItem(saving){
    return `
      <div id="${saving.item_selector}" class="saving_list_item mdl-list__item mdl-list__item--two-line">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-avatar">${saving.icon}</i>
          <span>$${saving.balance}</span>
          <span class="mdl-list__item-sub-title">on ${saving.name}</span>
        </span>
      </div>`;
  };

  static current(saving){
    return `
      <div class="amount text-center">
        <button id="transaction_index" class="mdl-button mdl-js-button mdl-button--icon">
          <i class="material-icons">receipt</i>
        </button>
        &nbsp;$${saving.balance}
      </div>
      <div class="name text-center">on <strong>${saving.name}</strong> adding ${saving.rate}/m. <i id="saving_edit" class="material-icons">edit</i></div>`;
  };

  static add_new_fab(){
    return `
      <button id="transaction_new" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
        <i class="material-icons">add</i>
      </button>`;
  }

};

export default SavingIndexView;

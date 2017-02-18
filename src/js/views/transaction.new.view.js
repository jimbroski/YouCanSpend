class TransactionNewView {
  static new(){
    return `
    <div class="mdl-list__item">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="transaction_amount_input">
        <label class="mdl-textfield__label" for="sample4">You Spent...</label>
        <span class="mdl-textfield__error">Input is not a number!</span>
      </div>

      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" id="transaction_name_input">
        <label class="mdl-textfield__label" for="sample3">on...</label>
      </div>
    </div>

    <div class="mdl-list__item">
      <button id="Transaction_submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Add Spending
      </button>
    </div>`;
  };
};

export default TransactionNewView;

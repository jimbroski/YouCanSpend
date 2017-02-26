class TransactionEditView {
  static edit(transaction){
    return `
    <div class="mdl-list__item">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="transaction_amount_input" value="${transaction.amount}">
        <label class="mdl-textfield__label" for="sample4">You Spent...</label>
        <span class="mdl-textfield__error">Input is not a number!</span>
      </div>

      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" maxlength="25" id="transaction_name_input" value="${transaction.name}">
        <label class="mdl-textfield__label" for="sample3">on...</label>
      </div>
    </div>

    <div class="mdl-list__item">
      <button id="Transaction_submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Edit Spending
      </button>
    </div>
    <br><br>
    <hr>
    <div class="text-center">
      <button id="Transaction_destroy" class="mdl-button mdl-js-button mdl-button--accent">
        Delete Record
      </button>
    </div>`;
  };
};

export default TransactionEditView;

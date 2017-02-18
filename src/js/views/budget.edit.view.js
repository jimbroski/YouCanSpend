class BudgetEditView {
  static edit(budget){
    return `
    <div class="padding-30">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" id="Budget_name" value="${budget.name}">
        <label class="mdl-textfield__label" for="Budget_name">Budget Name</label>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="Budget_amount" value="${budget.amount}">
        <label class="mdl-textfield__label" for="Budget_amount">Budget Amount</label>
        <span class="mdl-textfield__error">Input is not a number!</span>
      </div>
      <button id="Budget_submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Save Budget
      </button>
      <br><br>
      <hr>
      <div class="text-center">
        <button id="Budget_destroy" class="mdl-button mdl-js-button mdl-button--accent">
          Delete Budget
        </button>
      </div>
    </div>`;
  };
};

export default BudgetEditView;

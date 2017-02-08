class BudgetNewView {
  static new(){
    return `
    <div class="padding-30">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" id="Budget_name">
        <label class="mdl-textfield__label" for="Budget_name">Budget Name</label>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="Budget_amount">
        <label class="mdl-textfield__label" for="Budget_amount">Budget Amount</label>
        <span class="mdl-textfield__error">Input is not a number!</span>
      </div>
      <button id="Budget_submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Save Budget
      </button>
    </div>`;
  };
};

export default BudgetNewView;

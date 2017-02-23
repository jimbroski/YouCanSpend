class SavingEditView {
  static edit(saving){
    return `
    <div class="padding-30">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" maxlength="25" id="Saving_name" value="${saving.name}">
        <label class="mdl-textfield__label" for="Saving_name">Saving Name</label>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="Saving_rate" value="${saving.rate}">
        <label class="mdl-textfield__label" for="Saving_rate">Saving Rate</label>
        <span class="mdl-textfield__error">Input is not a number!</span>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="Saving_balance" value="${saving.balance}">
        <label class="mdl-textfield__label" for="Saving_balance">Current Balance</label>
        <span class="mdl-textfield__error">Input is not a number!</span>
      </div>
      <button id="Saving_submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Save Saving
      </button>
      <br><br>
      <hr>
      <div class="text-center">
        <button id="Saving_destroy" class="mdl-button mdl-js-button mdl-button--accent">
          Delete Saving
        </button>
      </div>
    </div>`;
  };
};

export default SavingEditView;

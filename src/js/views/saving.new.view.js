class SavingNewView {
  static new(){
    return `
    <div class="padding-30">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" maxlength="25" id="Saving_name">
        <label class="mdl-textfield__label" for="Saving_name">Saving Name</label>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="Saving_rate">
        <label class="mdl-textfield__label" for="Saving_rate">Saving Rate</label>
        <span class="mdl-textfield__error">Input is not a number!</span>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="Saving_balance" value="0">
        <label class="mdl-textfield__label" for="Saving_balance">Starting Balance</label>
        <span class="mdl-textfield__error">Input is not a number!</span>
      </div>
      <button id="Saving_submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Save Saving
      </button>
    </div>`;
  };
};

export default SavingNewView;

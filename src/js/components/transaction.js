class Transaction {
  constructor(params){
    this.amount = params.amount;
    this.name = params.name;
  }

  // Templates
  templateNewTransaction(){
    return `
    <div class="mdl-list__item">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="budget_amount_input">
        <label class="mdl-textfield__label" for="sample4">You Spent...</label>
        <span class="mdl-textfield__error">Input is not a number!</span>
      </div>

      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" id="budget_name_input">
        <label class="mdl-textfield__label" for="sample3">on...</label>
      </div>
    </div><!-- /.mdl-list__item -->`
  }
}

export default Transaction;

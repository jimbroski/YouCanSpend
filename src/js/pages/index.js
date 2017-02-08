import Budget from '../components/budget';

class Index {
  constructor(){
    // Inizialize Variables
    this.budgets = this.getAllBudgets();
    this.current_budget = this.getCurrentBudget();
    // Inizialize Views
    this.renderTemplates();
    this.bindFunctions();
  };

  // Constructor Methods
  renderTemplates(){
    document.querySelector('#root').innerHTML = this.renderAllBudgets();
  };

  bindFunctions(){
    this.budgets.forEach(budget => {
      document.querySelector('#' + budget.item_selector).addEventListener("click", e => {
        this.current_budget = budget;
        this.renderCurrentBudget();
      });
    });
    // document.querySelector('#Budget_submit').addEventListener("click", this.submitBudget);
  };

  // Getter Methods
  getAllBudgets(){
    // Get all Records
    let records = {
      "1": {
        name: "groceries",
        amount: 123.34
      },
      "2": {
        name: "beer",
        amount: 212.34
      },
      "3": {
        name: "cars",
        amount: 9999.93
      },
      "4": {
        name: "incusrance",
        amount: 123.34
      },
      "5": {
        name: "and",
        amount: 123.34
      }
    };
    // TODO ^ Get those budgets from Firebase or other storage
    let record_ids = Object.keys(records);

    // Initialize object for each record and add it to an array
    let all_objects = [];

    record_ids.forEach(record_id => {
      records[record_id].id = record_id;
      let new_budget = new Budget(records[record_id]);
      all_objects.push(new_budget);
    });

    return all_objects;
  };

  getCurrentBudget(){
    // TODO use current route in URL to determine current Budget
    return false;
  };

  // submitBudget(){
  //   function getAndValidateAmount(){
  //     return document.querySelector('#Budget_amount').value;
  //   };
  //
  //   function getAndValidateName(){
  //     return  document.querySelector('#Budget_name').value;
  //   }
  //
  //   let newBudget = new Budget({
  //     amount: getAndValidateAmount(),
  //     name: getAndValidateName()
  //   });
  //   document.querySelector('#root').innerHTML = newBudget.templateListItem();
  //   console.log(newBudget);
  // }


  // Template Methods
  renderAllBudgets(){
    return this.budgets.map(budget => budget.templateListItem()).join('');
  };

  renderCurrentBudget(){
    document.querySelector('#amount_current').innerHTML = this.current_budget.templateCurrent();
  }
};

export default new Index();

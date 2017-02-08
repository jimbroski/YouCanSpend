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
    // document.querySelectorAll('.budget_list_item').addEventListener("click", this.showCurrentBudget);
    // Array.from(document.querySelectorAll('.budget_list_item')).forEach(e => e.addEventListener("click", this.showCurrentBudget));
  };

  bindFunctions(){
    this.budgets.forEach(budget => budget.bindFunctions());
    // document.querySelector('.budget_list_item').addEventListener("click", this.showCurrentBudget);
    // document.querySelector('#Budget_submit').addEventListener("click", this.submitBudget);
  };

  // Custom Methods
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


  // showCurrentBudget(e){
  //   // console.log(e.target);
  //   console.log(this);
  //   // let currentBudget = new Budget({
  //   //   amount: budget.amount,
  //   //   name: budget.name
  //   // });
  //   // return currentBudget.templateListItem();
  // }

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

  // Templates
  renderAllBudgets(){
    return this.budgets.map(budget => budget.templateListItem()).join('');
  };
};

export default new Index();

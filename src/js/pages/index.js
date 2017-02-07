import Budget from '../components/budget';

class Index {
  constructor(){
    this.renderTemplate();
    this.bindFunctions();
  };

  renderTemplate(){
    document.querySelector('#root').innerHTML = this.templateList();
    document.querySelector('.budget_list_item').addEventListener("click", this.showCurrentBudget);
  };

  bindFunctions(){
    // document.querySelector('.budget_list_item').addEventListener("click", this.showCurrentBudget);
    // document.querySelector('#Budget_submit').addEventListener("click", this.submitBudget);
  };

  showCurrentBudget(e){
    console.log(e);
    // let currentBudget = new Budget({
    //   amount: budget.amount,
    //   name: budget.name
    // });
    // return currentBudget.templateListItem();
  }

  submitBudget(){
    function getAndValidateAmount(){
      return document.querySelector('#Budget_amount').value;
    };

    function getAndValidateName(){
      return  document.querySelector('#Budget_name').value;
    }

    let newBudget = new Budget({
      amount: getAndValidateAmount(),
      name: getAndValidateName()
    });
    document.querySelector('#root').innerHTML = newBudget.templateListItem();
    console.log(newBudget);
  }

  // Templates
  templateList(){
    let budgets = [
      {
        name: "groceries",
        amount: 123.34
      },{
        name: "beer",
        amount: 212.34
      },{
        name: "cars",
        amount: 9999.93
      },{
        name: "incusrance",
        amount: 123.34
      },{
        name: "and",
        amount: 123.34
      }
    ];

    let result = budgets.map(function(budget){
      let newBudget = new Budget({
        amount: budget.amount,
        name: budget.name
      });
      return newBudget.templateListItem();
    });
    return result.join('');
  }
};

export default new Index();

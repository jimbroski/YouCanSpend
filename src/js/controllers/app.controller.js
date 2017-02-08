import Routes from '../routes';

class AppController {
  constructor(){
    this.current_route = false;

    this.bindFunctions();
    this.startup();
  }

  // Constructor Functions
  bindFunctions(){
    document.querySelectorAll('[data-route]').forEach(a => a.addEventListener("click", e => {
      this.go_to(a.getAttribute('data-route'));
    }));

    // TODO Listen to route changes?
  }

  startup(){
    console.log("Hello World");
  }

  // Instance Methods
  go_to(route){
    this.current_node = null;
    this.current_route = new Routes[route];
    console.log(this.current_route);
  }
}

export default new AppController(); // Initialize just once

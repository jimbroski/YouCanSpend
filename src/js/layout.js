class Layout {
  constructor(){
    // this.bindFunctions();
    this.startup();
  }

  bindFunctions(){
    $('body').on('click', this.startup);
  }

  startup(){
    console.log("Hello World");
  }
}

export default new Layout();

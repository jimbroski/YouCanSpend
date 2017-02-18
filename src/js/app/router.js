import Routes from '../routes';

// TODO class below is not in use yet!
class Router {
  constructor(){
    this.current = false;
  };

  go_to(route, params = {}){
    this.current = new Routes[route](params);
    this.loadingSpinnerOnRoot();
    this.current.initializeVariables().then(() => {
      window.location.hash = `/${this.current.controller()}`;
      this.renderAllViews();
      this.bindAllLinks();
      try{ this.current.afterInit() }catch(e){};
    });
  };

  loadingSpinnerOnRoot(){
    document.querySelector('#root').innerHTML = '<div class="text-center padding-30"><div class="mdl-spinner mdl-js-spinner is-active"></div></div>';
  };

  renderAllViews(){
    document.querySelector('#root').innerHTML = this.current.init().view;
  };

  bindAllLinks(){
    document.querySelectorAll('[data-route]').forEach(a => a.addEventListener("click", e => {
      this.go_to(a.getAttribute('data-route'));
    }));
  };
};
export default new Router();

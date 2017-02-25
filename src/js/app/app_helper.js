class AppHelper {
  constructor(){};

  randomKey(){
    return Math.floor(Math.random()*9e42).toString(36)
  };

  randomDateKey(){
    return (new Date%9e100).toString(36)
  };

};
export default new AppHelper();

class NumHelper {
  constructor(){};

  toPrice(amount){
    return Number(amount).toFixed(2)/1;
  };
};
export default new NumHelper();

import TimeChecker from '../services/time_checker';

class TimeHelper {
  cosntructor(){};

  beginning_of_the_month(date = TimeChecker.time_now){
    date = new Date(date)
    return new Date(date.getFullYear(), date.getMonth(), 1).getTime();
  };

  end_of_the_month(date = TimeChecker.time_now){
    date = new Date(date)
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getTime();
  };
};
export default new TimeHelper();

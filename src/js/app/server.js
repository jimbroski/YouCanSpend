import * as firebase from "firebase";
import AppHelper from './app_helper';
import Logger from './logger';

class Server {
  constructor(){
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyAoVdn36pNYEN6HHkuAGkccUySIgY0ESqY",
      authDomain: "youcanspend-test.firebaseapp.com",
      databaseURL: "https://youcanspend-test.firebaseio.com",
      storageBucket: "youcanspend-test.appspot.com",
      messagingSenderId: "38042327733"
    });
  };

  authorize(){
    var self = this;
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(function(user) {
        if(user){
          new Logger('info', 'User found.');
          self.assignServerVariables();
          resolve(firebase.auth().currentUser.uid);
        }else{
          // Create new user
          let generated_pw = AppHelper.randomKey(),
              generated_user = AppHelper.randomDateKey() + '-' + AppHelper.randomKey(),
              generated_email = generated_user + '@noemail.com',
              generated_id = generated_user + '-' + generated_pw;

          firebase.auth().createUserWithEmailAndPassword(generated_email, generated_pw).then(() => {
            new Logger('info', 'New user created.');
          })
        }
      });
    });
  };

  assignServerVariables(){
    this.current_user = firebase.auth().currentUser.uid;
    this.server_time = firebase.database.ServerValue.TIMESTAMP;
    this.db = firebase.database().ref(this.current_user);
  }

  get(path){
    var self = this;
    return new Promise((resolve, reject) => {
      self.db.child(path).once('value', snapshot => resolve(snapshot.val()));
    });
  };

  set(path, params){
    return this.db.child(path).set(params);
  };

  post(path, params){
    return this.db.child(path).push(params);
  };

  patch(path, params){
    return this.db.child(path).update(params);
  };

  delete(path){
    return this.db.child(path).remove();
  };

  // TODO Remove Dev Methods:
  seedDemoContent(){
    this.db.set({
      "Budget": {
        "1": {
          name: "groceries",
          amount: 123.34,
          balance: 44
        },
        "2": {
          name: "beer",
          amount: 212.34,
          balance: -23
        },
        "3": {
          name: "cars",
          amount: 9999.93,
          balance: 3342
        },
        "4": {
          name: "incusrance",
          amount: 123.34,
          balance: 44.23
        },
        "5": {
          name: "and",
          amount: 123.34,
          balance: 123
        }
      }
    });
  };

};

export default new Server();

class SettingsNewView {
  static index(){
    return `
    <div class="padding-30">
      <p>Sign In / Sign up</p>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="email" id="Settings_email" required>
        <label class="mdl-textfield__label" for="Settings_email">Email Address</label>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="password" id="Settings_password" required>
        <label class="mdl-textfield__label" for="Settings_password">Password</label>
      </div>
      <button id="Settings_signin" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Sign In
      </button>
      <button id="Settings_signup" class="mdl-button mdl-js-button mdl-button--accent">
        Sign Up
      </button>
    </div>`;
  };
};

export default SettingsNewView;

class SettingsNewView {
  static index(user){
    return `
    <div class="padding-30">
      <p>Edit Account</p>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="email" id="Settings_email" value="${user.email}" required>
        <label class="mdl-textfield__label" for="Settings_email">Email Address</label>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="password" id="Settings_password" required>
        <label class="mdl-textfield__label" for="Settings_password">Password</label>
      </div>
      <button id="Settings_submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Save
      </button>
      <br><br>
      <hr>
      <div class="text-center">
        <button id="Settings_signout" class="mdl-button mdl-js-button mdl-button--accent">
          Logout
        </button>
      </div>
    </div>`;
  };
};

export default SettingsNewView;

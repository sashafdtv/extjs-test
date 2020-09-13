Ext.define("TZ.view.login.Login", {
  extend: "Ext.window.Window",
  controller: "login",
  requires: ["TZ.view.login.LoginController"],
  xtype: "login",
  

  title: "Авторизация",
  closable: false,
  bodyPadding: 10,
  autoShow: true,

  items: {
    xtype: "form",
    reference: "form",
    id: "loginForm",
    items: [{
     
      xtype: "textfield",
      name: "login",
      fieldLabel: "Логин",
      allowBlank: false,
    }, {
     
      xtype: "textfield",
      name: "password",
      fieldLabel: "Пароль",
      allowBlank: false,
    }], 
    buttons: [{
      text: "Войти",
      formBind: true,
      handler: "onLoginClick",
    }],
  }
});
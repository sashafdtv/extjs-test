Ext.define("TZ.view.login.LoginController", {

  extend: "Ext.app.ViewController",
  
  requires: [
    "TZ.store.Users"
  ],

  alias: "controller.login",

  onLoginClick: function(btn) {
    
    let usersArr = Users.data.items;
    let btnLoginValue = btn.up("login").down("textfield[fieldLabel='Логин']").getValue();
    let btnPasswordValue = btn.up("login").down("textfield[fieldLabel='Пароль']").getValue();
    
    for (let i = 0; i < usersArr.length; i++) {

    
      
      if (usersArr[i].data.login === btnLoginValue) {
        if (usersArr[i].data.password === btnPasswordValue) {
          localStorage.setItem("TZLoggedIn", true);
        }
      }

      if (localStorage.getItem("TZLoggedIn")) {
        
        this.getView().close();
    
        Ext.create({
          xtype: 'app-main'
        });
      
      } else {
        Ext.Msg.alert('Ошибка', 'Данные не верны');
      } 
    }
  },
});
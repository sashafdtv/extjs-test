Ext.define('TZ.Application', {
    extend: 'Ext.app.Application',
    requires: [
        "TZ.view.main.Main",
        "TZ.view.login.Login"
    ],
    
    launch: function () {

        var loggedIn;

        loggedIn = localStorage.getItem("TZLoggedIn");

        if (loggedIn) {
            Ext.create({
                xtype: "app-main"
            });
        } else {
            Ext.create({
                xtype: "login"
            });
        }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

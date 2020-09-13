Ext.define('TZ.view.main.Main', {
    extend: 'Ext.tab.Panel',
    
    id: "mainView",
    xtype: 'app-main',
    ui: 'navigation',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        
        'TZ.view.main.MainController',
        'TZ.view.main.MainModel',
        'TZ.view.main.List'
    ],
    
    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: 'Главное окно'
            },
            flex: 0
        },
        items: [{
            xtype: "button",
            text: "Товары",
            margin: "10 0",
            handler: "onClickButtonProducts"

        }, {
            xtype: "button",
            text: "Выйти",
            margin: "10 0",
            handler: "onClickButtonExit"
        }]
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'top'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                }
            }
        }
    },

   
});

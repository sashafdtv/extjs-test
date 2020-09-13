Ext.define('TZ.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: "model.main",
    
    fields: [
        {name: 'ID', type: "int"},
        {name: 'Имя', type: "string"},
        {name: 'Описание', type: "string"},
        {name: 'Цена', type: "int"},
        {name: 'Кол-во', type: "int"}
    ],

    alias: 'viewmodel.main',

    data: {
        name: 'TZ'
    }
});

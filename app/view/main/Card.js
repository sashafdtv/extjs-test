Ext.define("TZ.view.main.Card", {
    extend: "Ext.form.Panel",
    requires: "TZ.view.main.MainController",
    xtype: "cardPanel",
    title: `Карточка товара: `,
    floating: true,
    heigth: 800,
    items: {
        xtype: "form",
        items: [{
            xtype: "displayfield",
            margin: "20 20 40 20",
            fieldLabel: "ID",
            editable: false
        }, 
        {
            xtype: "displayfield",
            margin: "20 20 40 20",
            fieldLabel: "Наименование",
            editable: false,
            border: false
        }, {
            xtype: "numberfield",
            margin: "20 20 40 20",
            fieldLabel: "Цена",
            minValue: 0,
            editable: true,
            flex: 1
        }, {
            xtype: "numberfield",
            margin: "20 20 40 20",
            fieldLabel: "Кол-во",
            minValue: 0,
            editable: true,
            flex: 1,
        }],
        buttons: [{
            xtype: "button",
            text: "Сохранить",
        }, {
            xtype: "button",
            text: "Отмена",
        }
        ]},
});

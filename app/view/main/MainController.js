Ext.define('TZ.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    view: ["TZ.view.main.Main"],
    alias: 'controller.main',

    renderedGrid: function (value, el) {
        if (value) return value;
        el.style = "background-color: red";
    },

    onItemSelected: function (sender, record) {

        let cardPanel = Ext.create({
            xtype: "cardPanel",
        });

        cardPanel.title = `Карточка товара: ${record.data.name}`;
        cardPanel.down("displayfield[fieldLabel='ID']").setValue(record.data.ID);
        cardPanel.down("displayfield[fieldLabel='Наименование']").setValue(record.data.name);
        cardPanel.down("textfield[fieldLabel='Цена']").setValue(record.data.price);
        cardPanel.down("textfield[fieldLabel='Кол-во']").setValue(record.data.count);

        cardPanel.down("button[text='Сохранить']").handler = function() {
            

                record.data.price = this.up("form").down("numberfield[fieldLabel='Цена']").getValue();
                record.data.count = this.up("form").down("numberfield[fieldLabel='Кол-во']").getValue();
                productsLists.reload();
    
                this.up("panel").destroy();
                Ext.Msg.alert('Сохранение', 'Данные сохранены');
            };

        cardPanel.down("button[text='Отмена']").handler = function() {
            this.up("panel").destroy();
        };

        cardPanel.show();
    },

    onClickButtonExit: function () {

        localStorage.removeItem('TZLoggedIn');
        this.getView().destroy();

        Ext.create({
            xtype: 'login'
        });
    },

    onClickButtonProducts: function () {
        Ext.getCmp("mainView").add({
            title: "Товары",
            items: [{
                xtype: "mainlist"
            }]
        });
    },

    pressKeyIdFilter: function (scope, e) {

        if (e.getKey() === 13) {

            let valueField = scope.up().down("textfield[fieldLabel='ID']").getValue();

            scope.up().down("grid").getStore().addFilter({
                property: "ID",
                value: valueField
            });
        }
    },

    pressKeyDescriptionFilter: function (scope, e) {

        if (e.getKey() === 13) {
            let valueField = scope.up().down("textfield[fieldLabel='Описание']").getValue();

            scope.up().down("grid").getStore().addFilter({
                property: "description",
                value: valueField,
                anyMatch: true,
            });
        }
    }
});
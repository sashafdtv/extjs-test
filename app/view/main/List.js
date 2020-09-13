Ext.define('TZ.view.main.List', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlist',
    requires: [
        'TZ.store.Products'
    ],

    title: 'Товары',

    items: [{
        xtype: "textfield",
        
        fieldLabel: "ID",
        margin: "10 0",
        enableKeyEvents: true,
        listeners: {

            keypress: "pressKeyIdFilter"
        }
    }, {
        xtype: "textfield",
        fieldLabel: "Описание",
        margin: "10 0",
        enableKeyEvents: true,
        listeners: {

            keypress: "pressKeyDescriptionFilter"
        }
    }, {
       
        xtype: "grid",
        autoLoad: true,
        autoSync: true,
        store: productsLists,
        
        plugins: "gridfilters",
        
        columns: [
            {
                text: 'ID',
                dataIndex: 'ID',
                flex: 1,
                type: "int"
            }, { 
                text: 'Имя',
                dataIndex: 'name',
                flex: 1 
            }, {
                text: 'Описание',
                dataIndex: 'description',
                flex: 1 
            }, { 
                text: 'Цена', 
                dataIndex: 'price',
                flex: 1,
                type: "int"
            }, { 
                text: 'Кол-во',  
                dataIndex: 'count', 
                flex: 1,
                renderer: "renderedGrid",
            },
        ],

        listeners: {
            select: 'onItemSelected'
        },
        

    }],

    

    
});

Ext.define('TZ.store.Products', {
    extend: 'Ext.data.Store',
    alias: 'store.products',
    id: "products",
    xtype: "productsList",
    autoSync: true,
    autoLoad: true,
    viewModel: "main",

    data: { 
        items: [
            { 
                ID: 1,
                name: "Notebook Lenovo", 
                description: "Ноутбук ThinkPad T4600", 
                price: 100, 
                count: 2 
            }, { 
                ID: 2, 
                name: "Keyboard OKLICK", 
                description: "Клавиатура OKLICK 140M", 
                price: 50, 
                count: 8 
            }, { 
                ID: 3, 
                name: "Network adapter", 
                description: "Сетевой адаптер Wi-fi", 
                price: 7, 
                count: 0 
            },        
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

let productsLists = Ext.create({
    xtype: "productsList"
});

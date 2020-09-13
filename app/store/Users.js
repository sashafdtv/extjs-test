Ext.define("TZ.store.Users", {
  extend: "Ext.data.Store",
  alias: "store.users",
  fields: [
    "login", "password"
  ],

  data: {
    items: [
      {
        login: "admin",
        password: "padmin"
      }
    ]
  },

  proxy: {
    type: 'memory',
    reader: {
        type: 'json',
        rootProperty: 'items'
    }
}
});

let Users = Ext.create("TZ.store.Users");
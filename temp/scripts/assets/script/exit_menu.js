"use strict";
cc._RFpush(module, 'b70f9zb7TdEIrM5JVPKpUaC', 'exit_menu');
// script\exit_menu.js

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {},

    exit_menu_clicked: function exit_menu_clicked() {
        cc.log("ok, exit menu has been clicked！！！");
        cc.director.loadScene('HowToPlay');
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
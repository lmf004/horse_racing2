"use strict";
cc._RFpush(module, '58207Zi6xNAE4dCMZ5UeMgx', 'Menu');
// script\Menu.js

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
        audioMng: cc.Node
    },

    // use this for initialization
    onLoad: function onLoad() {},
    how2playExitCallback: function how2playExitCallback() {
        cc.log("-------------------------004");
        cc.director.loadScene('bet');
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
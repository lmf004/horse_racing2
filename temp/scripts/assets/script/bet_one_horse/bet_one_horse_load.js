"use strict";
cc._RFpush(module, '123e2Vd7edA66/smrdvgU8y', 'bet_one_horse_load');
// script\bet_one_horse\bet_one_horse_load.js

cc.Class({
    'extends': cc.Component,

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
    onLoad: function onLoad() {
        Global.preload_scene();
    },

    confirmBetClicked: function confirmBetClicked() {
        Global.run_scene('bet');
    }
});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
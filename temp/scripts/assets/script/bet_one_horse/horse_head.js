"use strict";
cc._RFpush(module, '76a62g9S0tBAo4cSqj50idP', 'horse_head');
// script\bet_one_horse\horse_head.js

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
        var self = this;
        var pfx = 'horseRacing___shared___horses___horse-';
        var colors = ['black', 'blonde', 'brown', 'grey-blonde', 'grey-dark', 'spotted'];
        var url = "texture/" + pfx + colors[Global.horse_picked - 1];
        cc.log('------001 ' + url);
        cc.loader.loadRes(url, cc.SpriteFrame, function (err, spriteFrame) {
            var sprite = self.getComponent(cc.Sprite);
            sprite.spriteFrame = spriteFrame;
        });
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
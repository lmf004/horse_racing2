"use strict";
cc._RFpush(module, '46ea1BIe1BBJ6wgO4hky6Ha', 'change_amount');
// script\bet_one_horse\change_amount.js

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
        money_label: {
            "default": null,
            type: cc.Label
        },

        win: { "default": null, type: cc.Node },
        place: { "default": null, type: cc.Node },
        show: { "default": null, type: cc.Node }

    },

    // use this for initialization
    onLoad: function onLoad() {},

    subtype_clicked: function subtype_clicked(evt, data) {
        this.win.color = cc.Color.WHITE;
        this.place.color = cc.Color.WHITE;
        this.show.color = cc.Color.WHITE;
        if (data == 1) {
            this.win.color = cc.Color.YELLOW;
        }
        if (data == 2) {
            this.place.color = cc.Color.YELLOW;
        }
        if (data == 3) {
            this.show.color = cc.Color.YELLOW;
        }
        Global.change_subtype(data);
    },

    change_money_clicked: function change_money_clicked(evt, data) {
        var value = Global.change_bet_amount(data == 2);
        this.money_label.string = value + "K";
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
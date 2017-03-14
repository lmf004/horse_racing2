require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Menu":[function(require,module,exports){
"use strict";
cc._RFpush(module, '58207Zi6xNAE4dCMZ5UeMgx', 'Menu');
// script\Menu.js

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
        preloadDone: {
            'default': null,
            type: cc.Node
        },
        audioMng: cc.Node
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        Global.preload_scene();
        // this.preloadDone.opacity = 64;
        // cc.director.preloadScene('bet', function(){
        //     self.preloadDone.opacity = 255;
        // });
    },
    how2playExitCallback: function how2playExitCallback() {
        //cc.director.loadScene('bet');     
        Global.run_scene('bet');
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"bet_a_horse":[function(require,module,exports){
"use strict";
cc._RFpush(module, '50044chbSVG0bx1lc3O/JoI', 'bet_a_horse');
// script\bet_a_horse.js

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
    onLoad: function onLoad() {},

    horse_clicked: function horse_clicked(event, eventCustomData) {
        Global.horse_picked = eventCustomData;
        //cc.director.loadScene('BetOneHorse');
        Global.run_scene('BetOneHorse');
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"bet_item":[function(require,module,exports){
"use strict";
cc._RFpush(module, '9c186WEi3BE2Y2pW39OmOTO', 'bet_item');
// script\bet_item.js

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
        cc.log('-----------004 ' + this.node.width);
        // var w = this.node.width;
        // var h = this.node.height;
        // var ctx = this.node.getComponent(cc.Graphics);
        // ctx.rect(0,0,w,h);
        // ctx.stroke(); 
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"bet_one_horse_load":[function(require,module,exports){
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
},{}],"bet_one_horse":[function(require,module,exports){
"use strict";
cc._RFpush(module, '5aa69NsNipJGKR/0TSmA1Z5', 'bet_one_horse');
// script\bet_one_horse.js

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
        cc.director.preloadScene('bet', function () {});
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"bet":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'fb991EXg69PTK2ZsFe+R7W8', 'bet');
// script\bet.js

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
        preloadDone: {
            "default": null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        //cc.director.preloadScene('BetOneHorse', function(){});
        //cc.director.preloadScene('race', function(){});
        Global.preload_scene();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"change_amount":[function(require,module,exports){
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
},{}],"exit_menu":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'b70f9zb7TdEIrM5JVPKpUaC', 'exit_menu');
// script\exit_menu.js

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
    onLoad: function onLoad() {},

    exit_menu_clicked: function exit_menu_clicked() {
        var curr = Global.curr_scene;
        var next;
        if (curr == 'BetOneHorse') next = 'bet';
        if (curr == 'bet') next = 'HowToPlay';
        cc.log("---------8888----" + next);
        Global.run_scene(next);
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"horse_head":[function(require,module,exports){
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
},{}],"horse_idx":[function(require,module,exports){
"use strict";
cc._RFpush(module, '84b5azj1eFIBYQEv4e9OQRw', 'horse_idx');
// script\bet_one_horse\horse_idx.js

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
    onLoad: function onLoad() {
        var self = this;
        var url = "texture/horseRacing___betting___mainscreen___btn-0" + Global.horse_picked;
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
},{}],"horse_mask":[function(require,module,exports){
"use strict";
cc._RFpush(module, '7b362XBwwFAcJZM0mGxjfAd', 'horse_mask');
// script\bet_one_horse\horse_mask.js

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
        var pfx = 'horseRacing___shared___horses___mask';
        var colors = ['red', 'white', 'blue', 'yellow', 'green', 'black'];
        var url = "texture/" + pfx + Global.horse_picked + '-' + colors[Global.horse_picked - 1];
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
},{}],"horse_name":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c6cb4GhYyhDEpLnD6oXVY8G', 'horse_name');
// script\bet_one_horse\horse_name.js

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
    onLoad: function onLoad() {
        var is_bet_scene = this.node.parent.name.match(/bet-it1em-(\d)/);
        if (is_bet_scene) {
            var idx = is_bet_scene[1];
        }
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"how2play_exit":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2cb9dhj15RL+Z4n4vNZQxNW', 'how2play_exit');
// script\how2play_exit.js

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
    onLoad: function onLoad() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"how2play_scrollview":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'b8bc9k/t9RJO4ZZavg+lXX7', 'how2play_scrollview');
// script\how2play_scrollview.js

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
        // var hdr = new cc.Component.EventHandler();
        // hdr.target = this.node;
        // hdr.component = this;
        // hdr.handler = this.callback;
        // this.scrollEvents.push(hdr);
    },
    callback: function callback(scrollview, eventType, customEventData) {
        cc.log('-----------------002');
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"load":[function(require,module,exports){
"use strict";
cc._RFpush(module, '3b9ff6WngdKXJ+1UJYa5/Vq', 'load');
// script\load.js

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
        dotActive: {
            "default": null,
            type: cc.Prefab
        },
        dotInactive: {
            "default": null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        this.scheduleOnce(function () {
            cc.director.loadScene('HowToPlay');
        }, 9);

        var n = 5;
        var dis = 50;
        var x = 0;
        if (1 == n % 2) x = dis * ((n - 1) / 2) * -1;else x = (dis * (n / 2) - dis / 2) * -1;
        cc.log("-----------------001 " + x);
        var xa = [];
        for (var i = 0; i < n; ++i) {
            xa.push(x + i * dis);
        }

        xa.forEach(function (x) {
            var dot = cc.instantiate(self.dotInactive);
            self.node.addChild(dot);
            dot.setPosition(x, 0);
        });

        var dot = cc.instantiate(self.dotActive);
        this.node.addChild(dot);
        dot.setPosition(x, 0);

        var ci = 0;
        var dir = 1;
        this.schedule(function () {
            //dot.setPosition(xa[(ci++)%n], 0);
            dot.setPosition(xa[ci], 0);
            ci += dir;
            if (dir > 0 && ci == n) {
                ci -= 2;dir = -1;
            }
            if (dir < 0 && ci == -1) {
                ci += 2;dir = 1;
            }
        }, 0.3);
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"logo":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'f08645je7VFgIaghrycBnS8', 'logo');
// script\logo.js

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
        //Global.preload_scene();
        cc.director.preloadScene('HowToPlay', function () {});
        this.scheduleOnce(function () {
            //Global.run_scene('HowToPlay');
            cc.director.loadScene('HowToPlay');
        }, 3);
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"persist":[function(require,module,exports){
"use strict";
cc._RFpush(module, '3d7fcrQ7y9KlLgLmzvsXlh2', 'persist');
// script\persist.js

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
        cc.game.addPersistRootNode(this.node);
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        Global.update_progress_bar(dt);
    }
});

var six_horse_conf = [{ name: 'one', payoutOds: '13:5', handicap: '13:5' }, { name: 'two', payoutOds: '13:5', handicap: '13:5' }, { name: 'three', payoutOds: '13:5', handicap: '13:5' }, { name: 'four', payoutOds: '13:5', handicap: '13:5' }, { name: 'five', payoutOds: '13:5', handicap: '13:5' }, { name: 'six', payoutOds: '13:5', handicap: '13:5' }];

window.Global = {
    gameName: 'race_horse',
    horse_picked: 1,
    six_horse_info: six_horse_conf,
    curr_scene: 'HowToPlay',

    winner: 3,

    bet_subtype: 1,
    change_subtype: function change_subtype(n) {
        this.bet_subtype = n;
    },

    bet_amount: 100,
    change_bet_amount: function change_bet_amount(positive) {
        if (positive) this.bet_amount += 10;else this.bet_amount -= 10;
        if (this.bet_amount > 250) this.bet_amount = 250;
        if (this.bet_amount < 10) this.bet_amount = 10;
        return this.bet_amount;
    },

    time_to_race: 10,
    time_to_race_past: 0,
    update_progress_bar: function update_progress_bar(dt) {
        if (this.time_to_race > 0) {
            this.time_to_race_past += dt;
            if (this.time_to_race_past >= this.time_to_race) {
                this.time_to_race = 0;
                this.run_scene('race');
            }
        }
    },

    progress_bar: function progress_bar() {
        if (this.time_to_race > 0) return 1 - this.time_to_race_past / this.time_to_race;
        return 0;
    },

    preload_scene: function preload_scene() {
        var scene = this.curr_scene;
        var nexts = [];
        if (scene == "logo") nexts.push('HowToPlay');
        if (scene == "HowToPlay") nexts.push("bet");
        if (scene == "bet") nexts.push("BetOneHorse", "HowToPlay", "race");
        if (scene == "BetOneHorse") nexts.push("bet", "race");
        if (scene == "race") nexts.push("bet");
        cc.log(nexts);
        for (var a in nexts) {
            cc.director.preloadScene(nexts[a], function () {});
        }
    },

    run_scene: function run_scene(scene) {
        cc.director.loadScene(scene);
        this.curr_scene = scene;
    }

};

cc._RFpop();
},{}],"progress_bar":[function(require,module,exports){
"use strict";
cc._RFpush(module, '67121Jdu1ZD55sZocdCPoGF', 'progress_bar');
// script\progress_bar.js

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
        //progress_bar: cc.Sprite
    },

    // use this for initialization
    onLoad: function onLoad() {
        //var bar = this.progress_bar;
        this.node.scaleX = Global.progress_bar();
        cc.log("-------------------008 " + this.node.x);
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        //var bar = this.progress_bar.node;
        //bar.scaleX -= 0.005;
        //if(bar.scaleX < 0) bar.scaleX = 0;
        this.node.scaleX = Global.progress_bar();
    }
});

cc._RFpop();
},{}],"raceMenu":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'b399bYhht5N5raGuj7QuYBm', 'raceMenu');
// script\raceMenu.js

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
        distance: 200,
        time: 20,
        winner: 3,
        time_past: 0,
        horsePos: [],
        winner_spdup: false,
        race_finish: false,
        horse1: { "default": null, type: cc.Node },
        horse2: { "default": null, type: cc.Node },
        horse3: { "default": null, type: cc.Node },
        horse4: { "default": null, type: cc.Node },
        horse5: { "default": null, type: cc.Node },
        horse6: { "default": null, type: cc.Node }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.winner = Global.winner;
        for (var i = 0; i < 6; ++i) {
            this.horsePos.push(0);
        }
        this.winner_spdup = false;
        this.race_finish = false;
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.race_finish) return;

        var hs = [this.horse1, this.horse2, this.horse3, this.horse4, this.horse5, this.horse6];
        for (var j = 0; j < 6; ++j) {
            hs[j].x += this.horsePos[j];
        }
        var distance = this.distance;
        var time = this.time;
        var winner = this.winner;
        var v = distance / time;
        var vrange = v * 0.5;
        var vs = [];
        for (var i = 0; i < 6; ++i) {
            var dv;
            if (i == winner && this.winner_spdup) {
                dv = v + vrange;
            } else {
                var r = Math.random();
                dv = v + (r - 0.5) * 2 * vrange;
            }
            var dis = dv * dt;
            this.horsePos[i] += dis;
        }
        this.time_past += dt;
        if (!this.winner_spdup && this.time_past > time * 0.8) this.winner_spdup = true;
        if (this.horsePos[winner] >= distance) this.race_finish = true;
    }
});

cc._RFpop();
},{}]},{},["bet_one_horse_load","how2play_exit","load","persist","change_amount","bet_a_horse","Menu","bet_one_horse","progress_bar","horse_head","horse_mask","horse_idx","bet_item","raceMenu","exit_menu","how2play_scrollview","horse_name","logo","bet"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L0NvY29zQ3JlYXRvci9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9zY3JpcHQvTWVudS5qcyIsImFzc2V0cy9zY3JpcHQvYmV0X2FfaG9yc2UuanMiLCJhc3NldHMvc2NyaXB0L2JldF9pdGVtLmpzIiwiYXNzZXRzL3NjcmlwdC9iZXRfb25lX2hvcnNlL2JldF9vbmVfaG9yc2VfbG9hZC5qcyIsImFzc2V0cy9zY3JpcHQvYmV0X29uZV9ob3JzZS5qcyIsImFzc2V0cy9zY3JpcHQvYmV0LmpzIiwiYXNzZXRzL3NjcmlwdC9iZXRfb25lX2hvcnNlL2NoYW5nZV9hbW91bnQuanMiLCJhc3NldHMvc2NyaXB0L2V4aXRfbWVudS5qcyIsImFzc2V0cy9zY3JpcHQvYmV0X29uZV9ob3JzZS9ob3JzZV9oZWFkLmpzIiwiYXNzZXRzL3NjcmlwdC9iZXRfb25lX2hvcnNlL2hvcnNlX2lkeC5qcyIsImFzc2V0cy9zY3JpcHQvYmV0X29uZV9ob3JzZS9ob3JzZV9tYXNrLmpzIiwiYXNzZXRzL3NjcmlwdC9iZXRfb25lX2hvcnNlL2hvcnNlX25hbWUuanMiLCJhc3NldHMvc2NyaXB0L2hvdzJwbGF5X2V4aXQuanMiLCJhc3NldHMvc2NyaXB0L2hvdzJwbGF5X3Njcm9sbHZpZXcuanMiLCJhc3NldHMvc2NyaXB0L2xvYWQuanMiLCJhc3NldHMvc2NyaXB0L2xvZ28uanMiLCJhc3NldHMvc2NyaXB0L3BlcnNpc3QuanMiLCJhc3NldHMvc2NyaXB0L3Byb2dyZXNzX2Jhci5qcyIsImFzc2V0cy9zY3JpcHQvcmFjZU1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNTgyMDdaaTZ4TkFFNGRDTVo1VWVNZ3gnLCAnTWVudScpO1xuLy8gc2NyaXB0XFxNZW51LmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgcHJlbG9hZERvbmU6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgYXVkaW9Nbmc6IGNjLk5vZGVcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgR2xvYmFsLnByZWxvYWRfc2NlbmUoKTtcbiAgICAgICAgLy8gdGhpcy5wcmVsb2FkRG9uZS5vcGFjaXR5ID0gNjQ7XG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnYmV0JywgZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gICAgIHNlbGYucHJlbG9hZERvbmUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgLy8gfSk7XG4gICAgfSxcbiAgICBob3cycGxheUV4aXRDYWxsYmFjazogZnVuY3Rpb24gaG93MnBsYXlFeGl0Q2FsbGJhY2soKSB7XG4gICAgICAgIC8vY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdiZXQnKTsgICAgIFxuICAgICAgICBHbG9iYWwucnVuX3NjZW5lKCdiZXQnKTtcbiAgICB9XG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNTAwNDRjaGJTVkcwYngxbGMzTy9Kb0knLCAnYmV0X2FfaG9yc2UnKTtcbi8vIHNjcmlwdFxcYmV0X2FfaG9yc2UuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9LFxuXG4gICAgaG9yc2VfY2xpY2tlZDogZnVuY3Rpb24gaG9yc2VfY2xpY2tlZChldmVudCwgZXZlbnRDdXN0b21EYXRhKSB7XG4gICAgICAgIEdsb2JhbC5ob3JzZV9waWNrZWQgPSBldmVudEN1c3RvbURhdGE7XG4gICAgICAgIC8vY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdCZXRPbmVIb3JzZScpO1xuICAgICAgICBHbG9iYWwucnVuX3NjZW5lKCdCZXRPbmVIb3JzZScpO1xuICAgIH1cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc5YzE4NldFaTNCRTJZMnBXMzlPbU9UTycsICdiZXRfaXRlbScpO1xuLy8gc2NyaXB0XFxiZXRfaXRlbS5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICBjYy5sb2coJy0tLS0tLS0tLS0tMDA0ICcgKyB0aGlzLm5vZGUud2lkdGgpO1xuICAgICAgICAvLyB2YXIgdyA9IHRoaXMubm9kZS53aWR0aDtcbiAgICAgICAgLy8gdmFyIGggPSB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgICAgICAvLyB2YXIgY3R4ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgIC8vIGN0eC5yZWN0KDAsMCx3LGgpO1xuICAgICAgICAvLyBjdHguc3Ryb2tlKCk7IFxuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzEyM2UyVmQ3ZWRBNjYvc21yZHZnVTh5JywgJ2JldF9vbmVfaG9yc2VfbG9hZCcpO1xuLy8gc2NyaXB0XFxiZXRfb25lX2hvcnNlXFxiZXRfb25lX2hvcnNlX2xvYWQuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgR2xvYmFsLnByZWxvYWRfc2NlbmUoKTtcbiAgICB9LFxuXG4gICAgY29uZmlybUJldENsaWNrZWQ6IGZ1bmN0aW9uIGNvbmZpcm1CZXRDbGlja2VkKCkge1xuICAgICAgICBHbG9iYWwucnVuX3NjZW5lKCdiZXQnKTtcbiAgICB9XG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNWFhNjlOc05pcEpHS1IvMFRTbUExWjUnLCAnYmV0X29uZV9ob3JzZScpO1xuLy8gc2NyaXB0XFxiZXRfb25lX2hvcnNlLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnYmV0JywgZnVuY3Rpb24gKCkge30pO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2ZiOTkxRVhnNjlQVEsyWnNGZStSN1c4JywgJ2JldCcpO1xuLy8gc2NyaXB0XFxiZXQuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIHByZWxvYWREb25lOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgLy9jYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ0JldE9uZUhvcnNlJywgZnVuY3Rpb24oKXt9KTtcbiAgICAgICAgLy9jYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ3JhY2UnLCBmdW5jdGlvbigpe30pO1xuICAgICAgICBHbG9iYWwucHJlbG9hZF9zY2VuZSgpO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzQ2ZWExQkllMUJCSjZ3Z080aGt5NkhhJywgJ2NoYW5nZV9hbW91bnQnKTtcbi8vIHNjcmlwdFxcYmV0X29uZV9ob3JzZVxcY2hhbmdlX2Ftb3VudC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgbW9uZXlfbGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcblxuICAgICAgICB3aW46IHsgXCJkZWZhdWx0XCI6IG51bGwsIHR5cGU6IGNjLk5vZGUgfSxcbiAgICAgICAgcGxhY2U6IHsgXCJkZWZhdWx0XCI6IG51bGwsIHR5cGU6IGNjLk5vZGUgfSxcbiAgICAgICAgc2hvdzogeyBcImRlZmF1bHRcIjogbnVsbCwgdHlwZTogY2MuTm9kZSB9XG5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIHN1YnR5cGVfY2xpY2tlZDogZnVuY3Rpb24gc3VidHlwZV9jbGlja2VkKGV2dCwgZGF0YSkge1xuICAgICAgICB0aGlzLndpbi5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICB0aGlzLnBsYWNlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIHRoaXMuc2hvdy5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICBpZiAoZGF0YSA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLndpbi5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YSA9PSAyKSB7XG4gICAgICAgICAgICB0aGlzLnBsYWNlLmNvbG9yID0gY2MuQ29sb3IuWUVMTE9XO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhID09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdy5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcbiAgICAgICAgfVxuICAgICAgICBHbG9iYWwuY2hhbmdlX3N1YnR5cGUoZGF0YSk7XG4gICAgfSxcblxuICAgIGNoYW5nZV9tb25leV9jbGlja2VkOiBmdW5jdGlvbiBjaGFuZ2VfbW9uZXlfY2xpY2tlZChldnQsIGRhdGEpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gR2xvYmFsLmNoYW5nZV9iZXRfYW1vdW50KGRhdGEgPT0gMik7XG4gICAgICAgIHRoaXMubW9uZXlfbGFiZWwuc3RyaW5nID0gdmFsdWUgKyBcIktcIjtcbiAgICB9XG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYjcwZjl6YjdUZEVJck01SlZQS3BVYUMnLCAnZXhpdF9tZW51Jyk7XG4vLyBzY3JpcHRcXGV4aXRfbWVudS5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICBleGl0X21lbnVfY2xpY2tlZDogZnVuY3Rpb24gZXhpdF9tZW51X2NsaWNrZWQoKSB7XG4gICAgICAgIHZhciBjdXJyID0gR2xvYmFsLmN1cnJfc2NlbmU7XG4gICAgICAgIHZhciBuZXh0O1xuICAgICAgICBpZiAoY3VyciA9PSAnQmV0T25lSG9yc2UnKSBuZXh0ID0gJ2JldCc7XG4gICAgICAgIGlmIChjdXJyID09ICdiZXQnKSBuZXh0ID0gJ0hvd1RvUGxheSc7XG4gICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLTg4ODgtLS0tXCIgKyBuZXh0KTtcbiAgICAgICAgR2xvYmFsLnJ1bl9zY2VuZShuZXh0KTtcbiAgICB9XG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNzZhNjJnOVMwdEJBbzRjU3FqNTBpZFAnLCAnaG9yc2VfaGVhZCcpO1xuLy8gc2NyaXB0XFxiZXRfb25lX2hvcnNlXFxob3JzZV9oZWFkLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHBmeCA9ICdob3JzZVJhY2luZ19fX3NoYXJlZF9fX2hvcnNlc19fX2hvcnNlLSc7XG4gICAgICAgIHZhciBjb2xvcnMgPSBbJ2JsYWNrJywgJ2Jsb25kZScsICdicm93bicsICdncmV5LWJsb25kZScsICdncmV5LWRhcmsnLCAnc3BvdHRlZCddO1xuICAgICAgICB2YXIgdXJsID0gXCJ0ZXh0dXJlL1wiICsgcGZ4ICsgY29sb3JzW0dsb2JhbC5ob3JzZV9waWNrZWQgLSAxXTtcbiAgICAgICAgY2MubG9nKCctLS0tLS0wMDEgJyArIHVybCk7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHVybCwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICB2YXIgc3ByaXRlID0gc2VsZi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc4NGI1YXpqMWVGSUJZUUV2NGU5T1FSdycsICdob3JzZV9pZHgnKTtcbi8vIHNjcmlwdFxcYmV0X29uZV9ob3JzZVxcaG9yc2VfaWR4LmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgdXJsID0gXCJ0ZXh0dXJlL2hvcnNlUmFjaW5nX19fYmV0dGluZ19fX21haW5zY3JlZW5fX19idG4tMFwiICsgR2xvYmFsLmhvcnNlX3BpY2tlZDtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgIHZhciBzcHJpdGUgPSBzZWxmLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzdiMzYyWEJ3d0ZBY0paTTBtR3hqZkFkJywgJ2hvcnNlX21hc2snKTtcbi8vIHNjcmlwdFxcYmV0X29uZV9ob3JzZVxcaG9yc2VfbWFzay5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBwZnggPSAnaG9yc2VSYWNpbmdfX19zaGFyZWRfX19ob3JzZXNfX19tYXNrJztcbiAgICAgICAgdmFyIGNvbG9ycyA9IFsncmVkJywgJ3doaXRlJywgJ2JsdWUnLCAneWVsbG93JywgJ2dyZWVuJywgJ2JsYWNrJ107XG4gICAgICAgIHZhciB1cmwgPSBcInRleHR1cmUvXCIgKyBwZnggKyBHbG9iYWwuaG9yc2VfcGlja2VkICsgJy0nICsgY29sb3JzW0dsb2JhbC5ob3JzZV9waWNrZWQgLSAxXTtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgIHZhciBzcHJpdGUgPSBzZWxmLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2M2Y2I0R2hZeWhERXBMbkQ2b1hWWThHJywgJ2hvcnNlX25hbWUnKTtcbi8vIHNjcmlwdFxcYmV0X29uZV9ob3JzZVxcaG9yc2VfbmFtZS5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBpc19iZXRfc2NlbmUgPSB0aGlzLm5vZGUucGFyZW50Lm5hbWUubWF0Y2goL2JldC1pdDFlbS0oXFxkKS8pO1xuICAgICAgICBpZiAoaXNfYmV0X3NjZW5lKSB7XG4gICAgICAgICAgICB2YXIgaWR4ID0gaXNfYmV0X3NjZW5lWzFdO1xuICAgICAgICB9XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMmNiOWRoajE1UkwrWjRuNHZOWlF4TlcnLCAnaG93MnBsYXlfZXhpdCcpO1xuLy8gc2NyaXB0XFxob3cycGxheV9leGl0LmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdiOGJjOWsvdDlSSk80WlphdmcrbFhYNycsICdob3cycGxheV9zY3JvbGx2aWV3Jyk7XG4vLyBzY3JpcHRcXGhvdzJwbGF5X3Njcm9sbHZpZXcuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gdmFyIGhkciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIC8vIGhkci50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIC8vIGhkci5jb21wb25lbnQgPSB0aGlzO1xuICAgICAgICAvLyBoZHIuaGFuZGxlciA9IHRoaXMuY2FsbGJhY2s7XG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsRXZlbnRzLnB1c2goaGRyKTtcbiAgICB9LFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhzY3JvbGx2aWV3LCBldmVudFR5cGUsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICBjYy5sb2coJy0tLS0tLS0tLS0tLS0tLS0tMDAyJyk7XG4gICAgfVxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzNiOWZmNlduZ2RLWEorMVVKWWE1L1ZxJywgJ2xvYWQnKTtcbi8vIHNjcmlwdFxcbG9hZC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgZG90QWN0aXZlOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgICAgICBkb3RJbmFjdGl2ZToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0hvd1RvUGxheScpO1xuICAgICAgICB9LCA5KTtcblxuICAgICAgICB2YXIgbiA9IDU7XG4gICAgICAgIHZhciBkaXMgPSA1MDtcbiAgICAgICAgdmFyIHggPSAwO1xuICAgICAgICBpZiAoMSA9PSBuICUgMikgeCA9IGRpcyAqICgobiAtIDEpIC8gMikgKiAtMTtlbHNlIHggPSAoZGlzICogKG4gLyAyKSAtIGRpcyAvIDIpICogLTE7XG4gICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tMDAxIFwiICsgeCk7XG4gICAgICAgIHZhciB4YSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICAgICAgeGEucHVzaCh4ICsgaSAqIGRpcyk7XG4gICAgICAgIH1cblxuICAgICAgICB4YS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICB2YXIgZG90ID0gY2MuaW5zdGFudGlhdGUoc2VsZi5kb3RJbmFjdGl2ZSk7XG4gICAgICAgICAgICBzZWxmLm5vZGUuYWRkQ2hpbGQoZG90KTtcbiAgICAgICAgICAgIGRvdC5zZXRQb3NpdGlvbih4LCAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGRvdCA9IGNjLmluc3RhbnRpYXRlKHNlbGYuZG90QWN0aXZlKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGRvdCk7XG4gICAgICAgIGRvdC5zZXRQb3NpdGlvbih4LCAwKTtcblxuICAgICAgICB2YXIgY2kgPSAwO1xuICAgICAgICB2YXIgZGlyID0gMTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL2RvdC5zZXRQb3NpdGlvbih4YVsoY2krKyklbl0sIDApO1xuICAgICAgICAgICAgZG90LnNldFBvc2l0aW9uKHhhW2NpXSwgMCk7XG4gICAgICAgICAgICBjaSArPSBkaXI7XG4gICAgICAgICAgICBpZiAoZGlyID4gMCAmJiBjaSA9PSBuKSB7XG4gICAgICAgICAgICAgICAgY2kgLT0gMjtkaXIgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXIgPCAwICYmIGNpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgY2kgKz0gMjtkaXIgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwLjMpO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2YwODY0NWplN1ZGZ0lhZ2hyeWNCblM4JywgJ2xvZ28nKTtcbi8vIHNjcmlwdFxcbG9nby5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICAvL0dsb2JhbC5wcmVsb2FkX3NjZW5lKCk7XG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnSG93VG9QbGF5JywgZnVuY3Rpb24gKCkge30pO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL0dsb2JhbC5ydW5fc2NlbmUoJ0hvd1RvUGxheScpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdIb3dUb1BsYXknKTtcbiAgICAgICAgfSwgMyk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnM2Q3ZmNyUTd5OUtsTGdMbXp2c1hsaDInLCAncGVyc2lzdCcpO1xuLy8gc2NyaXB0XFxwZXJzaXN0LmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cblxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICBHbG9iYWwudXBkYXRlX3Byb2dyZXNzX2JhcihkdCk7XG4gICAgfVxufSk7XG5cbnZhciBzaXhfaG9yc2VfY29uZiA9IFt7IG5hbWU6ICdvbmUnLCBwYXlvdXRPZHM6ICcxMzo1JywgaGFuZGljYXA6ICcxMzo1JyB9LCB7IG5hbWU6ICd0d28nLCBwYXlvdXRPZHM6ICcxMzo1JywgaGFuZGljYXA6ICcxMzo1JyB9LCB7IG5hbWU6ICd0aHJlZScsIHBheW91dE9kczogJzEzOjUnLCBoYW5kaWNhcDogJzEzOjUnIH0sIHsgbmFtZTogJ2ZvdXInLCBwYXlvdXRPZHM6ICcxMzo1JywgaGFuZGljYXA6ICcxMzo1JyB9LCB7IG5hbWU6ICdmaXZlJywgcGF5b3V0T2RzOiAnMTM6NScsIGhhbmRpY2FwOiAnMTM6NScgfSwgeyBuYW1lOiAnc2l4JywgcGF5b3V0T2RzOiAnMTM6NScsIGhhbmRpY2FwOiAnMTM6NScgfV07XG5cbndpbmRvdy5HbG9iYWwgPSB7XG4gICAgZ2FtZU5hbWU6ICdyYWNlX2hvcnNlJyxcbiAgICBob3JzZV9waWNrZWQ6IDEsXG4gICAgc2l4X2hvcnNlX2luZm86IHNpeF9ob3JzZV9jb25mLFxuICAgIGN1cnJfc2NlbmU6ICdIb3dUb1BsYXknLFxuXG4gICAgd2lubmVyOiAzLFxuXG4gICAgYmV0X3N1YnR5cGU6IDEsXG4gICAgY2hhbmdlX3N1YnR5cGU6IGZ1bmN0aW9uIGNoYW5nZV9zdWJ0eXBlKG4pIHtcbiAgICAgICAgdGhpcy5iZXRfc3VidHlwZSA9IG47XG4gICAgfSxcblxuICAgIGJldF9hbW91bnQ6IDEwMCxcbiAgICBjaGFuZ2VfYmV0X2Ftb3VudDogZnVuY3Rpb24gY2hhbmdlX2JldF9hbW91bnQocG9zaXRpdmUpIHtcbiAgICAgICAgaWYgKHBvc2l0aXZlKSB0aGlzLmJldF9hbW91bnQgKz0gMTA7ZWxzZSB0aGlzLmJldF9hbW91bnQgLT0gMTA7XG4gICAgICAgIGlmICh0aGlzLmJldF9hbW91bnQgPiAyNTApIHRoaXMuYmV0X2Ftb3VudCA9IDI1MDtcbiAgICAgICAgaWYgKHRoaXMuYmV0X2Ftb3VudCA8IDEwKSB0aGlzLmJldF9hbW91bnQgPSAxMDtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmV0X2Ftb3VudDtcbiAgICB9LFxuXG4gICAgdGltZV90b19yYWNlOiAxMCxcbiAgICB0aW1lX3RvX3JhY2VfcGFzdDogMCxcbiAgICB1cGRhdGVfcHJvZ3Jlc3NfYmFyOiBmdW5jdGlvbiB1cGRhdGVfcHJvZ3Jlc3NfYmFyKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVfdG9fcmFjZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudGltZV90b19yYWNlX3Bhc3QgKz0gZHQ7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lX3RvX3JhY2VfcGFzdCA+PSB0aGlzLnRpbWVfdG9fcmFjZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZV90b19yYWNlID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bl9zY2VuZSgncmFjZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHByb2dyZXNzX2JhcjogZnVuY3Rpb24gcHJvZ3Jlc3NfYmFyKCkge1xuICAgICAgICBpZiAodGhpcy50aW1lX3RvX3JhY2UgPiAwKSByZXR1cm4gMSAtIHRoaXMudGltZV90b19yYWNlX3Bhc3QgLyB0aGlzLnRpbWVfdG9fcmFjZTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSxcblxuICAgIHByZWxvYWRfc2NlbmU6IGZ1bmN0aW9uIHByZWxvYWRfc2NlbmUoKSB7XG4gICAgICAgIHZhciBzY2VuZSA9IHRoaXMuY3Vycl9zY2VuZTtcbiAgICAgICAgdmFyIG5leHRzID0gW107XG4gICAgICAgIGlmIChzY2VuZSA9PSBcImxvZ29cIikgbmV4dHMucHVzaCgnSG93VG9QbGF5Jyk7XG4gICAgICAgIGlmIChzY2VuZSA9PSBcIkhvd1RvUGxheVwiKSBuZXh0cy5wdXNoKFwiYmV0XCIpO1xuICAgICAgICBpZiAoc2NlbmUgPT0gXCJiZXRcIikgbmV4dHMucHVzaChcIkJldE9uZUhvcnNlXCIsIFwiSG93VG9QbGF5XCIsIFwicmFjZVwiKTtcbiAgICAgICAgaWYgKHNjZW5lID09IFwiQmV0T25lSG9yc2VcIikgbmV4dHMucHVzaChcImJldFwiLCBcInJhY2VcIik7XG4gICAgICAgIGlmIChzY2VuZSA9PSBcInJhY2VcIikgbmV4dHMucHVzaChcImJldFwiKTtcbiAgICAgICAgY2MubG9nKG5leHRzKTtcbiAgICAgICAgZm9yICh2YXIgYSBpbiBuZXh0cykge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKG5leHRzW2FdLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcnVuX3NjZW5lOiBmdW5jdGlvbiBydW5fc2NlbmUoc2NlbmUpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lKTtcbiAgICAgICAgdGhpcy5jdXJyX3NjZW5lID0gc2NlbmU7XG4gICAgfVxuXG59O1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNjcxMjFKZHUxWkQ1NXNab2NkQ1BvR0YnLCAncHJvZ3Jlc3NfYmFyJyk7XG4vLyBzY3JpcHRcXHByb2dyZXNzX2Jhci5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgLy9wcm9ncmVzc19iYXI6IGNjLlNwcml0ZVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgLy92YXIgYmFyID0gdGhpcy5wcm9ncmVzc19iYXI7XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSBHbG9iYWwucHJvZ3Jlc3NfYmFyKCk7XG4gICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0wMDggXCIgKyB0aGlzLm5vZGUueCk7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcbiAgICAgICAgLy92YXIgYmFyID0gdGhpcy5wcm9ncmVzc19iYXIubm9kZTtcbiAgICAgICAgLy9iYXIuc2NhbGVYIC09IDAuMDA1O1xuICAgICAgICAvL2lmKGJhci5zY2FsZVggPCAwKSBiYXIuc2NhbGVYID0gMDtcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IEdsb2JhbC5wcm9ncmVzc19iYXIoKTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2IzOTliWWhodDVONXJhR3VqN1F1WUJtJywgJ3JhY2VNZW51Jyk7XG4vLyBzY3JpcHRcXHJhY2VNZW51LmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgICAgICBkaXN0YW5jZTogMjAwLFxuICAgICAgICB0aW1lOiAyMCxcbiAgICAgICAgd2lubmVyOiAzLFxuICAgICAgICB0aW1lX3Bhc3Q6IDAsXG4gICAgICAgIGhvcnNlUG9zOiBbXSxcbiAgICAgICAgd2lubmVyX3NwZHVwOiBmYWxzZSxcbiAgICAgICAgcmFjZV9maW5pc2g6IGZhbHNlLFxuICAgICAgICBob3JzZTE6IHsgXCJkZWZhdWx0XCI6IG51bGwsIHR5cGU6IGNjLk5vZGUgfSxcbiAgICAgICAgaG9yc2UyOiB7IFwiZGVmYXVsdFwiOiBudWxsLCB0eXBlOiBjYy5Ob2RlIH0sXG4gICAgICAgIGhvcnNlMzogeyBcImRlZmF1bHRcIjogbnVsbCwgdHlwZTogY2MuTm9kZSB9LFxuICAgICAgICBob3JzZTQ6IHsgXCJkZWZhdWx0XCI6IG51bGwsIHR5cGU6IGNjLk5vZGUgfSxcbiAgICAgICAgaG9yc2U1OiB7IFwiZGVmYXVsdFwiOiBudWxsLCB0eXBlOiBjYy5Ob2RlIH0sXG4gICAgICAgIGhvcnNlNjogeyBcImRlZmF1bHRcIjogbnVsbCwgdHlwZTogY2MuTm9kZSB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLndpbm5lciA9IEdsb2JhbC53aW5uZXI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLmhvcnNlUG9zLnB1c2goMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53aW5uZXJfc3BkdXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yYWNlX2ZpbmlzaCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLnJhY2VfZmluaXNoKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGhzID0gW3RoaXMuaG9yc2UxLCB0aGlzLmhvcnNlMiwgdGhpcy5ob3JzZTMsIHRoaXMuaG9yc2U0LCB0aGlzLmhvcnNlNSwgdGhpcy5ob3JzZTZdO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDY7ICsraikge1xuICAgICAgICAgICAgaHNbal0ueCArPSB0aGlzLmhvcnNlUG9zW2pdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2U7XG4gICAgICAgIHZhciB0aW1lID0gdGhpcy50aW1lO1xuICAgICAgICB2YXIgd2lubmVyID0gdGhpcy53aW5uZXI7XG4gICAgICAgIHZhciB2ID0gZGlzdGFuY2UgLyB0aW1lO1xuICAgICAgICB2YXIgdnJhbmdlID0gdiAqIDAuNTtcbiAgICAgICAgdmFyIHZzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgKytpKSB7XG4gICAgICAgICAgICB2YXIgZHY7XG4gICAgICAgICAgICBpZiAoaSA9PSB3aW5uZXIgJiYgdGhpcy53aW5uZXJfc3BkdXApIHtcbiAgICAgICAgICAgICAgICBkdiA9IHYgKyB2cmFuZ2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICBkdiA9IHYgKyAociAtIDAuNSkgKiAyICogdnJhbmdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGRpcyA9IGR2ICogZHQ7XG4gICAgICAgICAgICB0aGlzLmhvcnNlUG9zW2ldICs9IGRpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVfcGFzdCArPSBkdDtcbiAgICAgICAgaWYgKCF0aGlzLndpbm5lcl9zcGR1cCAmJiB0aGlzLnRpbWVfcGFzdCA+IHRpbWUgKiAwLjgpIHRoaXMud2lubmVyX3NwZHVwID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuaG9yc2VQb3Nbd2lubmVyXSA+PSBkaXN0YW5jZSkgdGhpcy5yYWNlX2ZpbmlzaCA9IHRydWU7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyJdfQ==

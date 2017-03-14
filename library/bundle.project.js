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
        Global.preload_scene();
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

    time_to_race: 30,
    time_to_race_past: 0,
    update_progress_bar: function update_progress_bar(dt) {
        if (this.time_to_race > 0) {
            this.time_to_race_past += dt;
            if (this.time_to_race_past >= this.time_to_race) {
                this.time_to_race = 0;
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
        if (scene == "BetOneHorse") nexts.push("bet");
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
},{}]},{},["bet_one_horse_load","how2play_exit","load","persist","change_amount","bet_a_horse","Menu","bet_one_horse","progress_bar","horse_head","horse_mask","horse_idx","bet_item","exit_menu","how2play_scrollview","horse_name","logo","bet"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L0NvY29zQ3JlYXRvci9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9zY3JpcHQvTWVudS5qcyIsImFzc2V0cy9zY3JpcHQvYmV0X2FfaG9yc2UuanMiLCJhc3NldHMvc2NyaXB0L2JldF9pdGVtLmpzIiwiYXNzZXRzL3NjcmlwdC9iZXRfb25lX2hvcnNlL2JldF9vbmVfaG9yc2VfbG9hZC5qcyIsImFzc2V0cy9zY3JpcHQvYmV0X29uZV9ob3JzZS5qcyIsImFzc2V0cy9zY3JpcHQvYmV0LmpzIiwiYXNzZXRzL3NjcmlwdC9iZXRfb25lX2hvcnNlL2NoYW5nZV9hbW91bnQuanMiLCJhc3NldHMvc2NyaXB0L2V4aXRfbWVudS5qcyIsImFzc2V0cy9zY3JpcHQvYmV0X29uZV9ob3JzZS9ob3JzZV9oZWFkLmpzIiwiYXNzZXRzL3NjcmlwdC9iZXRfb25lX2hvcnNlL2hvcnNlX2lkeC5qcyIsImFzc2V0cy9zY3JpcHQvYmV0X29uZV9ob3JzZS9ob3JzZV9tYXNrLmpzIiwiYXNzZXRzL3NjcmlwdC9iZXRfb25lX2hvcnNlL2hvcnNlX25hbWUuanMiLCJhc3NldHMvc2NyaXB0L2hvdzJwbGF5X2V4aXQuanMiLCJhc3NldHMvc2NyaXB0L2hvdzJwbGF5X3Njcm9sbHZpZXcuanMiLCJhc3NldHMvc2NyaXB0L2xvYWQuanMiLCJhc3NldHMvc2NyaXB0L2xvZ28uanMiLCJhc3NldHMvc2NyaXB0L3BlcnNpc3QuanMiLCJhc3NldHMvc2NyaXB0L3Byb2dyZXNzX2Jhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzU4MjA3Wmk2eE5BRTRkQ01aNVVlTWd4JywgJ01lbnUnKTtcbi8vIHNjcmlwdFxcTWVudS5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIHByZWxvYWREb25lOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIGF1ZGlvTW5nOiBjYy5Ob2RlXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIEdsb2JhbC5wcmVsb2FkX3NjZW5lKCk7XG4gICAgICAgIC8vIHRoaXMucHJlbG9hZERvbmUub3BhY2l0eSA9IDY0O1xuICAgICAgICAvLyBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ2JldCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vICAgICBzZWxmLnByZWxvYWREb25lLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIC8vIH0pO1xuICAgIH0sXG4gICAgaG93MnBsYXlFeGl0Q2FsbGJhY2s6IGZ1bmN0aW9uIGhvdzJwbGF5RXhpdENhbGxiYWNrKCkge1xuICAgICAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZSgnYmV0Jyk7ICAgICBcbiAgICAgICAgR2xvYmFsLnJ1bl9zY2VuZSgnYmV0Jyk7XG4gICAgfVxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzUwMDQ0Y2hiU1ZHMGJ4MWxjM08vSm9JJywgJ2JldF9hX2hvcnNlJyk7XG4vLyBzY3JpcHRcXGJldF9hX2hvcnNlLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIGhvcnNlX2NsaWNrZWQ6IGZ1bmN0aW9uIGhvcnNlX2NsaWNrZWQoZXZlbnQsIGV2ZW50Q3VzdG9tRGF0YSkge1xuICAgICAgICBHbG9iYWwuaG9yc2VfcGlja2VkID0gZXZlbnRDdXN0b21EYXRhO1xuICAgICAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZSgnQmV0T25lSG9yc2UnKTtcbiAgICAgICAgR2xvYmFsLnJ1bl9zY2VuZSgnQmV0T25lSG9yc2UnKTtcbiAgICB9XG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnOWMxODZXRWkzQkUyWTJwVzM5T21PVE8nLCAnYmV0X2l0ZW0nKTtcbi8vIHNjcmlwdFxcYmV0X2l0ZW0uanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgY2MubG9nKCctLS0tLS0tLS0tLTAwNCAnICsgdGhpcy5ub2RlLndpZHRoKTtcbiAgICAgICAgLy8gdmFyIHcgPSB0aGlzLm5vZGUud2lkdGg7XG4gICAgICAgIC8vIHZhciBoID0gdGhpcy5ub2RlLmhlaWdodDtcbiAgICAgICAgLy8gdmFyIGN0eCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICAvLyBjdHgucmVjdCgwLDAsdyxoKTtcbiAgICAgICAgLy8gY3R4LnN0cm9rZSgpOyBcbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcxMjNlMlZkN2VkQTY2L3NtcmR2Z1U4eScsICdiZXRfb25lX2hvcnNlX2xvYWQnKTtcbi8vIHNjcmlwdFxcYmV0X29uZV9ob3JzZVxcYmV0X29uZV9ob3JzZV9sb2FkLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgR2xvYmFsLnByZWxvYWRfc2NlbmUoKTtcbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc1YWE2OU5zTmlwSkdLUi8wVFNtQTFaNScsICdiZXRfb25lX2hvcnNlJyk7XG4vLyBzY3JpcHRcXGJldF9vbmVfaG9yc2UuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdiZXQnLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZmI5OTFFWGc2OVBUSzJac0ZlK1I3VzgnLCAnYmV0Jyk7XG4vLyBzY3JpcHRcXGJldC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgcHJlbG9hZERvbmU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICAvL2NjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnQmV0T25lSG9yc2UnLCBmdW5jdGlvbigpe30pO1xuICAgICAgICAvL2NjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgncmFjZScsIGZ1bmN0aW9uKCl7fSk7XG4gICAgICAgIEdsb2JhbC5wcmVsb2FkX3NjZW5lKCk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNDZlYTFCSWUxQkJKNndnTzRoa3k2SGEnLCAnY2hhbmdlX2Ftb3VudCcpO1xuLy8gc2NyaXB0XFxiZXRfb25lX2hvcnNlXFxjaGFuZ2VfYW1vdW50LmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgICAgICBtb25leV9sYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuXG4gICAgICAgIHdpbjogeyBcImRlZmF1bHRcIjogbnVsbCwgdHlwZTogY2MuTm9kZSB9LFxuICAgICAgICBwbGFjZTogeyBcImRlZmF1bHRcIjogbnVsbCwgdHlwZTogY2MuTm9kZSB9LFxuICAgICAgICBzaG93OiB7IFwiZGVmYXVsdFwiOiBudWxsLCB0eXBlOiBjYy5Ob2RlIH1cblxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9LFxuXG4gICAgc3VidHlwZV9jbGlja2VkOiBmdW5jdGlvbiBzdWJ0eXBlX2NsaWNrZWQoZXZ0LCBkYXRhKSB7XG4gICAgICAgIHRoaXMud2luLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIHRoaXMucGxhY2UuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgdGhpcy5zaG93LmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIGlmIChkYXRhID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMud2luLmNvbG9yID0gY2MuQ29sb3IuWUVMTE9XO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhID09IDIpIHtcbiAgICAgICAgICAgIHRoaXMucGxhY2UuY29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEgPT0gMykge1xuICAgICAgICAgICAgdGhpcy5zaG93LmNvbG9yID0gY2MuQ29sb3IuWUVMTE9XO1xuICAgICAgICB9XG4gICAgICAgIEdsb2JhbC5jaGFuZ2Vfc3VidHlwZShkYXRhKTtcbiAgICB9LFxuXG4gICAgY2hhbmdlX21vbmV5X2NsaWNrZWQ6IGZ1bmN0aW9uIGNoYW5nZV9tb25leV9jbGlja2VkKGV2dCwgZGF0YSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBHbG9iYWwuY2hhbmdlX2JldF9hbW91bnQoZGF0YSA9PSAyKTtcbiAgICAgICAgdGhpcy5tb25leV9sYWJlbC5zdHJpbmcgPSB2YWx1ZSArIFwiS1wiO1xuICAgIH1cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdiNzBmOXpiN1RkRUlyTTVKVlBLcFVhQycsICdleGl0X21lbnUnKTtcbi8vIHNjcmlwdFxcZXhpdF9tZW51LmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIGV4aXRfbWVudV9jbGlja2VkOiBmdW5jdGlvbiBleGl0X21lbnVfY2xpY2tlZCgpIHtcbiAgICAgICAgdmFyIGN1cnIgPSBHbG9iYWwuY3Vycl9zY2VuZTtcbiAgICAgICAgdmFyIG5leHQ7XG4gICAgICAgIGlmIChjdXJyID09ICdCZXRPbmVIb3JzZScpIG5leHQgPSAnYmV0JztcbiAgICAgICAgaWYgKGN1cnIgPT0gJ2JldCcpIG5leHQgPSAnSG93VG9QbGF5JztcbiAgICAgICAgY2MubG9nKFwiLS0tLS0tLS0tODg4OC0tLS1cIiArIG5leHQpO1xuICAgICAgICBHbG9iYWwucnVuX3NjZW5lKG5leHQpO1xuICAgIH1cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc3NmE2Mmc5UzB0QkFvNGNTcWo1MGlkUCcsICdob3JzZV9oZWFkJyk7XG4vLyBzY3JpcHRcXGJldF9vbmVfaG9yc2VcXGhvcnNlX2hlYWQuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgcGZ4ID0gJ2hvcnNlUmFjaW5nX19fc2hhcmVkX19faG9yc2VzX19faG9yc2UtJztcbiAgICAgICAgdmFyIGNvbG9ycyA9IFsnYmxhY2snLCAnYmxvbmRlJywgJ2Jyb3duJywgJ2dyZXktYmxvbmRlJywgJ2dyZXktZGFyaycsICdzcG90dGVkJ107XG4gICAgICAgIHZhciB1cmwgPSBcInRleHR1cmUvXCIgKyBwZnggKyBjb2xvcnNbR2xvYmFsLmhvcnNlX3BpY2tlZCAtIDFdO1xuICAgICAgICBjYy5sb2coJy0tLS0tLTAwMSAnICsgdXJsKTtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgIHZhciBzcHJpdGUgPSBzZWxmLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzg0YjVhemoxZUZJQllRRXY0ZTlPUVJ3JywgJ2hvcnNlX2lkeCcpO1xuLy8gc2NyaXB0XFxiZXRfb25lX2hvcnNlXFxob3JzZV9pZHguanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciB1cmwgPSBcInRleHR1cmUvaG9yc2VSYWNpbmdfX19iZXR0aW5nX19fbWFpbnNjcmVlbl9fX2J0bi0wXCIgKyBHbG9iYWwuaG9yc2VfcGlja2VkO1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgdmFyIHNwcml0ZSA9IHNlbGYuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnN2IzNjJYQnd3RkFjSlpNMG1HeGpmQWQnLCAnaG9yc2VfbWFzaycpO1xuLy8gc2NyaXB0XFxiZXRfb25lX2hvcnNlXFxob3JzZV9tYXNrLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHBmeCA9ICdob3JzZVJhY2luZ19fX3NoYXJlZF9fX2hvcnNlc19fX21hc2snO1xuICAgICAgICB2YXIgY29sb3JzID0gWydyZWQnLCAnd2hpdGUnLCAnYmx1ZScsICd5ZWxsb3cnLCAnZ3JlZW4nLCAnYmxhY2snXTtcbiAgICAgICAgdmFyIHVybCA9IFwidGV4dHVyZS9cIiArIHBmeCArIEdsb2JhbC5ob3JzZV9waWNrZWQgKyAnLScgKyBjb2xvcnNbR2xvYmFsLmhvcnNlX3BpY2tlZCAtIDFdO1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgdmFyIHNwcml0ZSA9IHNlbGYuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYzZjYjRHaFl5aERFcExuRDZvWFZZOEcnLCAnaG9yc2VfbmFtZScpO1xuLy8gc2NyaXB0XFxiZXRfb25lX2hvcnNlXFxob3JzZV9uYW1lLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIGlzX2JldF9zY2VuZSA9IHRoaXMubm9kZS5wYXJlbnQubmFtZS5tYXRjaCgvYmV0LWl0MWVtLShcXGQpLyk7XG4gICAgICAgIGlmIChpc19iZXRfc2NlbmUpIHtcbiAgICAgICAgICAgIHZhciBpZHggPSBpc19iZXRfc2NlbmVbMV07XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcyY2I5ZGhqMTVSTCtaNG40dk5aUXhOVycsICdob3cycGxheV9leGl0Jyk7XG4vLyBzY3JpcHRcXGhvdzJwbGF5X2V4aXQuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge31cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2I4YmM5ay90OVJKTzRaWmF2ZytsWFg3JywgJ2hvdzJwbGF5X3Njcm9sbHZpZXcnKTtcbi8vIHNjcmlwdFxcaG93MnBsYXlfc2Nyb2xsdmlldy5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICAvLyB2YXIgaGRyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgLy8gaGRyLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgLy8gaGRyLmNvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgIC8vIGhkci5oYW5kbGVyID0gdGhpcy5jYWxsYmFjaztcbiAgICAgICAgLy8gdGhpcy5zY3JvbGxFdmVudHMucHVzaChoZHIpO1xuICAgIH0sXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKHNjcm9sbHZpZXcsIGV2ZW50VHlwZSwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIGNjLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0wMDInKTtcbiAgICB9XG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnM2I5ZmY2V25nZEtYSisxVUpZYTUvVnEnLCAnbG9hZCcpO1xuLy8gc2NyaXB0XFxsb2FkLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgICAgICBkb3RBY3RpdmU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIGRvdEluYWN0aXZlOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnSG93VG9QbGF5Jyk7XG4gICAgICAgIH0sIDkpO1xuXG4gICAgICAgIHZhciBuID0gNTtcbiAgICAgICAgdmFyIGRpcyA9IDUwO1xuICAgICAgICB2YXIgeCA9IDA7XG4gICAgICAgIGlmICgxID09IG4gJSAyKSB4ID0gZGlzICogKChuIC0gMSkgLyAyKSAqIC0xO2Vsc2UgeCA9IChkaXMgKiAobiAvIDIpIC0gZGlzIC8gMikgKiAtMTtcbiAgICAgICAgY2MubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0wMDEgXCIgKyB4KTtcbiAgICAgICAgdmFyIHhhID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgICB4YS5wdXNoKHggKyBpICogZGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHhhLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHZhciBkb3QgPSBjYy5pbnN0YW50aWF0ZShzZWxmLmRvdEluYWN0aXZlKTtcbiAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChkb3QpO1xuICAgICAgICAgICAgZG90LnNldFBvc2l0aW9uKHgsIDApO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgZG90ID0gY2MuaW5zdGFudGlhdGUoc2VsZi5kb3RBY3RpdmUpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZG90KTtcbiAgICAgICAgZG90LnNldFBvc2l0aW9uKHgsIDApO1xuXG4gICAgICAgIHZhciBjaSA9IDA7XG4gICAgICAgIHZhciBkaXIgPSAxO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vZG90LnNldFBvc2l0aW9uKHhhWyhjaSsrKSVuXSwgMCk7XG4gICAgICAgICAgICBkb3Quc2V0UG9zaXRpb24oeGFbY2ldLCAwKTtcbiAgICAgICAgICAgIGNpICs9IGRpcjtcbiAgICAgICAgICAgIGlmIChkaXIgPiAwICYmIGNpID09IG4pIHtcbiAgICAgICAgICAgICAgICBjaSAtPSAyO2RpciA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpciA8IDAgJiYgY2kgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjaSArPSAyO2RpciA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDAuMyk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZjA4NjQ1amU3VkZnSWFnaHJ5Y0JuUzgnLCAnbG9nbycpO1xuLy8gc2NyaXB0XFxsb2dvLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIC8vR2xvYmFsLnByZWxvYWRfc2NlbmUoKTtcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdIb3dUb1BsYXknLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vR2xvYmFsLnJ1bl9zY2VuZSgnSG93VG9QbGF5Jyk7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0hvd1RvUGxheScpO1xuICAgICAgICB9LCAzKTtcbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICczZDdmY3JRN3k5S2xMZ0xtenZzWGxoMicsICdwZXJzaXN0Jyk7XG4vLyBzY3JpcHRcXHBlcnNpc3QuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIEdsb2JhbC51cGRhdGVfcHJvZ3Jlc3NfYmFyKGR0KTtcbiAgICB9XG59KTtcblxudmFyIHNpeF9ob3JzZV9jb25mID0gW3sgbmFtZTogJ29uZScsIHBheW91dE9kczogJzEzOjUnLCBoYW5kaWNhcDogJzEzOjUnIH0sIHsgbmFtZTogJ3R3bycsIHBheW91dE9kczogJzEzOjUnLCBoYW5kaWNhcDogJzEzOjUnIH0sIHsgbmFtZTogJ3RocmVlJywgcGF5b3V0T2RzOiAnMTM6NScsIGhhbmRpY2FwOiAnMTM6NScgfSwgeyBuYW1lOiAnZm91cicsIHBheW91dE9kczogJzEzOjUnLCBoYW5kaWNhcDogJzEzOjUnIH0sIHsgbmFtZTogJ2ZpdmUnLCBwYXlvdXRPZHM6ICcxMzo1JywgaGFuZGljYXA6ICcxMzo1JyB9LCB7IG5hbWU6ICdzaXgnLCBwYXlvdXRPZHM6ICcxMzo1JywgaGFuZGljYXA6ICcxMzo1JyB9XTtcblxud2luZG93Lkdsb2JhbCA9IHtcbiAgICBnYW1lTmFtZTogJ3JhY2VfaG9yc2UnLFxuICAgIGhvcnNlX3BpY2tlZDogMSxcbiAgICBzaXhfaG9yc2VfaW5mbzogc2l4X2hvcnNlX2NvbmYsXG4gICAgY3Vycl9zY2VuZTogJ0hvd1RvUGxheScsXG5cbiAgICBiZXRfc3VidHlwZTogMSxcbiAgICBjaGFuZ2Vfc3VidHlwZTogZnVuY3Rpb24gY2hhbmdlX3N1YnR5cGUobikge1xuICAgICAgICB0aGlzLmJldF9zdWJ0eXBlID0gbjtcbiAgICB9LFxuXG4gICAgYmV0X2Ftb3VudDogMTAwLFxuICAgIGNoYW5nZV9iZXRfYW1vdW50OiBmdW5jdGlvbiBjaGFuZ2VfYmV0X2Ftb3VudChwb3NpdGl2ZSkge1xuICAgICAgICBpZiAocG9zaXRpdmUpIHRoaXMuYmV0X2Ftb3VudCArPSAxMDtlbHNlIHRoaXMuYmV0X2Ftb3VudCAtPSAxMDtcbiAgICAgICAgaWYgKHRoaXMuYmV0X2Ftb3VudCA+IDI1MCkgdGhpcy5iZXRfYW1vdW50ID0gMjUwO1xuICAgICAgICBpZiAodGhpcy5iZXRfYW1vdW50IDwgMTApIHRoaXMuYmV0X2Ftb3VudCA9IDEwO1xuICAgICAgICByZXR1cm4gdGhpcy5iZXRfYW1vdW50O1xuICAgIH0sXG5cbiAgICB0aW1lX3RvX3JhY2U6IDMwLFxuICAgIHRpbWVfdG9fcmFjZV9wYXN0OiAwLFxuICAgIHVwZGF0ZV9wcm9ncmVzc19iYXI6IGZ1bmN0aW9uIHVwZGF0ZV9wcm9ncmVzc19iYXIoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZV90b19yYWNlID4gMCkge1xuICAgICAgICAgICAgdGhpcy50aW1lX3RvX3JhY2VfcGFzdCArPSBkdDtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVfdG9fcmFjZV9wYXN0ID49IHRoaXMudGltZV90b19yYWNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lX3RvX3JhY2UgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHByb2dyZXNzX2JhcjogZnVuY3Rpb24gcHJvZ3Jlc3NfYmFyKCkge1xuICAgICAgICBpZiAodGhpcy50aW1lX3RvX3JhY2UgPiAwKSByZXR1cm4gMSAtIHRoaXMudGltZV90b19yYWNlX3Bhc3QgLyB0aGlzLnRpbWVfdG9fcmFjZTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSxcblxuICAgIHByZWxvYWRfc2NlbmU6IGZ1bmN0aW9uIHByZWxvYWRfc2NlbmUoKSB7XG4gICAgICAgIHZhciBzY2VuZSA9IHRoaXMuY3Vycl9zY2VuZTtcbiAgICAgICAgdmFyIG5leHRzID0gW107XG4gICAgICAgIGlmIChzY2VuZSA9PSBcImxvZ29cIikgbmV4dHMucHVzaCgnSG93VG9QbGF5Jyk7XG4gICAgICAgIGlmIChzY2VuZSA9PSBcIkhvd1RvUGxheVwiKSBuZXh0cy5wdXNoKFwiYmV0XCIpO1xuICAgICAgICBpZiAoc2NlbmUgPT0gXCJiZXRcIikgbmV4dHMucHVzaChcIkJldE9uZUhvcnNlXCIsIFwiSG93VG9QbGF5XCIsIFwicmFjZVwiKTtcbiAgICAgICAgaWYgKHNjZW5lID09IFwiQmV0T25lSG9yc2VcIikgbmV4dHMucHVzaChcImJldFwiKTtcbiAgICAgICAgY2MubG9nKG5leHRzKTtcbiAgICAgICAgZm9yICh2YXIgYSBpbiBuZXh0cykge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKG5leHRzW2FdLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcnVuX3NjZW5lOiBmdW5jdGlvbiBydW5fc2NlbmUoc2NlbmUpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lKTtcbiAgICAgICAgdGhpcy5jdXJyX3NjZW5lID0gc2NlbmU7XG4gICAgfVxuXG59O1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNjcxMjFKZHUxWkQ1NXNab2NkQ1BvR0YnLCAncHJvZ3Jlc3NfYmFyJyk7XG4vLyBzY3JpcHRcXHByb2dyZXNzX2Jhci5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgLy9wcm9ncmVzc19iYXI6IGNjLlNwcml0ZVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgLy92YXIgYmFyID0gdGhpcy5wcm9ncmVzc19iYXI7XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSBHbG9iYWwucHJvZ3Jlc3NfYmFyKCk7XG4gICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0wMDggXCIgKyB0aGlzLm5vZGUueCk7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcbiAgICAgICAgLy92YXIgYmFyID0gdGhpcy5wcm9ncmVzc19iYXIubm9kZTtcbiAgICAgICAgLy9iYXIuc2NhbGVYIC09IDAuMDA1O1xuICAgICAgICAvL2lmKGJhci5zY2FsZVggPCAwKSBiYXIuc2NhbGVYID0gMDtcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IEdsb2JhbC5wcm9ncmVzc19iYXIoKTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7Il19

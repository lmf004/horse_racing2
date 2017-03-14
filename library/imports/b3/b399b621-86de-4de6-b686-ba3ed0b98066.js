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
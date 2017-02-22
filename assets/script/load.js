cc.Class({
    extends: cc.Component,

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
            default: null,
            type: cc.Prefab
        },
        dotInactive: {
            default: null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function () {
        var self = this;
        this.scheduleOnce( function(){
            cc.director.loadScene('HowToPlay');
        }, 9);
        
        var n = 5; 
        var dis = 50;
        var x = 0;
        if(1 == n%2) x = dis*((n-1)/2)*(-1);
        else x = (dis*(n/2)-dis/2)*(-1);
        cc.log("-----------------001 " +x);
        var xa = [];
        for(var i=0; i<n; ++i) {
            xa.push(x + i*dis);
        }
        
        xa.forEach(function(x){
            var dot = cc.instantiate(self.dotInactive);
            self.node.addChild(dot);
            dot.setPosition(x, 0);                         
        });
        
        var dot = cc.instantiate(self.dotActive);
        this.node.addChild(dot);
        dot.setPosition(x, 0);
        
        var ci = 0;
        var dir = 1;
        this.schedule(function(){
            //dot.setPosition(xa[(ci++)%n], 0);
            dot.setPosition(xa[ci], 0);
            ci += dir;
            if(dir > 0 && ci == n) { ci -= 2; dir = -1; }
            if(dir < 0 && ci == -1) { ci += 2; dir = 1; }
        }, 0.3);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

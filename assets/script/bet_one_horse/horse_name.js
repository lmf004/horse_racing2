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
    },

    // use this for initialization
    onLoad: function () {
        var is_bet_scene = this.node.parent.name.match(/bet-it1em-(\d)/);
        if(is_bet_scene) { 
            var idx = is_bet_scene[1];
                        
        }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

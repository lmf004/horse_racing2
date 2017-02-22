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
        progress_bar: cc.Sprite
    },

    // use this for initialization
    onLoad: function onLoad() {
        var bar = this.progress_bar;
        cc.log(bar);
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        var bar = this.progress_bar.node;
        bar.scaleX -= 0.005;
        if (bar.scaleX < 0) bar.scaleX = 0;
    }
});
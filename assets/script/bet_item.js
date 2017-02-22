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
        cc.log('-----------004 ' + this.node.width);
        // var w = this.node.width;
        // var h = this.node.height;
        // var ctx = this.node.getComponent(cc.Graphics);
        // ctx.rect(0,0,w,h);
        // ctx.stroke();   
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

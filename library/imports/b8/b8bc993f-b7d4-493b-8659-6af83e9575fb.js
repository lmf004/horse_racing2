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
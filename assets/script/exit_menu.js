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

    },
    
    exit_menu_clicked: function(){
        var curr = Global.curr_scene;
        var next;
        if(curr == 'BetOneHorse') next = 'bet';    
        if(curr == 'bet')         next = 'HowToPlay';  
        cc.log("---------8888----" + next);
        Global.run_scene(next);
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

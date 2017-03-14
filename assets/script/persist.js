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
        cc.game.addPersistRootNode(this.node);
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        Global.update_progress_bar(dt);
        
    },
});


var six_horse_conf = 
[
    {name: 'one', payoutOds:'13:5', handicap:'13:5', },
    {name: 'two', payoutOds:'13:5', handicap:'13:5', },
    {name: 'three', payoutOds:'13:5', handicap:'13:5', },
    {name: 'four', payoutOds:'13:5', handicap:'13:5', },
    {name: 'five', payoutOds:'13:5', handicap:'13:5', },
    {name: 'six', payoutOds:'13:5', handicap:'13:5', },
];

window.Global = {
    gameName: 'race_horse',
    horse_picked:1,
    six_horse_info: six_horse_conf,
    curr_scene: 'HowToPlay',
    
    bet_subtype: 1,
    change_subtype: function(n) {
        this.bet_subtype = n;  
    },
    
    bet_amount: 100,
    change_bet_amount: function(positive){
        if(positive) 
            this.bet_amount += 10;    
        else
            this.bet_amount -= 10; 
        if(this.bet_amount > 250) this.bet_amount = 250;
        if(this.bet_amount < 10)  this.bet_amount = 10;
        return this.bet_amount;
    },
    
    time_to_race: 30,
    time_to_race_past: 0,
    update_progress_bar: function(dt) {
     if(this.time_to_race > 0) {
            this.time_to_race_past += dt;
            if(this.time_to_race_past >= this.time_to_race) {
                this.time_to_race = 0;
            }
        }        
    },
    
    progress_bar: function() {
        if(this.time_to_race > 0)
            return 1 - this.time_to_race_past / this.time_to_race;  
        return 0;
    },
            

    preload_scene: function() {
        var scene = this.curr_scene;
        var nexts = [];
        if(scene == "logo") nexts.push('HowToPlay');
        if(scene == "HowToPlay") nexts.push("bet");
        if(scene == "bet") nexts.push("BetOneHorse", "HowToPlay", "race");
        if(scene == "BetOneHorse") nexts.push("bet");
        cc.log(nexts);
        for(var a in nexts) {
            cc.director.preloadScene(nexts[a], function(){});
        }
    },
    
    run_scene: function(scene) {
        cc.director.loadScene(scene); 
        this.curr_scene = scene;
    }
            
};





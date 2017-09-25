var Preload = function(game){};

Preload.prototype = {

    preload: function(){
        // TODO show splash page, preload menu items
    },

    create: function(){
        // TODO show splash page and ad

        this.game.state.start("GameTitle");
    }
}

var GameTitle = function(game){};

GameTitle.prototype = {

    preload: function () {

      // loop through assets in directory in a preprocessor
      game.load.image('sky', 'assets/sky.png');
      game.load.image('ground', 'assets/platform.png');
      game.load.image('star', 'assets/star.png');
      game.load.spritesheet('dude', 'assets/dude.png', 32, 48);

    },

    create: function(){
      // TODO show a button / menu

        this.startGame();
    },

    startGame: function(){
        this.game.state.start("Main");
    }

}

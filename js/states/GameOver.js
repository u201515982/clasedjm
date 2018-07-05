GameOver = function(){}

GameOver.prototype = {
	init:function(_score){
		score = _score;
	},
	create:function(){
		elapsed = 0;
		this.game.stage.backgroundColor = "#FFFFFF";
		background = this.game.add.sprite(0,0,'background');
		background.height = this.game.height;
		background.width = this.game.width;

		gameovertext = this.game.add.text(this.game.world.centerX, this.game.world.centerY/2,"GAME OVER");
		gameovertext.fill = "#000000";
		gameovertext.fontSize = 30;
		gameovertext.anchor.setTo(0.5);

		scoretext = this.game.add.text(this.game.world.centerX, this.game.world.centerY,"SCORE: " + score.toString());
		scoretext.fill = "#000000";
		scoretext.fontSize = 30;
		scoretext.anchor.setTo(0.5);
	},
	update:function(){
		elapsed+=this.game.time.elapsed;
		if(elapsed>3000){
			this.game.state.start("Menu");
		}
	}

}
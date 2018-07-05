Seleccion = function(game){}
Seleccion.prototype = {
	create:function(){
		this.game.stage.backgroundColor = "#FFFFFF";
		background = this.game.add.sprite(0,0,'background');
		background.height = this.game.height;
		background.width = this.game.width;

		sel_normal = this.game.add.text(this.game.world.centerX, this.game.world.centerY*3/4,"NORMAL");
		sel_normal.fill = "#000000";
		sel_normal.fontSize = 30;
		sel_normal.anchor.setTo(0.5);

		sel_parao = this.game.add.text(this.game.world.centerX, this.game.world.centerY*5/4,"PARAO Y SIN POLO");
		sel_parao.fill = "#000000";
		sel_parao.fontSize = 30;
		sel_parao.anchor.setTo(0.5);

		sel_normal.inputEnabled = true;
		sel_normal.events.onInputDown.add(function(){this.goGame(4)}, this);

		sel_parao.inputEnabled = true;
		sel_parao.events.onInputDown.add(function(){this.goGame(1)}, this);
	},
	goGame:function(vidas){
		this.game.state.start("Game",true,false,vidas);
	}
}
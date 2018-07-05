Menu = function(game){}
Menu.prototype = {
	create:function(){
		this.game.stage.backgroundColor = "#FFFFFF";
		background = this.game.add.sprite(0,0,'background');
		background.height = this.game.height;
		background.width = this.game.width;

		titulo = this.game.add.text(this.game.world.centerX, this.game.world.centerY/2,"Examen Parcial");
		titulo.fill = "#000000";
		titulo.fontSize = 20;
		titulo.anchor.setTo(0.5);

		jugar = this.game.add.text(this.game.world.centerX, this.game.world.centerY,"JUGAR");
		jugar.fill = "#000000";
		jugar.fontSize = 30;
		jugar.anchor.setTo(0.5);

		jugar.inputEnabled = true;
		jugar.events.onInputDown.add(this.goSelect, this);
	},
	goSelect:function(){
		this.game.state.start("Seleccion");
	}
}
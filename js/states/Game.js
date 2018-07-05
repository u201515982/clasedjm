Game = function(game){}
Game.prototype = {
	init:function(_vidas) {
		vidas = _vidas;
	},
	create:function() {
		elapsed = 0;
		score = 0;
		this.game.stage.backgroundColor = "#FFFFFF";
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 800;
		background = this.game.add.sprite(0,0,'background');
		background.height = this.game.height;
		background.width = this.game.width;

		health = this.game.add.text(5,5,"VIDAS: ");
		health.fill = "#000000";
		health.fontSize = 15;

		player = this.game.add.sprite(400,400,'player');
		player.anchor.setTo(0.5);
		player.frame = 4;
		this.game.physics.arcade.enable(player);
		player.animations.add('left',[0,1,2,3],4,true);
		player.animations.add('right',[5,6,7,8],4,true);

		floor = this.game.add.tileSprite(0,this.game.height - 70,this.game.width,70,'floor');
		this.game.physics.arcade.enable(floor);
		floor.body.allowGravity = false;
		floor.body.immovable = true;

		keys = this.game.input.keyboard.createCursorKeys();

	},
	update:function() {
		health.text = "VIDAS: " + vidas.toString();
		this.game.physics.arcade.collide(player,floor);
		elapsed += this.game.time.elapsed;

		if(keys.left.isDown){
			player.body.velocity.x = -250;
			player.play('left');
		}
		if(keys.right.isDown){
			player.body.velocity.x = 250;
			player.play('right');
		}
		if(keys.left.isUp && keys.right.isUp){
			player.animations.stop();
			player.frame = 4;
			player.body.velocity.x = 0;
		}

		if(vidas == 0){
			this.game.state.start("GameOver",true,false,score)
		}
	}
}
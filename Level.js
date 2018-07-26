class Level extends Phaser.Scene {
    constructor() {
        super({key: "Level"});
    }

    preload () {
        this.load.multiatlas('sprites', 'assets/sprites.json', 'assets');

        this.load.image('bg', 'assets/bg.jpg');
        this.load.image('trail', 'assets/particles/trail.png');

        this.load.audio('civitron', 'assets/audio/Vainly.mp3');
//        this.load.audio('death', 'assets/audio/death.mp3');
        this.load.json('shapes', 'assets/json/physic-shapes.json');
    }

    addSprite(x,y,atlas,name,shape) {
        var s = this.matter.add.sprite(0, 0, atlas, name+".png", shape);
        s.setPosition(x + s.centerOfMass.x, y + s.centerOfMass.y);
        return s;
    }

    create () {
        iter = 0;
        gameOver = false;
        var shapes = this.cache.json.get('shapes');

        let music = this.sound.add('civitron');
        music.play();
        this.cameras.main.setBounds(0, -1000000000000000000000, game.config.width, 1000000000000000000000);
        this.matter.world.setBounds(0, -1000000000000000000000, game.config.width, 1000000000000000000000,1,true,true,false,false);

        bg = this.add.tileSprite(400,400,800,800,'bg').setScrollFactor(0);

        this.addSprite(800-83, -939,'sprites','ob1',{shape: shapes.ob1});
        this.addSprite(800-152, -1850,'sprites','ob2',{shape: shapes.ob2});

        this.addSprite(135, -1899, 'sprites','ob3',{shape: shapes.ob3});
        this.addSprite(800-80, -2430, 'sprites','ob4',{shape: shapes.ob4});
        this.addSprite(80, -2430, 'sprites','ob5',{shape: shapes.ob5});
        this.addSprite(400, -2871,'sprites','ob6',{shape: shapes.ob6});
        this.addSprite(800-250, -3890, 'sprites','ob7',{shape: shapes.ob7});
        this.addSprite(106, -3496, 'sprites','ob8',{shape: shapes.ob8});
        this.addSprite(147, -4646,'sprites','ob9',{shape: shapes.ob9});
        this.addSprite(147, -5664, 'sprites','ob10a',{shape: shapes.ob10a});
        this.addSprite(111, -6180,'sprites','ob10b',{shape: shapes.ob10b});
        this.addSprite(800-143, -5245,'sprites','ob11',{shape: shapes.ob11});
        this.addSprite(800-211, -6353, 'sprites','ob12',{shape: shapes.ob12});
        this.addSprite(147, -7195,'sprites', 'ob10a',{shape: shapes.ob10a});
        this.addSprite(800-152, -7566, 'sprites','ob2',{shape: shapes.ob2});
        this.addSprite(400, -8271, 'sprites','ob6',{shape: shapes.ob6});

        //var aL = this.matter.world.fromPath('2 2  2 6  4 8  14 6  6 2   60 84  56 83  51 88  60 88   79 55  82 55  88 44  90  40  87 33  83 29  75 27  78 52   48 17  44 17  41 20  46 24  49 22   56 83  54 79  50 77  27 71  29, "y":84  34 87  43 88  51 88   53 21  51 25  69 25  59 21   31 87  34 87  29 84   46 24  41 20  38 20  30 44  44 31   85 61  88 60  88 44  82 55   90 35  87 33  90 40   35 90  43 88  34 87   17 49  19 50  24 45  20 38  17 44   24 45  30 44  38 20  38 18  20 38   87 31  83 29  87 33   51 25  44 31  30 44  72 28  69 25   16 37  20 38  38 18  14 6  12 33   29 10  14 6  38 18   78 52  75 27  73 51   4 8  12 33  14 6   73 51  75 27  72 28  30 44  30 46  59 68  64 67   50 77  50 73  27 71   50 73  59 68  30 46  21 53  20 56  23 66  27 71');
        player = this.addSprite(400, 1000, 'sprites','arrowStraight',{shape: shapes.arrowStraight});
        player.setVelocityY(-13);
        player.setScale(0.7, 0.7);
        player.setFriction(0,0,0);
        player.boundsMargin = 0;
        player.setInteractive();

        //obstacles.setPosition(400 + obstacles.centerOfMass.x, -4000 + obstacles.centerOfMass.y);
        //player.setCollideWorldBounds(true);
        this.input.on('pointerdown', function (pointer) {
            player.setTexture('sprites','arrowLeft',{shape: shapes.arrowLeft});
            player.setVelocityX(-13);
            player.boundsMargin = 0;
            player.setInteractive();
        });

        this.input.on('pointerup', function () {
            player.setTexture('sprites','arrowRight',{shape: shapes.arrowRight});
            player.setVelocityX(13);
            player.boundsMargin = 0;
            player.setInteractive();
        });

        this.cameras.main.startFollow(player, true, 0.05, 0.05);
        cameraMain = this.cameras.main;

        this.matter.world.on('collisionstart', function (event, player) {
            dead = true;
        });

        timedEvent = this.time.delayedCall(120000, onEvent, [], this);
    }

    update () {
        let death = this.sound.add('death');
        //bg.tilePositionX = Math.cos(-iter)*400;
        bg.tilePositionY = (-iter) * 1700;
        if (player.texture.key == 'arrowStraight'){
            this.add.image(player.x, player.y+35, 'trail').setScale(0.65).setAlpha(0.75);
        } else if (player.texture.key == 'arrowLeft') {
            this.add.image(player.x+15, player.y+15, 'trail').setScale(0.65).setAngle(45).setAlpha(0.75);
        } else {
            this.add.image(player.x-15, player.y+15, 'trail').setScale(0.65).setAngle(45).setAlpha(0.75);
        }

        if (dead) {
            console.log('You died!');
            //death.play();
            //cameraMain.shake(200, 0.01);
            dead = false;
        }

        if (gameOver) {
            return;
        }

        iter += 0.01;
    }

}

class Level extends Phaser.Scene {
    constructor() {
        super({key: "Level"});
    }

    preload () {
        this.load.multiatlas('sprites', 'assets/json/sprites.json', 'assets/physics');
        this.load.image('bg', 'assets/bg.jpg');
        /*this.load.image('arrowLeft', 'assets/physics/arrowLeft.png');
        this.load.image('arrowStraight', 'assets/physics/arrowStraight.png');
        this.load.image('arrowRight', 'assets/physics/arrowRight.png');
        this.load.image('ob1', 'assets/physics/ob1.png');
        this.load.image('ob2', 'assets/physics/ob2.png');
        this.load.image('ob3', 'assets/physics/ob3.png');
        this.load.image('ob4', 'assets/physics/ob4.png');
        this.load.image('ob5', 'assets/physics/ob5.png');
        this.load.image('ob6', 'assets/physics/ob6.png');
        this.load.image('ob7', 'assets/physics/ob7.png');
        this.load.image('ob8', 'assets/physics/ob8.png');
        this.load.image('ob9', 'assets/physics/ob9.png');
        this.load.image('ob10a', 'assets/physics/ob10a.png');
        this.load.image('ob10b', 'assets/physics/ob10b.png');
        this.load.image('ob11', 'assets/physics/ob11.png');
        this.load.image('ob12', 'assets/physics/ob12.png');
        this.load.image('obs2', 'assets/physics/obs2.png');*/
        this.load.image('trail', 'assets/particles/trail.png');
    
        this.load.audio('civitron', 'assets/audio/Vainly.mp3');
        this.load.audio('death', 'assets/audio/death.mp3');
        this.load.json('shapes', 'assets/json/physic-shapes.json');
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
        //var ob1Verts = this.matter.world.fromPath('5 168  169 331  169 5');
        this.matter.add.sprite(800-83, -939,'sprites','ob1',{shape: shapes.ob1});//.setStatic(true).setSensor(true).setFriction(0,0,0).setInteractive();
        //ob1.boundsMargin = 0;
        /*ob1.setBody({
            type: 'fromPhysicsEditor',
            fixtures: [
                {
                    label: "",
                    isSensor: true,
                    vertices: [
                        [ { x:5, y:168 }, { x:169, y:331 }, { x:169, y:5 } ]
                    ]
                }
            ]
        });*/
    
        //var ob2Verts = this.matter.world.fromPath('8 421  287 700  289 700  283 146   305 716  305 5  283 146  289 700   223 85  283 146  225 85   225 85  283 146  305 5');
        this.matter.add.sprite(800-152, -1850,'sprites','ob2',{shape: shapes.ob2});//.setStatic(true).setSensor(true).setFriction(0,0,0).setInteractive();
        //ob2.boundsMargin = 0;
        /*ob2.setBody({
            type: 'fromVerts',
            verts: ob2Verts
        });*/
    
        //var ob3Verts = this.matter.world.fromPath('0 3  0 525  186 189   0 525  262 263  188 189  186 189');
        this.matter.add.sprite(135, -1899, 'sprites','ob3',{shape: shapes.ob3});//.setStatic(true).setSensor(true).setFriction(0,0,0).setInteractive();
        //ob3.boundsMargin = 0;
        /*ob3.setBody({
            type: 'fromVerts',
            verts: ob3Verts
        });*/
    
        //var ob4Verts = this.matter.world.fromPath('7 157  7 159  161 312  9 157   161 5  9 157  161 312');
        this.matter.add.sprite(800-80, -2430, 'sprites','ob4',{shape: shapes.ob4});//.setStatic(true).setSensor(true).setFriction(0,0,0).setInteractive();
        //ob4.boundsMargin = 0;
        /*ob4.setBody({
            type: 'fromVerts',
            verts: ob4Verts
        });*/
    
        //var ob5Verts = this.matter.world.fromPath('154 157  152 157  0 312  154 159   0 5  0 312  152 157');
        this.matter.add.sprite(80, -2430, 'sprites','ob5',{shape: shapes.ob5});//.setStatic(true).setSensor(true).setFriction(0,0,0).setInteractive();
        //ob5.boundsMargin = 0;
        /*ob5.setBody({
            type: 'fromVerts',
            verts: ob5Verts
        });*/
    
       // var ob6Verts = this.matter.world.fromPath('');
        this.matter.add.sprite(400, -2871,'sprites','ob6',{shape: shapes.ob6});//.setStatic(true).setSensor(true).setFriction(0,0,0).setInteractive();
        //ob6.boundsMargin = 0;
        /*ob6.setBody({
            type: 'fromVerts',
            verts: ob6Verts
        });*/
    
        //var ob7Verts = this.matter.world.fromPath('');
        this.matter.add.sprite(800-250, -3890, 'sprites','ob7',{shape: shapes.ob7});//.setStatic(true).setSensor(true).setFriction(0,0,0).setInteractive();
        //ob7.boundsMargin = 0;
        /*ob7.setBody({
            type: 'fromVerts',
            verts: ob7Verts
        });*/
    
        //var ob8Verts = this.matter.world.fromPath('');
        this.matter.add.sprite(106, -3496, 'sprites','ob8',{shape: shapes.ob8});//.setStatic(true).setSensor(true).setFriction(0,0,0).setInteractive();
        /*ob8.setBody({
            type: 'fromVerts',
            verts: ob8Verts
        });*/
        //ob8.boundsMargin = 0;
    
        //var ob9Verts = this.matter.world.fromPath('');
        this.matter.add.sprite(147, -4646,'sprites','ob9',{shape: shapes.ob9});//.setStatic(true).setSensor(true).setFriction(0,0,0).setInteractive();
        /*ob9.setBody({
            type: 'fromVerts',
            verts: ob9Verts
        });*/
        //ob9.boundsMargin = 0;
    
        //var ob10aVerts = this.matter.world.fromPath('');
        this.matter.add.sprite(147, -5664, 'sprites','ob10a',{shape: shapes.ob10a});//.setStatic(true).setSensor(true).setFriction(0,0,0).setInteractive();
        /*    ob10a.setBody({
            type: 'fromVerts',
            verts: ob10aVerts
        });*/
        //ob10a.boundsMargin = 0;
    
        //var ob10bVerts = this.matter.world.fromPath('');
        this.matter.add.sprite(111, -6180,'sprites','ob10b',{shape: shapes.ob10b});//.setStatic(true).setSensor(true).setFriction(0,0,0).setInteractive();
        /*ob10b.setBody({
            type: 'fromVerts',
            verts: ob10bVerts
        });*/
        //ob10b.boundsMargin = 0;
    
        //var ob11Verts = this.matter.world.fromPath('');
        this.matter.add.sprite(800-143, -5245,'sprites','ob11',{shape: shapes.ob11});//.setStatic(true).setSensor(true).setFriction(0,0,0).setInteractive();
       /* ob11.setBody({
            type: 'fromVerts',
            verts: ob11Verts
        });*/
        //ob11.boundsMargin = 0;
    
        //var ob12Verts = this.matter.world.fromPath('');
        this.matter.add.sprite(800-211, -6353, 'sprites','ob12',{shape: shapes.ob12});//.setStatic(true).setSensor(true).setFriction(0,0,0).setInteractive();
        /*ob12.setBody({
            type: 'fromVerts',
            verts: ob12Verts
        });*/
        //ob12.boundsMargin = 0;
    
        this.matter.add.sprite(147, -7195,'sprites', 'ob10a',{shape: shapes.ob10a});//.setStatic(true).setSensor(true).setFriction(0,0,0).setInteractive();
        /*ob13.setBody({
            type: 'fromVerts',
            verts: ob10aVerts
        });*/
        //ob13.boundsMargin = 0;
    
        this.matter.add.sprite(800-152, -7566, 'sprites','ob2',{shape: shapes.ob2});//.setStatic(true).setSensor(true).setFriction(0,0,0).setInteractive();
        /*ob14.setBody({
            type: 'fromVerts',
            verts: ob2Verts
        });*/
        //ob14.boundsMargin = 0;
    
        this.matter.add.sprite(400, -8271, 'sprites','ob6',{shape: shapes.ob6});//.setStatic(true).setSensor(true).setFriction(0,0,0).setInteractive();
        //ob15.boundsMargin = 0;
    
        //this.matter.add.sprite(50, -7870, null, 'ob5',{shape: shapes.ob5});//.setStatic(true).setSensor(true).setFriction(0,0,0).setInteractive();
        //ob16.boundsMargin = 0;
    
       // this.matter.add.sprite(400, -8271-3086, 'obs2',{shape: shapes.obs2});//.setStatic(true).setSensor(true).setFriction(0,0,0);
        //obs2.boundsMargin = 0;
    
        //var aL = this.matter.world.fromPath('2 2  2 6  4 8  14 6  6 2   60 84  56 83  51 88  60 88   79 55  82 55  88 44  90  40  87 33  83 29  75 27  78 52   48 17  44 17  41 20  46 24  49 22   56 83  54 79  50 77  27 71  29, "y":84  34 87  43 88  51 88   53 21  51 25  69 25  59 21   31 87  34 87  29 84   46 24  41 20  38 20  30 44  44 31   85 61  88 60  88 44  82 55   90 35  87 33  90 40   35 90  43 88  34 87   17 49  19 50  24 45  20 38  17 44   24 45  30 44  38 20  38 18  20 38   87 31  83 29  87 33   51 25  44 31  30 44  72 28  69 25   16 37  20 38  38 18  14 6  12 33   29 10  14 6  38 18   78 52  75 27  73 51   4 8  12 33  14 6   73 51  75 27  72 28  30 44  30 46  59 68  64 67   50 77  50 73  27 71   50 73  59 68  30 46  21 53  20 56  23 66  27 71');
        player = this.matter.add.sprite(400, 1000, 'sprites','arrowStraight',{shape: shapes.arrowStraight});
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
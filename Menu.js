class Menu extends Phaser.Scene {
    constructor() {
        super({key: "Menu"});
    }

    preload() {
        this.load.image('bg', 'assets/bg.jpg');
        this.load.image('logo', 'assets/logoo.png');
        this.load.image('play', 'assets/play.png');
        this.load.image('info', 'assets/info.png');
        this.load.image('login', 'assets/login.png');
        this.load.image('topdeco', 'assets/vainlytop1.png');
        this.load.image('leftlabel', 'assets/vainlabel.png');
        this.load.audio('title', 'assets/audio/titlesong.mp3');
    }

    create() {
        titleSong = this.sound.add('title');
        titleSong.play();
        bg = this.add.tileSprite(400,400,800,800,'bg').setScrollFactor(0);
        logo = this.add.image(400,350,'logo').setScale(0.55).setAlpha(0.65);
        btnPlay = this.add.image(400,600,'play').setScale(0.1).setAlpha(0.65).setInteractive();
        btnPlay.on('pointerover', function (pointer) {
            btnPlay.setScale(0.115);  
        });

        btnPlay.on('pointerout', function (pointer) {
            btnPlay.setScale(0.1);  
        });

        btnPlay.on('pointerdown', function(pointer) {
            titleSong.stop();
            this.scene.start('Level');
        }, this);

        btnInfo = this.add.image(480,600,'info').setScale(0.075).setAlpha(0.65).setInteractive();
        btnInfo.on('pointerover', function (pointer) {
            btnInfo.setScale(0.09);  
        });

        btnInfo.on('pointerout', function (pointer) {
            btnInfo.setScale(0.075);  
        });

        btnLogin = this.add.image(320,600,'login').setScale(0.075).setAlpha(0.65).setInteractive();
        btnLogin.on('pointerover', function (pointer) {
            btnLogin.setScale(0.09);  
        });

        btnLogin.on('pointerout', function (pointer) {
            btnLogin.setScale(0.075);  
        });
        topDeco = this.add.image(400,0,'topdeco').setScale(0.55).setAlpha(0.65).setOrigin(0.5,0);
        var leftLabel = this.add.image(20,20,'leftlabel').setScale(0.75).setAlpha(0.65).setOrigin(0,0);
        iter = 0;
        gameOver = false;
    }

    update() {
        bg.tilePositionY = (-iter) * 1700;
        iter += 0.01;
    }
}
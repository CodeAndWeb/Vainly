var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    physics: {
        default: 'matter',
        matter: {
            gravity: { x: 0, y: 0},
            debug: true
        }
    },
    scene: [ Menu, Level ]
};

var game = new Phaser.Game(config);
var player;
var gameOver;
var camera;
var iter;
var bg;
var dead = false;
var arrival = false;
var timedEvent;
var logo;
var btnPlay;
var btnInfo;
var btnLogin;
var topDeco;
var cameraMain;
var titleSong;

function onEvent() {
    this.matter.pause();
    gameOver = true;
}

function startLevel() {
    this.scene.start("Level");  
}
class Application {
    game: Phaser.Game;
    snakeGame: SnakeGame;
    gameClock: Phaser.Timer;

    static GameHeight: number = 600;
    static GameWidth: number = 810;
    static GameClockTick: number = 120;

    constructor() {
        this.game = new Phaser.Game(Application.GameWidth, Application.GameHeight, Phaser.AUTO, 'content',
            {
                preload: this.preload.bind(this),
                create: this.create.bind(this),
                update: this.update.bind(this)
            });
        this.snakeGame = new SnakeGame();
    }

    preload() {
        this.snakeGame.preload(this.game);
    }

    create() {
        this.snakeGame.create(this.game);

        this.gameClock = this.game.time.create(false);
        this.gameClock.loop(Application.GameClockTick, this.snakeGame.updateSnake, this.snakeGame, null);
        this.gameClock.start();
    }

    update() {
        this.snakeGame.update(this.game);
    }
}

window.onload = () => {
    var app = new Application();
};
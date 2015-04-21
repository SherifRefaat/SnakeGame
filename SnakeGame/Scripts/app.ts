/// <reference path="phaser.d.ts" />

class Game {
    game: Phaser.Game;
    snakeGame: SnakeGame;
    gameClock: Phaser.Timer;

    static GameHeight: number = 600;
    static GameWidth: number = 810;

    constructor() {
        this.game = new Phaser.Game(Game.GameWidth, Game.GameHeight, Phaser.AUTO, 'content',
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
        this.gameClock.loop(100, this.updateSnake, this, null);
        this.gameClock.start();
    }

    update() {
        this.snakeGame.update(this.game);
    }

    updateSnake() {
        SnakeGame.snake.forEach((bead: Bead) => {
            bead.move();
        });
    }
}

window.onload = () => {
    var game = new Game();
};
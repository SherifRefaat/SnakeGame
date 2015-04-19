/// <reference path="phaser.d.ts" />

class SimpleGame {
    game: Phaser.Game;
    snake: SnakeGame;
    gameClock: Phaser.Timer;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content',
            {
                preload: this.preload.bind(this),
                create: this.create.bind(this)
            });
        this.snake = new SnakeGame();
    }

    preload() {
        this.snake.preload(this.game);
    }

    create() {
        this.snake.create(this.game);

        this.gameClock = this.game.time.create(false);
        this.gameClock.loop(1000, this.updateSnake, this, null);
        this.gameClock.start();
    }

    updateSnake() {
        this.snake.update(this.game);
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
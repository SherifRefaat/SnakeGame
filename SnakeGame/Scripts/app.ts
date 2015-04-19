/// <reference path="phaser.d.ts" />

class Game {
    game: Phaser.Game;
    snake: SnakeGame;
    gameClock: Phaser.Timer;

    static GameHeight: number = 800;
    static GameWidth: number = 600;

    constructor() {
        this.game = new Phaser.Game(Game.GameHeight, Game.GameWidth, Phaser.AUTO, 'content',
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
    var game = new Game();
};
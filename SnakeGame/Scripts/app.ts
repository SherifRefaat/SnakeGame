/// <reference path="phaser.d.ts" />

class Game {
    game: Phaser.Game;
    snake: SnakeGame;
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

    update() {
        this.snake.update(this.game);
    }

    updateSnake() {
        SnakeGame.snake.forEach((bead: Bead) => {
            /*bead.advanceX();
            bead.advanceY();*/
            bead.move();
        });
    }
}

window.onload = () => {
    var game = new Game();
};
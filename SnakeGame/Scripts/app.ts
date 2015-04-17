class SimpleGame {
    game: Phaser.Game;
    snake: SnakeGame;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content',
            {
                preload: this.preload.bind(this),
                create: this.create.bind(this),
                update: this.update.bind(this)
            });
        this.snake = new SnakeGame();
    }

    preload() {
        //this.game.load.image('star', 'star.png');
        this.snake.preload(this.game);
    }

    create() {
        //this.game.add.sprite(0, 0, 'star');
        this.snake.create(this.game);
    }

    update() {
        this.snake.update(this.game);
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
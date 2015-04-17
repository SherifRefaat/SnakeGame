var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
            preload: this.preload.bind(this),
            create: this.create.bind(this),
            update: this.update.bind(this)
        });
        this.snake = new SnakeGame();
    }
    SimpleGame.prototype.preload = function () {
        //this.game.load.image('star', 'star.png');
        this.snake.preload(this.game);
    };
    SimpleGame.prototype.create = function () {
        //this.game.add.sprite(0, 0, 'star');
        this.snake.create(this.game);
    };
    SimpleGame.prototype.update = function () {
        this.snake.update(this.game);
    };
    return SimpleGame;
})();
window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map
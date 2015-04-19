/// <reference path="phaser.d.ts" />
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
            preload: this.preload.bind(this),
            create: this.create.bind(this)
        });
        this.snake = new SnakeGame();
    }
    SimpleGame.prototype.preload = function () {
        this.snake.preload(this.game);
    };
    SimpleGame.prototype.create = function () {
        this.snake.create(this.game);
        this.gameClock = this.game.time.create(false);
        this.gameClock.loop(1000, this.updateSnake, this, null);
        this.gameClock.start();
    };
    SimpleGame.prototype.updateSnake = function () {
        this.snake.update(this.game);
    };
    return SimpleGame;
})();
window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map
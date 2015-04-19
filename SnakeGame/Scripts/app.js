/// <reference path="phaser.d.ts" />
var Game = (function () {
    function Game() {
        this.game = new Phaser.Game(Game.GameWidth, Game.GameHeight, Phaser.AUTO, 'content', {
            preload: this.preload.bind(this),
            create: this.create.bind(this)
        });
        this.snake = new SnakeGame();
    }
    Game.prototype.preload = function () {
        this.snake.preload(this.game);
    };
    Game.prototype.create = function () {
        this.snake.create(this.game);
        this.gameClock = this.game.time.create(false);
        this.gameClock.loop(1000, this.updateSnake, this, null);
        this.gameClock.start();
    };
    Game.prototype.updateSnake = function () {
        this.snake.update(this.game);
    };
    Game.GameHeight = 600;
    Game.GameWidth = 810;
    return Game;
})();
window.onload = function () {
    var game = new Game();
};
//# sourceMappingURL=app.js.map
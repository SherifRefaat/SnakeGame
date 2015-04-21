var Application = (function () {
    function Application() {
        this.game = new Phaser.Game(Application.GameWidth, Application.GameHeight, Phaser.AUTO, 'content', {
            preload: this.preload.bind(this),
            create: this.create.bind(this),
            update: this.update.bind(this)
        });
        this.snakeGame = new SnakeGame();
    }
    Application.prototype.preload = function () {
        this.snakeGame.preload(this.game);
    };
    Application.prototype.create = function () {
        this.snakeGame.create(this.game);
        this.gameClock = this.game.time.create(false);
        this.gameClock.loop(Application.GameClockTick, this.snakeGame.updateSnake, this.snakeGame, null);
        this.gameClock.start();
    };
    Application.prototype.update = function () {
        this.snakeGame.update(this.game);
    };
    Application.GameHeight = 600;
    Application.GameWidth = 810;
    Application.GameClockTick = 120;
    return Application;
})();
window.onload = function () {
    var app = new Application();
};
//# sourceMappingURL=app.js.map
var SnakeGame = (function () {
    function SnakeGame() {
        this.snake = [];
        this.snakeSize = 4;
    }
    SnakeGame.prototype.preload = function (game) {
        game.load.image(Bead.HeadBeadKey, Bead.HeadBead);
        game.load.image(Bead.BodyBeadKey, Bead.BodyBead);
    };
    SnakeGame.prototype.create = function (game) {
        for (var i = 0, span = 0; i < this.snakeSize; i++, span += Bead.BeadSize) {
            var bead = new Bead((i == this.snakeSize - 1), 0 + span, 0);
            bead.addToGame(game);
            this.snake.push(bead);
        }
    };
    SnakeGame.prototype.update = function (game) {
        var cursors = game.input.keyboard.createCursorKeys();
        if (cursors.down.justDown) {
            console.log('down');
        }
        else if (cursors.up.justDown) {
            console.log('up');
        }
        else if (cursors.right.justDown) {
            console.log('right');
        }
        else if (cursors.left.justDown) {
            console.log('left');
        }
    };
    return SnakeGame;
})();
//# sourceMappingURL=SnakeGame.js.map
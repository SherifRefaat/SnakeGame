var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Left"] = 3] = "Left";
})(Direction || (Direction = {}));
var DirectionMap = [
    -1,
    +1,
    +1,
    -1
];
var SnakeGame = (function () {
    function SnakeGame() {
        this.snake = [];
        this.snakeSize = 4;
        this.lastDirection = 2 /* Right */;
    }
    SnakeGame.prototype.preload = function (game) {
        game.load.image(Bead.HeadBeadKey, Bead.HeadBead);
        game.load.image(Bead.BodyBeadKey, Bead.BodyBead);
    };
    SnakeGame.prototype.create = function (game) {
        var i;
        for (i = 0; i < this.snakeSize; i++) {
            var bead = new Bead((i == this.snakeSize - 1), Bead.BeadSize * i, 0, 2 /* Right */);
            bead.addToGame(game);
            this.snake.push(bead);
        }
        for (i = 0; i < this.snakeSize - 1; i++)
            this.snake[i].nextBead = this.snake[i + 1];
        this.snake[i].nextBead = null;
        // Reversing the array for simplicity sake
        this.snake = this.snake.reverse();
    };
    SnakeGame.prototype.update = function (game) {
        var cursors = game.input.keyboard.createCursorKeys();
        // Identify the key pressed direction and reject if it is a not allowed move
        if (cursors.down.justDown) {
            console.log('down');
            if (this.lastDirection != 0 /* Up */)
                this.lastDirection = 1 /* Down */;
        }
        else if (cursors.up.justDown) {
            console.log('up');
            if (this.lastDirection != 1 /* Down */)
                this.lastDirection = 0 /* Up */;
        }
        else if (cursors.right.justDown) {
            console.log('right');
            if (this.lastDirection != 3 /* Left */)
                this.lastDirection = 2 /* Right */;
        }
        else if (cursors.left.justDown) {
            console.log('left');
            if (this.lastDirection != 2 /* Right */)
                this.lastDirection = 3 /* Left */;
        }
    };
    SnakeGame.prototype.updateSnake = function () {
        for (var i = this.snakeSize - 1; i >= 0; i--) {
            this.snake[i].move(this.lastDirection);
        }
    };
    return SnakeGame;
})();
//# sourceMappingURL=SnakeGame.js.map
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Left"] = 3] = "Left";
})(Direction || (Direction = {}));
var DirectionMap = [
    -1,
    1,
    1,
    -1
];
var SnakeGame = (function () {
    function SnakeGame() {
    }
    SnakeGame.prototype.preload = function (game) {
        game.load.image(Bead.HeadBeadKey, Bead.HeadBead);
        game.load.image(Bead.BodyBeadKey, Bead.BodyBead);
    };
    SnakeGame.prototype.create = function (game) {
        var i;
        for (i = 0; i < SnakeGame.snakeSize; i++) {
            var bead = new Bead((i == SnakeGame.snakeSize - 1), Bead.BeadSize * i, 0, 2 /* Right */);
            bead.addToGame(game);
            SnakeGame.snake.push(bead);
        }
        for (i = 0; i < SnakeGame.snakeSize - 1; i++)
            SnakeGame.snake[i].nextBead = SnakeGame.snake[i + 1];
        SnakeGame.snake[i].nextBead = null;
    };
    SnakeGame.prototype.update = function (game) {
        var cursors = game.input.keyboard.createCursorKeys();
        if (cursors.down.justDown) {
            console.log('down');
            SnakeGame.lastDirection = 1 /* Down */;
        }
        else if (cursors.up.justDown) {
            console.log('up');
            SnakeGame.lastDirection = 0 /* Up */;
        }
        else if (cursors.right.justDown) {
            console.log('right');
            SnakeGame.lastDirection = 2 /* Right */;
        }
        else if (cursors.left.justDown) {
            console.log('left');
            SnakeGame.lastDirection = 3 /* Left */;
        }
    };
    SnakeGame.snake = [];
    SnakeGame.snakeSize = 4;
    SnakeGame.lastDirection = 2 /* Right */;
    return SnakeGame;
})();
//# sourceMappingURL=SnakeGame.js.map
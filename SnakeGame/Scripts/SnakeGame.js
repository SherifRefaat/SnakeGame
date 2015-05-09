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
        this.snakeSize = 6;
        this.lastDirection = 2 /* Right */;
        this.isGameOver = false;
        this.score = 0;
    }
    SnakeGame.prototype.preload = function (game) {
        game.load.image(Bead.HeadBeadSpriteKey, Bead.HeadBeadSprite);
        game.load.image(Bead.BodyBeadSpriteKey, Bead.BodyBeadSprite);
        game.load.image(Prey.PreySpriteKey, Prey.PreySprite);
    };
    SnakeGame.prototype.create = function (game) {
        var i;
        for (i = 0; i < this.snakeSize; i++) {
            var bead = new Bead((i == this.snakeSize - 1), Bead.BeadSpriteSize * i, 0, 2 /* Right */, false);
            bead.addToGame(game);
            this.snake.push(bead);
        }
        for (i = 0; i < this.snakeSize - 1; i++)
            this.snake[i].nextBead = this.snake[i + 1];
        this.snake[i].nextBead = null;
        // Reversing the array for simplicity sake
        this.snake = this.snake.reverse();
        // Defining the prey
        var preyX = (this.snakeSize * 2 * Bead.BeadSpriteSize) % Application.GameWidth;
        this.prey = new Prey(preyX, 0, game);
        this.textRender = game.add.text(Application.GameWidth / 2 - 50, Application.GameHeight / 2 - 50, this.score.toString(), {
            fontSize: "100px",
            fill: "#FFF"
        });
    };
    SnakeGame.prototype.update = function (game) {
        // Section removed to snakeUpdate to make the game respond to input in the right way
    };
    SnakeGame.prototype.updateSnake = function (game) {
        for (var i = this.snakeSize - 1; i >= 0; i--) {
            this.snake[i].move(this.lastDirection);
        }
        var cursors = game.input.keyboard.createCursorKeys();
        // Identify the key pressed direction and reject if it is a not allowed move
        if (cursors.down.justDown) {
            if (this.lastDirection != 0 /* Up */)
                this.lastDirection = 1 /* Down */;
        }
        else if (cursors.up.justDown) {
            if (this.lastDirection != 1 /* Down */)
                this.lastDirection = 0 /* Up */;
        }
        else if (cursors.right.justDown) {
            if (this.lastDirection != 3 /* Left */)
                this.lastDirection = 2 /* Right */;
        }
        else if (cursors.left.justDown) {
            if (this.lastDirection != 2 /* Right */)
                this.lastDirection = 3 /* Left */;
        }
        var snakeHead = this.snake[0];
        for (var i = 2; i < this.snakeSize; i++) {
            if (snakeHead.collideWith(this.snake[i])) {
                this.gameOver();
                return; // Game is over, no more processing here.
            }
        }
        // Check for collision with the Prey
        if (snakeHead.collideWith(this.prey)) {
            this.preyConsumed(game);
        }
    };
    SnakeGame.prototype.preyConsumed = function (game) {
        this.score += 5;
        this.updateScore();
        // Add new bead
        var lastBead = this.snake[this.snakeSize - 1];
        var newBead = new Bead(false, lastBead.x, lastBead.y, lastBead.direction, true);
        newBead.nextBead = lastBead;
        newBead.addToGame(game);
        this.snake.push(newBead);
        this.snakeSize++;
        // Prepare the next Prey location
        this.calculateNewPreyPosition();
    };
    SnakeGame.prototype.gameOver = function () {
        this.isGameOver = true;
        Application.gameClock.stop();
        this.textRender.x = Application.GameWidth / 6;
        this.textRender.setText('Game Over');
    };
    SnakeGame.prototype.updateScore = function () {
        this.textRender.setText(this.score.toString());
    };
    SnakeGame.prototype.calculateNewPreyPosition = function () {
        var x, y, satisfied;
        do {
            satisfied = true;
            x = this.getRandomX();
            y = this.getRandomY();
            for (var i = 0; i < this.snake.length; i++) {
                if (this.snake[i].x == x && this.snake[i].y == y) {
                    satisfied = false;
                    break;
                }
            }
        } while (!satisfied);
        this.prey.setLocation(x, y);
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    SnakeGame.prototype.getRandomX = function () {
        var randomInt = Math.floor(Math.random() * (Application.GameWidth));
        return randomInt - (randomInt % Bead.BeadSpriteSize);
    };
    SnakeGame.prototype.getRandomY = function () {
        var randomInt = Math.floor(Math.random() * (Application.GameHeight));
        return randomInt - (randomInt % Bead.BeadSpriteSize);
    };
    return SnakeGame;
})();
//# sourceMappingURL=SnakeGame.js.map
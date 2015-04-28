enum Direction {
    Up,
    Down,
    Right,
    Left
}

var DirectionMap: number[] =
    [
        -1, /* Up */
        +1, /* Down */
        +1, /* Right */
        -1  /* Left */
    ];

class SnakeGame {
    snake: Bead[] = [];
    snakeSize: number = 6;

    prey: Prey;

    lastDirection: Direction = Direction.Right;

    isGameOver: boolean = false;

    score: number = 0;

    textRender: Phaser.Text;

    preload(game: Phaser.Game) {
        game.load.image(Bead.HeadBeadSpriteKey, Bead.HeadBeadSprite);
        game.load.image(Bead.BodyBeadSpriteKey, Bead.BodyBeadSprite);
        game.load.image(Prey.PreySpriteKey, Prey.PreySprite);
    }

    create(game: Phaser.Game) {
        var i: number;
        // Initial body contains 3 beads + the head bead
        // 0:body  1:body  2:body  3:head  ,for example.
        for (i = 0; i < this.snakeSize; i++) {
            var bead = new Bead((i == this.snakeSize - 1), Bead.BeadSpriteSize * i, 0, Direction.Right, false);
            bead.addToGame(game);
            this.snake.push(bead);
        }

        // Set the bead pointer to the next bead, head will be null
        for (i = 0; i < this.snakeSize - 1; i++)
            this.snake[i].nextBead = this.snake[i + 1];
        this.snake[i].nextBead = null;

        // Reversing the array for simplicity sake
        this.snake = this.snake.reverse();

        // Defining the prey
        var preyX: number = (this.snakeSize * 2 * Bead.BeadSpriteSize) % Application.GameWidth;
        this.prey = new Prey(preyX, 0, game);

        this.textRender = game.add.text(
            Application.GameWidth / 2 - 50, Application.GameHeight / 2 - 50, this.score.toString(),
            {
                fontSize: "100px",
                fill: "#FFF"
            });
    }

    update(game: Phaser.Game) {
        // Section removed to snakeUpdate to make the game respond to input in the right way
    }

    updateSnake(game: Phaser.Game) {
        for (var i: number = this.snakeSize - 1; i >= 0; i--) {
            this.snake[i].move(this.lastDirection);
        }

        var cursors = game.input.keyboard.createCursorKeys();

        // Identify the key pressed direction and reject if it is a not allowed move
        if (cursors.down.justDown) {
            if (this.lastDirection != Direction.Up)
                this.lastDirection = Direction.Down;
        } else if (cursors.up.justDown) {
            if (this.lastDirection != Direction.Down)
                this.lastDirection = Direction.Up;
        } else if (cursors.right.justDown) {
            if (this.lastDirection != Direction.Left)
                this.lastDirection = Direction.Right;
        } else if (cursors.left.justDown) {
            if (this.lastDirection != Direction.Right)
                this.lastDirection = Direction.Left;
        }

        var snakeHead = this.snake[0];

        // Start at bead number 2 after the head bead,
        // because it is not possible to collide with beads number 1 and 2.
        for (var i: number = 2; i < this.snakeSize; i++) {
            if (snakeHead.collideWith(this.snake[i])) {
                this.gameOver();
                return; // Game is over, no more processing here.
            }
        }

        // Check for collision with the Prey
        if (snakeHead.collideWith(this.prey)) {
            this.preyConsumed(game);
        }
    }

    preyConsumed(game: Phaser.Game) {
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
    }

    gameOver() {
        this.isGameOver = true;
        Application.gameClock.stop();
        this.textRender.x = Application.GameWidth / 6;
        this.textRender.setText('Game Over');
    }

    updateScore() {
        this.textRender.setText(this.score.toString());
    }

    calculateNewPreyPosition() {
        var x, y, satisfied;
        
        do{
            satisfied = true;
            x = this.getRandomX();
            y = this.getRandomY();
            
            for (var i: number = 0; i < this.snake.length; i++) {
                if (this.snake[i].x == x && this.snake[i].y == y) {
                    satisfied = false;
                    break;
                }
            }
        } while(!satisfied)

        this.prey.setLocation(x, y);
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    getRandomX(): number {
        var randomInt = Math.floor(Math.random() * (Application.GameWidth));
        return randomInt - (randomInt % Bead.BeadSpriteSize)
    }

    getRandomY(): number {
        var randomInt = Math.floor(Math.random() * (Application.GameHeight));
        return randomInt - (randomInt % Bead.BeadSpriteSize)
    }
}

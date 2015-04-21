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
    snakeSize: number = 4;

    lastDirection: Direction = Direction.Right;

    preload(game: Phaser.Game) {
        game.load.image(Bead.HeadBeadKey, Bead.HeadBead);
        game.load.image(Bead.BodyBeadKey, Bead.BodyBead);
    }

    create(game: Phaser.Game) {
        var i: number;
        // Initial body contains 3 beads + the head bead
        // 0:body  1:body  2:body  3:head  ,for example.
        for (i = 0; i < this.snakeSize; i++) {
            var bead = new Bead((i == this.snakeSize - 1), Bead.BeadSize * i, 0, Direction.Right);
            bead.addToGame(game);
            this.snake.push(bead);
        }

        // Set the bead pointer to the next bead, head will be null
        for (i = 0; i < this.snakeSize - 1; i++)
            this.snake[i].nextBead = this.snake[i + 1];
        this.snake[i].nextBead = null;

        // Reversing the array for simplicity sake
        this.snake = this.snake.reverse();
    }

    update(game: Phaser.Game) {
        var cursors = game.input.keyboard.createCursorKeys();

        // Identify the key pressed direction and reject if it is a not allowed move
        if (cursors.down.justDown) {
            console.log('down');
            if (this.lastDirection != Direction.Up)
                this.lastDirection = Direction.Down;
            this.lastDirection = Direction.Down;
        } else if (cursors.up.justDown) {
            console.log('up');
            if (this.lastDirection != Direction.Down)
                this.lastDirection = Direction.Up;
            this.lastDirection = Direction.Up;
        } else if (cursors.right.justDown) {
            console.log('right');
            if (this.lastDirection != Direction.Left)
                this.lastDirection = Direction.Right;
            this.lastDirection = Direction.Right;
        } else if (cursors.left.justDown) {
            console.log('left');
            if (this.lastDirection != Direction.Right)
                this.lastDirection = Direction.Left;
            this.lastDirection = Direction.Left;
        }
    }

    updateSnake() {
        for (var i: number = this.snakeSize - 1; i >= 0; i--) {
            this.snake[i].move(this.lastDirection);
        }
    }
}
enum Direction {
    Up,
    Down,
    Right,
    Left
}

var DirectionMap: number[] =
    [
        -1, /* Up */
        1,  /* Down */
        1,  /* Right */
        -1  /* Left */
    ];

class SnakeGame {
    static snake: Bead[] = [];
    static snakeSize: number = 4;

    static lastDirection: Direction = Direction.Right;

    preload(game: Phaser.Game) {
        game.load.image(Bead.HeadBeadKey, Bead.HeadBead);
        game.load.image(Bead.BodyBeadKey, Bead.BodyBead);
    }

    create(game: Phaser.Game) {
        // Initial body contains 3 beads + the head bead
        for (var i: number = 0, span: number = 0; i < SnakeGame.snakeSize; i++ , span += Bead.BeadSize) {
            var bead = new Bead((i == SnakeGame.snakeSize - 1), 0 + span, 0, Direction.Right);
            bead.addToGame(game);
            SnakeGame.snake.push(bead);
        }

        // Reverse the array for simplicity
        SnakeGame.snake = SnakeGame.snake.reverse();

        // Set the bead pointer to the next bead, head will be null
        for (var i: number = SnakeGame.snake.length - 1; i >= 0; i--)
            SnakeGame.snake[i].nextBead = (i != 0) ? SnakeGame.snake[i - 1] : null;
    }

    update(game: Phaser.Game) {
        var cursors = game.input.keyboard.createCursorKeys();
        
        if (cursors.down.justDown) {
            console.log('down');
            SnakeGame.lastDirection = Direction.Down;
        } else if (cursors.up.justDown) {
            console.log('up');
            SnakeGame.lastDirection = Direction.Up;
        } else if (cursors.right.justDown) {
            console.log('right');
            SnakeGame.lastDirection = Direction.Right;
        } else if (cursors.left.justDown) {
            console.log('left');
            SnakeGame.lastDirection = Direction.Left;
        }
    }
}
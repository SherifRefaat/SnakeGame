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
        var i: number;
        // Initial body contains 3 beads + the head bead
        // 0:body  1:body  2:body  3:head  ,for example.
        for (i = 0; i < SnakeGame.snakeSize; i++) {
            var bead = new Bead((i == SnakeGame.snakeSize - 1), Bead.BeadSize * i, 0, Direction.Right);
            bead.addToGame(game);
            SnakeGame.snake.push(bead);
        }

        // Set the bead pointer to the next bead, head will be null
        for (i = 0; i < SnakeGame.snakeSize - 1; i++)
            SnakeGame.snake[i].nextBead = SnakeGame.snake[i + 1];
        SnakeGame.snake[i].nextBead = null;
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
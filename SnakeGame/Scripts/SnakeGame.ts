class SnakeGame {
    snake: Bead[] = [];
    snakeSize: number = 4;

    preload(game: Phaser.Game) {
        game.load.image(Bead.HeadBeadKey, Bead.HeadBead);
        game.load.image(Bead.BodyBeadKey, Bead.BodyBead);
    }

    create(game: Phaser.Game) {
        // initial body contains 3 beads + the head bead
        for (var i: number = 0, span: number = 0; i < this.snakeSize; i++ , span += Bead.BeadSize) {
            var bead = new Bead((i == this.snakeSize - 1), 0 + span, 0);
            bead.addToGame(game);
            this.snake.push(bead);
        }
    }

    update(game: Phaser.Game) {
        var cursors = game.input.keyboard.createCursorKeys();
        if (cursors.down.justDown) {
            console.log('down');
        } else if (cursors.up.justDown) {
            console.log('up');
        } else if (cursors.right.justDown) {
            console.log('right');
        } else if (cursors.left.justDown) {
            console.log('left');
        }

        this.snake.forEach(
            (bead: Bead) =>
            {
                bead.advanceX();
                bead.advanceY();
            });
    }
}
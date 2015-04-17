class SnakeGame {
    HeadBead: string = 'HeadBead.png';
    BodyBead: string = 'BodyBead.png';

    preload(game: Phaser.Game) {
        game.load.image('headBead', this.HeadBead);
        game.load.image('bodyBead', this.BodyBead);
    }

    create(game: Phaser.Game) {
        // initial body contains 3 beads + the head bead
        var span: number = 0;

        for (var i = 0; i < 3; i++, span += 30)
            game.add.sprite(0 + span, 0, 'bodyBead');

        game.add.sprite(span, 0, 'headBead');
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
    }
}
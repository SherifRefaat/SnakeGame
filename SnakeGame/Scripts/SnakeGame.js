var SnakeGame = (function () {
    function SnakeGame() {
        this.HeadBead = 'HeadBead.png';
        this.BodyBead = 'BodyBead.png';
    }
    SnakeGame.prototype.preload = function (game) {
        game.load.image('headBead', this.HeadBead);
        game.load.image('bodyBead', this.BodyBead);
    };
    SnakeGame.prototype.create = function (game) {
        // initial body contains 3 beads + the head bead
        var span = 0;
        for (var i = 0; i < 3; i++, span += 30)
            game.add.sprite(0 + span, 0, 'bodyBead');
        game.add.sprite(span, 0, 'headBead');
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
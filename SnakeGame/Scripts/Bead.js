var Bead = (function () {
    function Bead(isHeadBead, x, y, direction) {
        this.isHeadBead = isHeadBead;
        if (this.isHeadBead) {
            this.spriteKey = Bead.HeadBeadKey;
        }
        else {
            this.spriteKey = Bead.BodyBeadKey;
        }
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
    Bead.prototype.addToGame = function (game) {
        this.sprite = game.add.sprite(this.x, this.y, this.spriteKey);
    };
    Bead.prototype.move = function () {
        // Update direction from next bead or from the game last direction inputed as a head bead
        if (this.isHeadBead) {
            this.direction = SnakeGame.lastDirection;
        }
        else {
            this.direction = this.nextBead.direction;
        }
        var direction, span;
        if (this.direction == 2 /* Right */ || this.direction == 3 /* Left */) {
            direction = DirectionMap[this.direction];
            span = Bead.BeadSize;
            this.x += direction * span;
            if (this.x >= Game.GameWidth) {
                this.x = 0;
            }
            else if (this.x < 0) {
                this.x = Game.GameWidth - Bead.BeadSize;
            }
        }
        else {
            direction = ((this.direction == 0 /* Up */ || this.direction == 1 /* Down */) ? DirectionMap[this.direction] : 1);
            span = Bead.BeadSize;
            this.y += direction * span;
            if (this.y >= Game.GameHeight) {
                this.y = 0;
            }
            else if (this.y < 0) {
                this.y = Game.GameHeight - Bead.BeadSize;
            }
        }
        /*if (this.isHeadBead)
            console.log('x: ' + this.x);
            console.log('y: ' + this.y);
        */
        this.sprite.position.set(this.x, this.y);
    };
    Bead.HeadBead = 'Resources/HeadBead.png';
    Bead.HeadBeadKey = 'headBead';
    Bead.BodyBead = 'Resources/BodyBead.png';
    Bead.BodyBeadKey = 'bodyBead';
    Bead.BeadSize = 30;
    return Bead;
})();
//# sourceMappingURL=Bead.js.map
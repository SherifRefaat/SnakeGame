var Bead = (function () {
    function Bead(isHeadBead, x, y) {
        this.isHeadBead = isHeadBead;
        if (this.isHeadBead) {
            this.spriteKey = Bead.HeadBeadKey;
        }
        else {
            this.spriteKey = Bead.BodyBeadKey;
        }
        this.x = x;
        this.y = y;
    }
    Bead.prototype.addToGame = function (game) {
        this.sprite = game.add.sprite(this.x, this.y, this.spriteKey);
    };
    Bead.prototype.advanceX = function (x) {
        this.x += (x === undefined) ? Bead.BeadSize : x;
        // check for boundary cross
        if (this.x > Game.GameWidth) {
            this.x = 0;
        }
        this.sprite.position.set(this.x, this.y);
    };
    Bead.prototype.advanceY = function (y) {
        this.y += (y === undefined) ? Bead.BeadSize : y;
        // check for boundary cross
        if (this.y > Game.GameHeight) {
            this.y = 0;
        }
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
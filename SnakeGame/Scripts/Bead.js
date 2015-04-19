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
    Bead.prototype.advance = function (xSpan, ySpan) {
        this.x += xSpan;
        this.y += ySpan;
        this.sprite.position.set(this.x, this.y);
    };
    Bead.prototype.advanceX = function () {
        this.x += Bead.BeadSize;
        this.sprite.position.set(this.x, this.y);
    };
    Bead.prototype.advanceY = function () {
        this.y += Bead.BeadSize;
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
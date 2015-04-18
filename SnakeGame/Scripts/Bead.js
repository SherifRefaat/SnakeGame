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
        game.add.sprite(this.x, this.y, this.spriteKey);
    };
    Bead.HeadBead = 'Resources/HeadBead.png';
    Bead.HeadBeadKey = 'headBead';
    Bead.BodyBead = 'Resources/BodyBead.png';
    Bead.BodyBeadKey = 'bodyBead';
    Bead.BeadSize = 30;
    return Bead;
})();
//# sourceMappingURL=Bead.js.map
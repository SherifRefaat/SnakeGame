var Prey = (function () {
    function Prey(x, y, game) {
        this.x = x;
        this.y = y;
        this.sprite = game.add.sprite(this.x, this.y, Prey.PreySpriteKey);
    }
    Prey.prototype.setLocation = function (x, y) {
        this.sprite.x = this.x = x;
        this.sprite.y = this.y = y;
    };
    // All game sprites have the same snake beads size
    Prey.PreySize = Bead.BeadSpriteSize;
    Prey.PreySpriteKey = 'prey';
    Prey.PreySprite = 'Resources/prey.png';
    return Prey;
})();
//# sourceMappingURL=Prey.js.map
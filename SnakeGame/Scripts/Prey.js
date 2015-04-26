var Prey = (function () {
    function Prey(x, y, game) {
        this.x = x;
        this.y = y;
        this.sprite = game.add.sprite(this.x, this.y, Prey.PreySpriteKey);
    }
    // All game sprites have the same snake beads size
    Prey.PreySize = Bead.BeadSpriteSize;
    Prey.PreySpriteKey = 'prey';
    Prey.PreySprite = 'Resources/prey.png';
    return Prey;
})();
//# sourceMappingURL=Prey.js.map
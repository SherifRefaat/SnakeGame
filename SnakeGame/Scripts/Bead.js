var Bead = (function () {
    function Bead(isHeadBead, x, y, direction, isStillBead) {
        var _this = this;
        this.isHeadBead = isHeadBead;
        if (this.isHeadBead) {
            this.spriteKey = Bead.HeadBeadSpriteKey;
        }
        else {
            this.spriteKey = Bead.BodyBeadSpriteKey;
        }
        this.x = x;
        this.y = y;
        this.direction = direction;
        if (isStillBead) {
            this.move = function () {
                _this.stillMove();
            };
        }
        else {
            this.move = function (lastDirection) {
                _this.normalMove(lastDirection);
            };
        }
    }
    Bead.prototype.addToGame = function (game) {
        this.sprite = game.add.sprite(this.x, this.y, this.spriteKey);
    };
    Bead.prototype.stillMove = function () {
        var _this = this;
        // Pass this turn and set the moving move method to next call
        this.move = function (lastDirection) {
            _this.normalMove(lastDirection);
        };
    };
    Bead.prototype.normalMove = function (lastDirection) {
        if (this.isHeadBead) {
            this.direction = lastDirection;
        }
        else {
            this.direction = this.nextBead.direction;
        }
        var direction, span;
        if (this.direction == 2 /* Right */ || this.direction == 3 /* Left */) {
            direction = DirectionMap[this.direction];
            span = Bead.BeadSpriteSize;
            this.x += direction * span;
            if (this.x >= Application.GameWidth) {
                this.x = 0;
            }
            else if (this.x < 0) {
                this.x = Application.GameWidth - Bead.BeadSpriteSize;
            }
        }
        else {
            direction = ((this.direction == 0 /* Up */ || this.direction == 1 /* Down */) ? DirectionMap[this.direction] : 1);
            span = Bead.BeadSpriteSize;
            this.y += direction * span;
            if (this.y >= Application.GameHeight) {
                this.y = 0;
            }
            else if (this.y < 0) {
                this.y = Application.GameHeight - Bead.BeadSpriteSize;
            }
        }
        /*if (this.isHeadBead)
            console.log('x: ' + this.x);
            console.log('y: ' + this.y);
        */
        this.sprite.position.set(this.x, this.y);
    };
    Bead.prototype.collideWith = function (otherSprite) {
        return this.x == otherSprite.x && this.y == otherSprite.y;
    };
    Bead.HeadBeadSprite = 'Resources/HeadBead.png';
    Bead.HeadBeadSpriteKey = 'headBead';
    Bead.BodyBeadSprite = 'Resources/BodyBead.png';
    Bead.BodyBeadSpriteKey = 'bodyBead';
    Bead.BeadSpriteSize = 30; /* Beads are squares */
    return Bead;
})();
//# sourceMappingURL=Bead.js.map
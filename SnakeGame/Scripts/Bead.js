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
            this.movement = function () {
                _this.stillMove();
            };
        }
        else {
            this.movement = function (lastDirection) {
                _this.move(lastDirection);
            };
        }
    }
    Bead.prototype.addToGame = function (game) {
        this.sprite = game.add.sprite(this.x, this.y, this.spriteKey);
    };
    Bead.prototype.stillMove = function () {
        var _this = this;
        // Pass this turn and set the moving movement method to next call
        this.movement = function (lastDirection) {
            _this.move(lastDirection);
        };
    };
    Bead.prototype.move = function (lastDirection) {
        if (this.isHeadBead) {
            this.direction = lastDirection;
        }
        else {
            this.direction = this.nextBead.direction;
        }
        var direction, span;
        if (this.direction == Direction.Right || this.direction == Direction.Left) {
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
            direction = ((this.direction == Direction.Up || this.direction == Direction.Down) ? DirectionMap[this.direction] : 1);
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
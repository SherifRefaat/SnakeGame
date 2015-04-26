class Bead {
    static HeadBeadSprite: string = 'Resources/HeadBead.png';
    static HeadBeadSpriteKey: string = 'headBead';
    static BodyBeadSprite: string = 'Resources/BodyBead.png';
    static BodyBeadSpriteKey: string = 'bodyBead';
    static BeadSpriteSize: number = 30; /* Beads are squares */

    sprite: Phaser.Sprite;
    spriteKey: string;
    isHeadBead: boolean;
    x: number;
    y: number;
    direction: Direction;
    nextBead: Bead;

    constructor(isHeadBead: boolean, x: number, y: number, direction: Direction) {
        this.isHeadBead = isHeadBead;
        if (this.isHeadBead) {
            this.spriteKey = Bead.HeadBeadSpriteKey;
        } else {
            this.spriteKey = Bead.BodyBeadSpriteKey;
        }

        this.x = x;
        this.y = y;

        this.direction = direction;
    }

    addToGame(game: Phaser.Game) {
        this.sprite = game.add.sprite(this.x, this.y, this.spriteKey);
    }

    move(lastDirection: Direction) {
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
            } else if (this.x < 0) {
                this.x = Application.GameWidth - Bead.BeadSpriteSize;
            }

        }
        else {
            direction = ((this.direction == Direction.Up || this.direction == Direction.Down) ? DirectionMap[this.direction] : 1);
            span = Bead.BeadSpriteSize;
            this.y += direction * span;

            if (this.y >= Application.GameHeight) {
                this.y = 0;
            } else if (this.y < 0) {
                this.y = Application.GameHeight - Bead.BeadSpriteSize;
            }
        }

        /*if (this.isHeadBead)
            console.log('x: ' + this.x);
            console.log('y: ' + this.y);
        */
        this.sprite.position.set(this.x, this.y);
    }

    collideWith(otherBead: Bead): boolean {
        return this.x == otherBead.x && this.y == otherBead.y;
    }
}
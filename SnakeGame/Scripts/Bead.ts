class Bead {
    static HeadBead: string = 'Resources/HeadBead.png';
    static HeadBeadKey: string = 'headBead';
    static BodyBead: string = 'Resources/BodyBead.png';
    static BodyBeadKey: string = 'bodyBead';
    static BeadSize: number = 30;

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
            this.spriteKey = Bead.HeadBeadKey;
        } else {
            this.spriteKey = Bead.BodyBeadKey;
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
            span = Bead.BeadSize;
            this.x += direction * span;

            if (this.x >= Application.GameWidth) {
                this.x = 0;
            } else if (this.x < 0) {
                this.x = Application.GameWidth - Bead.BeadSize;
            }

        }
        else {
            direction = ((this.direction == Direction.Up || this.direction == Direction.Down) ? DirectionMap[this.direction] : 1);
            span = Bead.BeadSize;
            this.y += direction * span;

            if (this.y >= Application.GameHeight) {
                this.y = 0;
            } else if (this.y < 0) {
                this.y = Application.GameHeight - Bead.BeadSize;
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
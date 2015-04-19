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

    constructor(isHeadBead: boolean, x:number, y:number ) {
        this.isHeadBead = isHeadBead;
        if (this.isHeadBead) {
            this.spriteKey = Bead.HeadBeadKey;
        } else {
            this.spriteKey = Bead.BodyBeadKey;
        }

        this.x = x;
        this.y = y;
    }

    addToGame(game: Phaser.Game) {
        this.sprite = game.add.sprite(this.x, this.y, this.spriteKey);
    }

    advance(xSpan:number, ySpan:number) {
        this.x += xSpan;
        this.y += ySpan;
        this.sprite.position.set(this.x, this.y);
    }

    advanceX() {
        this.x += Bead.BeadSize;
        this.sprite.position.set(this.x, this.y);
    }

    advanceY() {
        this.y += Bead.BeadSize;
        this.sprite.position.set(this.x, this.y);
    }
}
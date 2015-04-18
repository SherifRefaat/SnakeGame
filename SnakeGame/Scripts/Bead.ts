class Bead {

    static HeadBead: string = 'Resources/HeadBead.png';
    static HeadBeadKey: string = 'headBead';
    static BodyBead: string = 'Resources/BodyBead.png';
    static BodyBeadKey: string = 'bodyBead';
    static BeadSize: number = 30;

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
        game.add.sprite(this.x, this.y, this.spriteKey);
    }
}
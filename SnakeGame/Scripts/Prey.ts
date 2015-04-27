class Prey {
    x: number;
    y: number;
    sprite: Phaser.Sprite;

    // All game sprites have the same snake beads size
    static PreySize: number = Bead.BeadSpriteSize;
    static PreySpriteKey: string = 'prey';
    static PreySprite: string = 'Resources/prey.png';

    constructor(x: number, y: number, game: Phaser.Game) {
        this.x = x;
        this.y = y;

        this.sprite = game.add.sprite(this.x, this.y, Prey.PreySpriteKey);
    }

    nextPosition() {
    }
} 
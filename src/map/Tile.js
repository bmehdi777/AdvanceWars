import * as PIXI from "pixi.js";

class Tile {
    constructor(app, position, pathSprite) {
        this.sprite = PIXI.Sprite.from(pathSprite);
        this.sprite.anchor(0);
        this.sprite.x = position.x;
        this.sprite.y = position.y;
        app.addChild(this.sprite);
    }

    static get tileSize() {
        return 32;
    }

    get position() {
        return this.sprite.getGlobalPosition();
    }
    get xPosition() {
        return this.sprite.x;
    }
    get xPosition() {
        return this.sprite.x;
    }
}

export default Tile;

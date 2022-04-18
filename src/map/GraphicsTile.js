import * as PIXI from "pixi.js";
import Tile from "./Tile";

class GraphicsTile {
    constructor(app, position, color, selector) {
        this.selector = selector;
        this.position = position;
        this.graphics = new PIXI.Graphics();
        this.graphics.lineStyle(2, 0xfeeb77, 1);
        this.graphics.beginFill(color);
        this.graphics.drawRect(position.x, position.y, Tile.tileSize, Tile.tileSize);
        this.graphics.endFill();

        this.graphics.interactive = true;
        this.graphics.buttonMode = true;
        this.graphics.zIndex = 0;

        this.graphics.on("pointerover", () => this.mouseOver(this.selector));
        this.graphics.on("pointerout", () => this.mouseOut(this.selector));

        app.addChild(this.graphics);
    }

    mouseOver(selector) {
        selector.isVisible = true;
        selector.position = this.position;
    }
    mouseOut(selector) {
        selector.isVisible = false;
    }
}

export default GraphicsTile;

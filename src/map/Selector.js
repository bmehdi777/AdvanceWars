import * as PIXI from "pixi.js";
import SelectionImage from "../../static/ui/selection.png";

class Selector {
    constructor(app, position) {
        this.sprite = PIXI.Sprite.from(SelectionImage);
        this.sprite.x = position.x;
        this.sprite.y = position.y;
        this.sprite.visible = false;
        this.sprite.zIndex = 100;
        app.addChild(this.sprite);
    }

    get position() {
        return this.sprite.position;
    }
    set position(position) {
        this.sprite.position = position;
    }

    get isVisible() {
        return this.sprite.visible;
    }
    set isVisible(visible) {
        this.sprite.visible = visible;
    }
}

export default Selector;

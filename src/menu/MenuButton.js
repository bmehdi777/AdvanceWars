import * as PIXI from "pixi.js";

class MenuButton {
    constructor(app, position, content, onclick, style) {
        this.text = new PIXI.Text(content);
        this.style =
            style ||
            new PIXI.TextStyle({
                fill: 0x00000,
                fontSize: 24,
                fontFamily: "Roboto",
                fontStyle: "Bold",
                stroke: 0xffffff,
            });
        this.text.interactive = true;
        this.text.buttonMode = true;
        this.text.anchor.set(0.5);
        this.text.x = position.x;
        this.text.y = position.y;
        this.text.on("click", onclick);

        this.text.on("mouseover", () => {
            this.text.style.fill = 0x00fff;
        });
        this.text.on("mouseout", () => {
            this.text.style.fill = 0x00000;
        });

        app.addChild(this.text);
    }
}

export default MenuButton;

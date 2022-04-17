import * as PIXI from "pixi.js";

const app = new PIXI.Application({
    width: 720,
    height: 1280,
    backgroundColor: 0x1099bb,
});

document.querySelector("#game").appendChild(app.view);
// Update function
app.ticker.add((delta) => {});

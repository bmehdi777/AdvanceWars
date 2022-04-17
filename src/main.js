import * as PIXI from "pixi.js";

const app = new PIXI.Application({
    width: 720,
    height: 1280,
    backgroundColor: 0x1099bb,
    view: document.querySelector("#game"),
});

// Update function
app.ticker.add((delta) => {});

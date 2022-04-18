import "./style.css";
import * as PIXI from "pixi.js";
import Helper from "./utils/Helper";
import MainMenu from "./menu/MainMenu";
import Grid from "./map/Grid";

const helper = new Helper();
const { width, height } = helper.getSizeScreen();

const app = new PIXI.Application({
    width: width,
    height: height,
    resizeTo: window,
    backgroundColor: 0x1099bb,
    sortableChildren: true,
});

const grid = new Grid(app.stage, { x: 50, y: 50 }, { width: 10, height: 10 });
document.querySelector("#game").appendChild(app.view);
// Update function
app.ticker.add((delta) => {});

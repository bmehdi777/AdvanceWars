import * as PIXI from "pixi.js";
import Tile from "./Tile";
import GraphicsTile from "./GraphicsTile";
import Selector from "./Selector";
import TileMap from "../../static/maps/01.json";
/**
 * size: {width, height}
 */
class Grid {
    constructor(app, position, size) {
        this.map = new PIXI.Container();
        this.map.sortableChildren = true;
        this.drawableMap = [];
        this.selector = new Selector(this.map, position);
        this.createMap(this.map, position, TileMap.map);
        //this.createGrid(this.map, position, size);
        app.addChild(this.map);
    }

    createGrid(container, position, size) {
        for (let i = 0; i < size?.width; i++) {
            this.drawableMap.push([]);
            for (let j = 0; j < size?.height; j++) {
                this.drawableMap[i].push(
                    new GraphicsTile(container, { x: position.x + Tile.tileSize * i, y: position.y + Tile.tileSize * j }, 0x650a5a, this.selector)
                );
            }
        }
    }

    createMap(container, position, map) {
        for (let i = 0; i < map.length; i++) {
            this.drawableMap.push([]);
            for (let j = 0; j < map[i].length; j++) {
                this.drawableMap[i].push(
                    new GraphicsTile(
                        container,
                        { x: position.x + Tile.tileSize * i, y: position.y + Tile.tileSize * j },
                        this.displayTileMap(map[i][j]),
                        this.selector
                    )
                );
            }
        }
    }

    displayTileMap(tileCode) {
        switch (tileCode) {
            case 0:
                return 0xfffff;
            case 1:
                return 0x650a5a;
            case 2:
                return 0x00ff00;
        }
    }
}

export default Grid;

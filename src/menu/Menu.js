import MenuButton from "./MenuButton";

/**
 * Buttons structure must be :
 * [
 *  {
 *   content: "text to display",
 *   cta: (event)=> {}
 *  },
 * ]
 */

class Menu {
    constructor(app, position, buttons) {
        this.buttons = [];
        buttons.forEach((button, index) => {
            this.buttons.push(new MenuButton(app, { x: position.x, y: position.y + 30 * index }, button.content, button.cta));
        });
    }
}

export default Menu;

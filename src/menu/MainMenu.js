import Menu from "./Menu";

class MainMenu extends Menu {
    constructor(app, width, height) {
        const buttons = [
            {
                content: "Create a game",
                cta: (event) => {
                    console.log(event);
                },
            },
            {
                content: "Join a game",
                cta: (event) => {
                    console.log(event);
                },
            },
            {
                content: "Options",
                cta: (event) => {
                    console.log(event);
                },
            },
        ];
        const textSize = 24;
        const spaceBetweenText = 30;
        const centeredMenu = height / 2 - (textSize * 3 + spaceBetweenText * 2) / 2;
        super(app, { x: width / 2, y: centeredMenu }, buttons);
    }
}

export default MainMenu;

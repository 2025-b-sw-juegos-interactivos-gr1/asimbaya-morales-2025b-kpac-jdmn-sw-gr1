import { Engine } from "@babylonjs/core";

import { Game } from "./game/Game";
import "./style.css";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;

const engine = new Engine(canvas, true);

window.addEventListener("resize", () => {
    engine.resize();
});

new Game(canvas).start();
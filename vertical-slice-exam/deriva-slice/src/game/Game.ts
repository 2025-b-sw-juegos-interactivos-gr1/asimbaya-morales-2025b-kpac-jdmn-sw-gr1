import {
    Engine, Scene, Color4, HemisphericLight, Vector3
} from "@babylonjs/core";
import { EventBus } from "./EventBus";
import { WorldFactory } from "../world/WorldFactory";
import { ObjectiveSystem } from "../systems/ObjectiveSystem";
import { PlayerController } from "../player/PlayerController";
import { Interactor } from "../player/Interactor";
import { HUD } from "../ui/HUD";
import { AudioManager } from "../audio/AudioManager";
import { DroneAI } from "../ai/DroneAI";

export class Game {
    private engine: Engine;
    private scene: Scene;
    private canvas: HTMLCanvasElement;

    private bus = new EventBus();
    private objectives!: ObjectiveSystem;
    private hud!: HUD;
    private audio!: AudioManager;

    private player!: PlayerController;
    private interactor!: Interactor;
    private drone!: DroneAI;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.engine = new Engine(canvas, true);
        this.scene = new Scene(this.engine);
        this.scene.clearColor = new Color4(0.02, 0.02, 0.03, 1);
    }

    start() {
        // Luz base
        const light = new HemisphericLight("hemi", new Vector3(0, 1, 0), this.scene);
        light.intensity = 0.8;

        // Sistemas base
        this.audio = new AudioManager();
        this.objectives = new ObjectiveSystem(this.bus);
        this.hud = new HUD(this.scene, this.bus);

        // Mundo
        const world = new WorldFactory(this.scene, this.bus);
        const { terminal, exitDoor, droneMesh, patrolPoints } = world.createSliceWorld();

        // Player
        this.player = new PlayerController(this.scene, this.canvas);
        this.interactor = new Interactor(this.scene, this.player.camera, this.bus);

        // IA Dron
        this.drone = new DroneAI(this.scene, this.bus, droneMesh, patrolPoints, this.player.camera);

        // Hook events para feedback mínimo
        this.bus.on("TERMINAL_ACTIVATED", () => this.audio.beep(880, 0.07));
        this.bus.on("SLICE_COMPLETED", () => this.audio.beep(523, 0.12));

        // Game loop
        this.scene.onBeforeRenderObservable.add(() => {
            const dt = this.scene.getEngine().getDeltaTime() / 1000;
            this.objectives.update(dt);
            this.drone.update(dt);
            this.interactor.update(dt);
            exitDoor.update(dt, this.player.camera.position);
            terminal.update(dt);
        });

        // Render
        this.engine.runRenderLoop(() => this.scene.render());
        window.addEventListener("resize", () => this.engine.resize());
    }
}

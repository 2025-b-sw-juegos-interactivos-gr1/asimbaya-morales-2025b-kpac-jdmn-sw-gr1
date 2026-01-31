import {
    Scene, UniversalCamera, Vector3
} from "@babylonjs/core";

export class PlayerController {
    public camera: UniversalCamera;
    private scene: Scene;
    private canvas: HTMLCanvasElement;

    constructor(scene: Scene, canvas: HTMLCanvasElement) {
        this.scene = scene;
        this.canvas = canvas;
        this.scene.collisionsEnabled = true;

        this.camera = new UniversalCamera("fpsCam", new Vector3(-14, 1.6, 0), this.scene);
        this.camera.attachControl(this.canvas, true);

        // WASD
        this.camera.keysUp.push(87);
        this.camera.keysDown.push(83);
        this.camera.keysLeft.push(65);
        this.camera.keysRight.push(68);

        // Colisiones + gravedad
        this.camera.checkCollisions = true;
        this.camera.applyGravity = true;
        this.camera.ellipsoid = new Vector3(0.35, 0.9, 0.35);

        // Ajustes “feel”
        this.camera.speed = 0.22;
        this.camera.angularSensibility = 5000;
    }
}

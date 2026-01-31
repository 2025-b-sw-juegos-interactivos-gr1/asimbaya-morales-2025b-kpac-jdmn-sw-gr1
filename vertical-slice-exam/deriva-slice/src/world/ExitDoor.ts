import { Scene, Mesh, StandardMaterial, Color3, Vector3 } from "@babylonjs/core";
import { EventBus } from "../game/EventBus";

export class ExitDoor {
    private mat: StandardMaterial;
    private unlocked = false;
    private completed = false;
    private scene: Scene;
    private bus: EventBus;
    private mesh: Mesh

    constructor(scene: Scene, bus: EventBus, mesh: Mesh) {
        this.scene = scene;
        this.bus = bus;
        this.mesh = mesh;
        this.mat = new StandardMaterial("dMat", this.scene);
        this.mat.diffuseColor = new Color3(0.35, 0.15, 0.15); // locked
        this.mesh.material = this.mat;

        this.bus.on("TERMINAL_ACTIVATED", () => {
            this.unlocked = true;
            this.mat.diffuseColor = new Color3(0.15, 0.35, 0.15); // unlocked
            this.bus.emit("OBJECTIVE_SET", { text: "Escapar por la compuerta" });
        });
    }

    update(_dt: number, playerPos: Vector3) {
        if (!this.unlocked || this.completed) return;
        const dist = Vector3.Distance(playerPos, this.mesh.position);
        if (dist < 2.2) {
            this.completed = true;
            this.bus.emit("SLICE_COMPLETED");
        }
    }
}

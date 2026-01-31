import { Scene, Mesh, StandardMaterial, Color3 } from "@babylonjs/core";
import { EventBus } from "../game/EventBus";
import type { IInteractable } from "../player/IInteractable";

export class Terminal implements IInteractable {
    private mat: StandardMaterial;
    private activated = false;
    private scene: Scene;
    private bus: EventBus;
    private mesh: Mesh;

    constructor(scene: Scene, bus: EventBus, mesh: Mesh) {
        this.scene = scene;
        this.bus = bus;
        this.mesh = mesh;
        this.mat = new StandardMaterial("tMat", this.scene);
        this.mat.diffuseColor = new Color3(0.1, 0.6, 0.9);
        this.mesh.material = this.mat;

        // Marca interactuable
        (this.mesh as any).metadata = { interactable: this };
    }

    getPrompt() {
        return this.activated ? "" : "[E] Activar terminal";
    }

    interact() {
        if (this.activated) return;
        this.activated = true;
        this.mat.diffuseColor = new Color3(0.2, 0.9, 0.3);
        this.bus.emit("TERMINAL_ACTIVATED");
    }

    update(_dt: number) {
        // Aquí podrías parpadear luz cuando está inactivo
    }
}

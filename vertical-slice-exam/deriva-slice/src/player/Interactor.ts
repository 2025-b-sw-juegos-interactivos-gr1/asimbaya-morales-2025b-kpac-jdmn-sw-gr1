import { Scene, Camera, Ray, Vector3, Mesh } from "@babylonjs/core";
import { EventBus } from "../game/EventBus";
import type { IInteractable } from "./IInteractable";

export class Interactor {
    private current: IInteractable | null = null;
    private scene: Scene;
    private camera: Camera;
    private bus: EventBus

    constructor(scene: Scene, camera: Camera, bus: EventBus) {
        this.scene = scene;
        this.camera = camera;
        this.bus = bus;
        window.addEventListener("keydown", (e) => {
            if (e.key.toLowerCase() === "e" && this.current) {
                this.current.interact();
            }
        });
    }

    update(_dt: number) {
        const origin = this.camera.position;
        const forward = this.camera.getForwardRay().direction;
        const ray = new Ray(origin, forward, 2.5);

        const hit = this.scene.pickWithRay(ray, (m) => (m as Mesh).isPickable !== false);

        const prev = this.current;
        this.current = null;

        if (hit?.hit && hit.pickedMesh) {
            const meta = (hit.pickedMesh as any).metadata;
            if (meta?.interactable) this.current = meta.interactable as IInteractable;
        }

        if (this.current !== prev) {
            this.bus.emit("PROMPT_CHANGED", { text: this.current?.getPrompt() ?? "" });
        }
    }
}

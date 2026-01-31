import { Scene, Mesh, Vector3, Ray } from "@babylonjs/core";

export class DronePerception {
    private scene: Scene;
    private drone: Mesh

    constructor(scene: Scene, drone: Mesh) {
        this.scene = scene;
        this.drone = drone;
    }

    canSee(targetPos: Vector3, maxDist = 9): boolean {
        const dist = Vector3.Distance(this.drone.position, targetPos);
        if (dist > maxDist) return false;

        const dir = targetPos.subtract(this.drone.position).normalize();
        const ray = new Ray(this.drone.position, dir, dist);

        const hit = this.scene.pickWithRay(ray, (m) => m !== this.drone);
        // Si golpea algo antes de llegar al player, no lo ve
        return !!hit && hit.hit && hit.pickedPoint ? Vector3.Distance(hit.pickedPoint, targetPos) < 0.6 : true;
    }
}

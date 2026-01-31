import { Scene, Mesh, Vector3, Camera, StandardMaterial, Color3 } from "@babylonjs/core";
import { EventBus } from "../game/EventBus";
import { DronePerception } from "./DronePerception";
import type { DroneState } from "./DroneState";

export class DroneAI {
    private state: DroneState = "PATROL";
    private perception: DronePerception;
    private targetPointIndex = 0;

    private investigateTimer = 0;
    private searchTimer = 0;
    private lastSeenPos = new Vector3(0, 0, 0);

    private mat: StandardMaterial;

    private scene: Scene;
    private bus: EventBus;
    private drone: Mesh;
    private patrolPoints: Vector3[];
    private playerCam: Camera;

    constructor(
        scene: Scene,
        bus: EventBus,
        drone: Mesh,
        patrolPoints: Vector3[],
        playerCam: Camera
    ) {
        this.scene = scene;
        this.bus = bus;
        this.drone = drone;
        this.patrolPoints = patrolPoints;
        this.playerCam = playerCam;

        this.perception = new DronePerception(this.scene, drone);
        this.mat = new StandardMaterial("droneMat", this.scene);
        this.mat.diffuseColor = new Color3(0.2, 0.8, 0.3);
        this.drone.material = this.mat;

        this.emitState();
    }

    update(dt: number) {
        const playerPos = this.playerCam.position;

        const sees = this.perception.canSee(playerPos, 10);

        // Transiciones por percepción
        if (sees) {
            this.lastSeenPos.copyFrom(playerPos);
            if (this.state !== "CHASE") this.setState("CHASE");
        } else {
            if (this.state === "CHASE") this.setState("SEARCH");
        }

        // Comportamiento por estado
        switch (this.state) {
            case "PATROL":
                this.moveTowards(this.patrolPoints[this.targetPointIndex], dt, 2.2);
                if (Vector3.Distance(this.drone.position, this.patrolPoints[this.targetPointIndex]) < 0.6) {
                    this.targetPointIndex = (this.targetPointIndex + 1) % this.patrolPoints.length;
                }
                break;

            case "CHASE":
                this.moveTowards(playerPos, dt, 3.2);
                // Telegráfico: color más “urgente”
                break;

            case "SEARCH":
                this.searchTimer += dt;
                this.moveTowards(this.lastSeenPos, dt, 2.4);
                if (this.searchTimer > 3.5) {
                    this.searchTimer = 0;
                    this.setState("INVESTIGATE");
                }
                break;

            case "INVESTIGATE":
                this.investigateTimer += dt;
                // Investiga cerca del último punto (pequeña órbita)
                const offset = new Vector3(Math.sin(this.investigateTimer * 2) * 1.2, 0, Math.cos(this.investigateTimer * 2) * 1.2);
                const point = this.lastSeenPos.add(offset);
                this.moveTowards(point, dt, 2.0);

                if (this.investigateTimer > 2.5) {
                    this.investigateTimer = 0;
                    this.setState("PATROL");
                }
                break;
        }
    }

    private setState(s: DroneState) {
        this.state = s;
        // Telegraphing visual simple
        if (s === "PATROL") this.mat.diffuseColor = new Color3(0.2, 0.8, 0.3);
        if (s === "INVESTIGATE") this.mat.diffuseColor = new Color3(0.9, 0.75, 0.2);
        if (s === "CHASE") this.mat.diffuseColor = new Color3(0.9, 0.2, 0.2);
        if (s === "SEARCH") this.mat.diffuseColor = new Color3(0.5, 0.5, 0.9);

        this.emitState();
    }

    private emitState() {
        this.bus.emit("DRONE_STATE_CHANGED", { state: this.state });
    }

    private moveTowards(target: Vector3, dt: number, speed: number) {
        const dir = target.subtract(this.drone.position);
        const dist = dir.length();
        if (dist < 0.01) return;

        const step = dir.normalize().scale(speed * dt);
        this.drone.position.addInPlace(step);
    }
}

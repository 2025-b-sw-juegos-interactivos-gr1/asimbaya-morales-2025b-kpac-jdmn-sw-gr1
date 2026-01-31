import {
    Scene, MeshBuilder, Vector3, StandardMaterial, Color3, Mesh, Texture,
    Vector4
} from "@babylonjs/core";
import { EventBus } from "../game/EventBus";
import { Terminal } from "./Terminal";
import { ExitDoor } from "./ExitDoor";

export class WorldFactory {
    private scene: Scene;
    private bus: EventBus;

    constructor(scene: Scene, bus: EventBus) {
        this.scene = scene;
        this.bus = bus;
    }

    createSliceWorld() {
        // Ground
        const ground = MeshBuilder.CreateGround("ground", { width: 40, height: 12 }, this.scene);
        ground.checkCollisions = true;

        // Ground material con textura
        const gMat = new StandardMaterial("gMat", this.scene);

        const floorTex = new Texture("/textures/Floor_texture_ChatGPT.png", this.scene);
        // floorTex.uScale = 6;
        // floorTex.vScale = 6;
        floorTex.wrapU = Texture.WRAP_ADDRESSMODE;
        floorTex.wrapV = Texture.WRAP_ADDRESSMODE;

        // 🔑 clave: repetir textura según tamaño
        floorTex.uScale = 8;
        floorTex.vScale = 2.5;

        gMat.diffuseTexture = floorTex;
        // menos brillo plástico
        gMat.specularColor = new Color3(0.12, 0.12, 0.12);

        ground.material = gMat;

        // Wall material con textura (más simple)
        const wallMat = new StandardMaterial("wMat", this.scene);

        const wallTex = new Texture("/textures/Wall_texture_ChatGPT.png", this.scene);
        // wallTex.uScale = 4;
        // wallTex.vScale = 2;
        wallTex.wrapU = Texture.WRAP_ADDRESSMODE;
        wallTex.wrapV = Texture.WRAP_ADDRESSMODE;

        wallTex.uScale = 15;
        wallTex.vScale = 0.5;

        wallMat.diffuseTexture = wallTex;
        wallMat.specularColor = new Color3(0.08, 0.08, 0.08);

        // FACE UVs (ANTI-STRETCH)
        const faceUV: Vector4[] = [];
        faceUV[0] = new Vector4(0, 0, 1, 1); // front
        faceUV[1] = new Vector4(0, 0, 1, 1); // back
        faceUV[2] = new Vector4(0, 0, 1, 1); // right
        faceUV[3] = new Vector4(0, 0, 1, 1); // left
        faceUV[4] = new Vector4(0, 0, 1, 1); // top
        faceUV[5] = new Vector4(0, 0, 1, 1); // bottom

        // WALLS

        const leftWall = MeshBuilder.CreatePlane(
            "wallLeft",
            { width: 40, height: 4 },
            this.scene
        );
        leftWall.position = new Vector3(0, 2, -6);
        leftWall.rotation.y = Math.PI;
        leftWall.checkCollisions = true;
        leftWall.material = wallMat;


        const rightWall = MeshBuilder.CreatePlane(
            "wallRight",
            { width: 40, height: 4 },
            this.scene
        );
        rightWall.position = new Vector3(0, 2, 6);
        rightWall.checkCollisions = true;
        rightWall.material = wallMat;

        const backWallMat = wallMat.clone("backWallMat") as StandardMaterial;
        const backTex = wallTex.clone();

        // escala correcta para 12m x 4m
        backTex.uScale = 7.5;
        backTex.vScale = 0.5;

        backWallMat.diffuseTexture = backTex;

        const backWall = MeshBuilder.CreatePlane(
            "wallBack",
            { width: 12, height: 4 },
            this.scene
        );
        backWall.position = new Vector3(-18, 2, 0);
        backWall.rotation.y = -Math.PI / 2;
        backWall.checkCollisions = true;
        backWall.material = backWallMat;

        // const gMat = new StandardMaterial("gMat", this.scene);
        // gMat.diffuseColor = new Color3(0.08, 0.08, 0.09);
        // ground.material = gMat;

        // // Walls (simple pasillo)
        // const wallMat = new StandardMaterial("wMat", this.scene);
        // wallMat.diffuseColor = new Color3(0.12, 0.12, 0.14);

        // const left = MeshBuilder.CreateBox("wallL", { width: 40, height: 4, depth: 0.5 }, this.scene);
        // left.position = new Vector3(0, 2, -6);
        // left.checkCollisions = true;
        // // left.material = wallMat;

        // const right = MeshBuilder.CreateBox("wallR", { width: 40, height: 4, depth: 0.5 }, this.scene);
        // right.position = new Vector3(0, 2, 6);
        // right.checkCollisions = true;
        // // right.material = wallMat;

        // const back = MeshBuilder.CreateBox("wallBack", { width: 0.5, height: 4, depth: 12 }, this.scene);
        // back.position = new Vector3(-18, 2, 0);
        // back.checkCollisions = true;
        // // back.material = wallMat;

        // // aplica a las paredes
        // left.material = wallMat;
        // right.material = wallMat;
        // back.material = wallMat;

        // Terminal
        const terminalMesh = MeshBuilder.CreateBox("terminal", { width: 1.2, height: 1.2, depth: 0.6 }, this.scene);
        terminalMesh.position = new Vector3(6, 0.6, -3.5);

        const terminal = new Terminal(this.scene, this.bus, terminalMesh);

        // Exit Door
        const doorMesh = MeshBuilder.CreateBox("exitDoor", { width: 2, height: 3, depth: 0.4 }, this.scene);
        doorMesh.position = new Vector3(16, 1.5, 0);

        const exitDoor = new ExitDoor(this.scene, this.bus, doorMesh);

        // Drone (mesh simple)
        const droneMesh = MeshBuilder.CreateSphere("drone", { diameter: 0.8 }, this.scene);
        droneMesh.position = new Vector3(-10, 1.2, 0);

        // Patrol points
        const patrolPoints = [
            new Vector3(-10, 1.2, 0),
            new Vector3(-2, 1.2, 3),
            new Vector3(4, 1.2, -2),
            new Vector3(-6, 1.2, -3),
        ];

        return { terminal, exitDoor, droneMesh, patrolPoints };
    }
}

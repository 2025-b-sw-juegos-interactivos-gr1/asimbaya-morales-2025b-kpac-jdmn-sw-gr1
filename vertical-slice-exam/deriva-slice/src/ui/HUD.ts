import { Scene } from "@babylonjs/core";
import { AdvancedDynamicTexture, TextBlock, Rectangle } from "@babylonjs/gui";
import { EventBus } from "../game/EventBus";

export class HUD {
    private ui: AdvancedDynamicTexture;
    private objectiveText: TextBlock;
    private droneText: TextBlock;
    private promptText: TextBlock;
    private endText: TextBlock;

    constructor(scene: Scene, bus: EventBus) {
        this.ui = AdvancedDynamicTexture.CreateFullscreenUI("UI", true, scene);

        const top = new Rectangle();
        top.height = "80px";
        top.width = "100%";
        top.thickness = 0;
        top.verticalAlignment = 0;
        this.ui.addControl(top);

        this.objectiveText = new TextBlock();
        this.objectiveText.text = "OBJ: ...";
        this.objectiveText.color = "white";
        this.objectiveText.fontSize = 22;
        this.objectiveText.textHorizontalAlignment = 0;
        this.objectiveText.paddingLeft = "18px";
        top.addControl(this.objectiveText);

        const bottom = new Rectangle();
        bottom.height = "80px";
        bottom.width = "100%";
        bottom.thickness = 0;
        bottom.verticalAlignment = 2;
        this.ui.addControl(bottom);

        this.droneText = new TextBlock();
        this.droneText.text = "DRON: PATROL";
        this.droneText.color = "white";
        this.droneText.fontSize = 18;
        this.droneText.textHorizontalAlignment = 0;
        this.droneText.paddingLeft = "18px";
        bottom.addControl(this.droneText);

        this.promptText = new TextBlock();
        this.promptText.text = "";
        this.promptText.color = "white";
        this.promptText.fontSize = 18;
        this.promptText.textHorizontalAlignment = 2;
        this.promptText.paddingRight = "18px";
        bottom.addControl(this.promptText);

        this.endText = new TextBlock();
        this.endText.text = "";
        this.endText.color = "white";
        this.endText.fontSize = 44;
        this.endText.top = "-20px";
        this.endText.textHorizontalAlignment = 1;
        this.endText.textVerticalAlignment = 1;
        this.ui.addControl(this.endText);

        bus.on("OBJECTIVE_SET", (p: any) => (this.objectiveText.text = `OBJ: ${p.text}`));
        bus.on("PROMPT_CHANGED", (p: any) => (this.promptText.text = p.text ?? ""));
        bus.on("DRONE_STATE_CHANGED", (p: any) => (this.droneText.text = `DRON: ${p.state}`));
        bus.on("SLICE_COMPLETED", () => (this.endText.text = "SLICE COMPLETADO ✅"));
    }
}

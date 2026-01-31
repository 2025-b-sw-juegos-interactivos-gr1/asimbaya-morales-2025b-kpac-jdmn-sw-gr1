import { EventBus } from "../game/EventBus";

export class ObjectiveSystem {
    private objective = "Activar el terminal";
    private bus: EventBus

    constructor(bus: EventBus) {
        this.bus = bus;
        this.bus.emit("OBJECTIVE_SET", { text: this.objective });

        this.bus.on("TERMINAL_ACTIVATED", () => {
            this.objective = "Escapar por la compuerta";
            this.bus.emit("OBJECTIVE_SET", { text: this.objective });
        });
    }

    update(_dt: number) { }
}

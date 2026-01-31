type Handler<T = any> = (payload?: T) => void;

export class EventBus {
    private handlers = new Map<string, Handler[]>();

    on<T>(event: string, handler: Handler<T>) {
        const list = this.handlers.get(event) ?? [];
        list.push(handler as Handler);
        this.handlers.set(event, list);
    }

    emit<T>(event: string, payload?: T) {
        const list = this.handlers.get(event) ?? [];
        for (const h of list) h(payload);
    }
}

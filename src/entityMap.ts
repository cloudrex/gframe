import Entity from "./entity";
import {ShortId} from "./helpers";

export default class EntityMap {
    protected readonly entities: Map<ShortId, Entity>;

    public constructor() {
        this.entities = new Map();
    }

    public get<T extends Entity = Entity>(id: ShortId): T | undefined {
        return this.entities.get(id) as T;
    }

    public has(id: ShortId): boolean {
        return this.entities.has(id);
    }

    public remove(id: ShortId): boolean {
        return this.entities.delete(id);
    }

    public set(entity: Entity): void {
        this.entities.set(entity.id, entity);
    }

    public add(entity: Entity): boolean {
        if (!this.has(entity.id)) {
            this.set(entity);

            return true;
        }

        return false;
    }
}

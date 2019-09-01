import Entity from "./entity";
import {Id} from "./helpers";

export default class EntityMap {
    protected readonly entities: Map<Id, Entity>;

    public constructor() {
        this.entities = new Map();
    }

    public get<T extends Entity = Entity>(id: Id): T | undefined {
        return this.entities.get(id) as T;
    }

    public has(id: Id): boolean {
        return this.entities.has(id);
    }

    public remove(id: Id): boolean {
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

import Layer from "./layer";
import Entity from "./entity";
import EntityMap from "./entityMap";

export default class World {
    public readonly canvasEl: HTMLCanvasElement;

    public readonly layers: Map<number, Layer>;

    public constructor(canvasEl: HTMLCanvasElement) {
        this.canvasEl = canvasEl;
        this.layers = new Map();
    }

    public addEntity(entity: Entity, layer: number = Layer.default): boolean {
        if (this.layers.has(layer)) {
            const entities: EntityMap = this.layers.get(layer)!.entities;

            return entities.add(entity);
        }

        return false;
    }
}

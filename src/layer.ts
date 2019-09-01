import EntityMap from "./entityMap";

export default class Layer {
    public static default: number = 0;

    public readonly index: number;

    public entities: EntityMap;

    public constructor(index: number = Layer.default) {
        this.index = index;
        this.entities = new EntityMap();
    }
}

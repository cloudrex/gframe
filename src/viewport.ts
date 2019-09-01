import Vector from "./vector";

export default class Viewport {
    protected _size: Vector;

    protected readonly _position: Vector;

    public constructor(size: Vector) {
        this._size = size;
        this._position = Vector.origin;
    }

    public get size(): Vector {
        return this._size;
    }

    public get position(): Vector {
        return this._position;
    }

    public resize(size: Vector): void {
        this._size = size;
    }
}

import Vector from "./vector";
import {Id} from "./helpers";
import shortid from "shortid";

export default class Entity {
    protected _position: Vector;

    public readonly tags: Set<string>;

    public readonly id: Id;

    public constructor(position: Vector) {
        this._position = position;
        this.tags = new Set();
        this.id = shortid.generate();
    }

    public get position(): Vector {
        return this._position;
    }

    public setPosition(position: Vector): void {
        if (position === undefined || position === null) {
            throw new Error("Position cannot be null or undefined");
        }

        this._position = position;
    }

    public translate(delta: Vector): void {
        this.setPosition(this._position.translate(delta));
    }
}

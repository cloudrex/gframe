import Vector from "./vector";
import {ShortId} from "./helpers";
import shortid from "shortid";
import Component from "./component/component";

export default abstract class Entity {
    protected _position: Vector;

    public readonly tags: Set<string>;

    public readonly components: Set<Component>;

    public readonly id: ShortId;

    public constructor(position: Vector) {
        this._position = position;
        this.tags = new Set();
        this.components = new Set();
        this.id = shortid.generate();
    }

    public abstract draw(): void;

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

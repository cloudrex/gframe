export default class Vector {
    public static get origin(): Vector {
        return new Vector(0, 0);
    }

    public readonly x: number;

    public readonly y: number;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public get magnitude(): number {
        /**
         * Magnitude formula:
         * 
         * ||a|| = √( (a₁^2) + (a₂^2) )
         */
        return Math.sqrt((this.x ** 2) + (this.y ** 2));
    }

    public translate(distance: Vector): Vector {
        return new Vector(this.x + distance.x, this.y + distance.y);
    }

    public normalize(): Vector {
        const magnitude: number = this.magnitude;

        /**
         * Normalization formula:
         * 
         * V = v / ||v||
         */
        return new Vector(this.x / magnitude, this.y / magnitude);
    }

    public within(from: Vector, to: Vector): boolean {
        return this.x > from.x
            && this.y > from.y
            && this.x < to.x
            && this.y < to.y;
    }
}

export default class Game {
    public readonly canvasId: string;

    public readonly canvasEl: HTMLElement;

    public constructor(canvasId: string) {
        this.canvasId = canvasId;

        const canvasEl: HTMLElement | null = document.getElementById(this.canvasId);

        if (canvasEl === null) {
            throw new Error("Canvas element does not exist");
        }

        this.canvasEl = canvasEl;
    }
}

export type DrawCallback = (delta: number) => Promise<void>;

export interface ICanvasOptions {
    readonly canvasId: string;

    readonly fps?: number;
}

export default class Canvas {
    public static get defaultOptions(): Partial<ICanvasOptions> {
        return {
            fps: 60
        };
    }

    public readonly canvasEl: HTMLElement;

    protected readonly options: ICanvasOptions;

    protected running: boolean;

    public constructor(options: ICanvasOptions) {
        this.options = {
            ...Canvas.defaultOptions,
            ...options
        };

        this.running = false;

        const canvasEl: HTMLElement | null = document.getElementById(this.options.canvasId);

        if (canvasEl === null) {
            throw new Error("Canvas element does not exist");
        }

        this.canvasEl = canvasEl;
    }

    public start(callback: DrawCallback): void {
        let lastTime: number | null = null;
        let firstFrame: boolean = true;

        const broker = async (time: number) => {
            if (this.running) {
                if (firstFrame) {
                    firstFrame = false;
                }

                lastTime = time;

                if (firstFrame) {
                    await callback(0);
                }
                else {
                    await callback(time - lastTime);
                }

                window.requestAnimationFrame(broker);
            }
        };

        window.requestAnimationFrame(broker);
    }

    public stop(): void {
        this.running = false;
    }
}

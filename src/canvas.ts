export type DrawCallback = (delta: number) => Promise<void> | void;

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

    public start(callback?: DrawCallback): void {
        this.running = true;

        let lastTime: number | null = null;
        let firstFrame: boolean = true;

        const broker = async (time: number) => {
            // Return immediatly if the running status is not set.
            if (!this.running) {
                return;
            }

            if (firstFrame) {
                firstFrame = false;
            }

            if (callback !== undefined) {
                if (firstFrame) {
                    await callback(0);
                }
                else {
                    // TODO: Cleanup.
                    await callback(time - (lastTime || 0));
                    lastTime = time;
                }
            }

            window.requestAnimationFrame(broker);
        };

        window.requestAnimationFrame(broker);
    }

    public stop(): void {
        this.running = false;
    }
}

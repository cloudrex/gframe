import Canvas from "../canvas";

const canvas: Canvas = new Canvas({
    canvasId: "game",
    fps: 30
});

canvas.start((delta: number) => {
    console.log(delta);
});

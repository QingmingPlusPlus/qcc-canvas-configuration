class CanvasManager {
    ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    static fromCanvas(canvas: HTMLCanvasElement) {
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            throw new Error('CanvasRenderingContext2D not found');
        }
        return new CanvasManager(ctx);
    }
}

export {
    CanvasManager
}
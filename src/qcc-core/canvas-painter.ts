class CanvasPainter {
    constructor(private ctx: CanvasRenderingContext2D) {
    }
    public defaultLineConfig = {color: '#000000', width: 8, radius: 8};
    public drawLine(points: [number, number][], _config: { color?: string, width?: number, radius?: number } = {}) {
        const config = Object.assign(this.defaultLineConfig, _config);
        this.ctx.beginPath();

        this.ctx.strokeStyle = config.color;
        this.ctx.lineWidth = config.width;
    }



}

export {
    CanvasPainter
}
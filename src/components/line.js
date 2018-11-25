class Line {
    constructor(x1, y1, x2, y2, stroke, strokeWidth) {
        this._line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        this._line.setAttribute('x1', x1);
        this._line.setAttribute('y1', y1);
        this._line.setAttribute('x2', x2);
        this._line.setAttribute('y2', y2);
        this._line.style.stroke = stroke;
        this._line.style.strokeWidth = strokeWidth;
    }

    getLine() {
        return this._line;
    }
}

export default Line;
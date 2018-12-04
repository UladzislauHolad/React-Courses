class InputCanvas {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);

        const canvasRect = this.canvas.getBoundingClientRect();
        this.offsetX = canvasRect.left;
        this.offsetY = canvasRect.top;

        this.canvas.onmousedown = this.catchShape.bind(this);
        this.canvas.onmousemove = this.moveShape.bind(this);
        this.canvas.onmouseup = this.dropShape.bind(this);
    }

    redraw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height)
        this.shape.update();
    }

    addShape(shape) {
        this.shape = shape;
    }

    addImage(img) {
        this.img = img;
    }

    catchShape(e) {
        const mx = parseInt(e.clientX - this.offsetX);
        const my = parseInt(e.clientY - this.offsetY);

        if(this.shape.containsPoint(mx, my)) {
            this.draggingShape = this.shape;
        }

        this.startX = mx;
        this.startY = my;
    }

    moveShape(e) {
        if(this.draggingShape) {
            const mx = parseInt(e.clientX - this.offsetX);
            const my = parseInt(e.clientY - this.offsetY);
            const dx = mx - this.startX;
            const dy = my - this.startY;

            this.draggingShape.x += dx;
            this.draggingShape.y += dy;

            this.redraw();

            this.startX = mx;
            this.startY = my;
        }
    }

    dropShape() {
        this.draggingShape = undefined;
    }

    getImage() {
        const { x, y } = this.shape.getPosition();
        const size = this.shape.getSize();
        const image = this.context.getImageData(x, y, size, size);

        const tmpCanvas = document.createElement('canvas');
        
        tmpCanvas.setAttribute('width', size);
        tmpCanvas.setAttribute('height', size);

        const context = tmpCanvas.getContext('2d');
        context.putImageData(image, 0, 0);

        this.shape.cut(context, size/2, size/2);

        return tmpCanvas.toDataURL();
    }
}

export default InputCanvas;
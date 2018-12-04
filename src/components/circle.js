class Circle {
    configure(x, y, radius, context) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.context = context;
    }

    update() {
        this.draw();
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.context.stroke();  
    }

    containsPoint(x, y) {
        var dx = this.x - x;
        var dy = this.y - y;

        return (dx * dx + dy * dy < this.radius * this.radius);
    }

    cut(context, cx, cy) {
        context.globalCompositeOperation='destination-in';
        context.beginPath();
        context.arc(cx, cy, this.radius - 1, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    }

    getPosition() {
        const x = this.x - this.radius;
        const y = this.y - this.radius;

        return { x, y };
    }

    getSize() {
        return this.radius*2;
    }
}

export default Circle;
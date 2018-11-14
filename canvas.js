const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

var BB = canvas.getBoundingClientRect();
var offsetX = BB.left;
var offsetY = BB.top;

var startX;
var startY;
var draggingShape;

canvas.onmousedown = myDown;
canvas.onmouseup = myUp;
canvas.onmousemove = myMove;

function Square(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    this.update = function() {
        this.draw();
    }

    this.draw = function() {
        c.beginPath();
        c.rect(this.x, this.y, this.width, this.height);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }

    this.containsPoint = function (x, y) {
        return (x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height);
    }
}

function Circle(x, y, width, height, color) {
    this.x = x + width/2;
    this.y = y + width/2;
    this.radius = width/2;
    this.color = color;

    this.update = function () {
        this.draw();
    }

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }

    this.containsPoint = function (x, y) {
        var dx = this.x - x;
        var dy = this.y - y;

        return (dx * dx + dy * dy < this.radius * this.radius);
    }
}

let shapes = [];
function createCanvasElement(type, x, y, ...params) {
    x -= offsetX;
    y -= offsetY;
    if(type === 'square') {
        shapes.push(new Square(x , y, ...params));
    } else {
        shapes.push(new Circle(x, y, ...params));
    }

    animate();
}

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    shapes.forEach(shape => {
        shape.update();
    });
}

function myDown(e) {
    e.preventDefault();
    e.stopPropagation();

    var mx = parseInt(e.clientX - offsetX);
    var my = parseInt(e.clientY - offsetY);

    for (var i = shapes.length - 1; i >= 0 && !draggingShape; i--) {
        var s = shapes[i];
        if(shapes[i].containsPoint(mx, my)) {
            draggingShape = shapes[i];
            shapes.push(shapes[i]);
            shapes.splice(i, 1);
        }
    }

    startX = mx;
    startY = my;
}

function myMove(e) {
    if (draggingShape) {
        e.preventDefault();
        e.stopPropagation();

        var mx = parseInt(e.clientX - offsetX);
        var my = parseInt(e.clientY - offsetY);
        var dx = mx - startX;
        var dy = my - startY;

        draggingShape.x += dx;
        draggingShape.y += dy;

        animate();

        // reset the starting mouse position for the next mousemove
        startX = mx;
        startY = my;
    }
}

function myUp(e) {
    e.preventDefault();
    e.stopPropagation();

    draggingShape = undefined;
}

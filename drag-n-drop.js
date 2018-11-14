function allowDrop(e) {
    e.preventDefault();
}

function drop(e) {
    var shape = JSON.parse(e.dataTransfer.getData('ShapeData'));
    
    createCanvasElement(
        shape.type,
        e.clientX - shape.offsetX, 
        e.clientY - shape.offsetY,
        shape.width,
        shape.height,
        shape.color);

    e.preventDefault();
}

function drag(e) {
    var shape = new Object();

    shape.offsetX = e.offsetX;
    shape.offsetY = e.offsetY;
    shape.type = e.target.id;
    shape.width = e.target.clientWidth;
    shape.height = e.target.clientHeight;
    shape.color = e.target.style.backgroundColor;

    var shapeData = JSON.stringify(shape);
    e.dataTransfer.setData('ShapeData', shapeData);
}
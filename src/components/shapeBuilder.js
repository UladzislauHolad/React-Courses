function createCircle(cx, cy, options) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', options.radius);
    circle.setAttribute('fill', options.color);

    return circle;
}

function createLine(start, end, options) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', start.x);
    line.setAttribute('y1', start.y);
    line.setAttribute('x2', end.x);
    line.setAttribute('y2', end.y);
    line.style.stroke = options.stroke;
    line.style.strokeWidth = options.strokeWidth;

    return line;
}

function createCircles(points, options) {
    const circles = points.map(element => {
        const circle = createCircle(element.x, element.y, options);
        circle.addEventListener('mouseenter', options.onMouseEnter.bind(null, element.value));
        circle.addEventListener('mouseleave', options.onMouseLeave);

        return circle;
    });

    return circles;
}

function createLines(points, options) {
    let linesPoints = [];
    points.reduce((prev, cur) => {
        linesPoints.push({
            start: prev,
            end: cur
        });
        return cur;
    });

    const lines = linesPoints.map(x => {
        return createLine(x.start, x.end, options);
    })

    return lines;
}

function createText(x, y, innerText, options) {
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x);
    text.setAttribute('y', y);
    text.setAttribute('fill', options.color);
    text.appendChild(document.createTextNode(innerText));

    return text;
}

export {
    createCircle,
    createCircles,
    createLine,
    createLines,
    createText
};
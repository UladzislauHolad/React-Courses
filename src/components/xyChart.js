import { createCircles, createLines } from './shapeBuilder.js';

class XYChart {
    constructor(options) {
        const chartContainer = document.getElementById(options.containerId);
        this.options = options;
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('width', options.width);
        this.svg.setAttribute('height', options.height);
        chartContainer.appendChild(this.svg);

        this.drawLines(options.dataSource, options.line)
        this.drawPoints(options.dataSource, options.marker);
    }

    drawPoints(dataSource, options) {
        dataSource.then(points => {
            const circles = createCircles(points, options);
            this.addELementsToSvg(circles)
        })
    }
    
    drawLines(dataSource, options) {
        dataSource.then(points => {
            const lines = createLines(points, options);
            lines.forEach(line => {
                this.svg.appendChild(line);
            });
        });
    }

    addELementsToSvg(elements) {
        elements.forEach(element => {
            // element.setAttribute('transform', `translate(0, ${this.options.height - 2 * element.cy.baseVal.value})`);
            this.svg.appendChild(element);
        });
    }
}

export default XYChart;
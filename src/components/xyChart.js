import { createCircles, createLines, createLine, createText } from './shapeBuilder.js';

const labelWidth = 40;
const labelHeight = 30;
const xAxisHeight = 40;
const yAxisWidth = 40;
const titleHeight = 40;

class XYChart {
    constructor(options) {
        const chartContainer = document.getElementById(options.containerId);
        this.options = options;
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('width', options.width);
        this.svg.setAttribute('height', options.height);
        this.workWidth = options.width - yAxisWidth;
        this.workHeight = options.height - xAxisHeight - titleHeight;

        chartContainer.appendChild(this.svg);

        this.drawTitle();
        this.drawAxis(options.axis);
        this.createLabel();
        this.addEventHandlersForMarker(options.marker);
        this.drawData(options.dataSource);
    }

    drawTitle() {
        const xPosition = this.options.width / 2;
        const yPosition = titleHeight / 2;
        const options = {
            color: 'black'
        }

        const title = createText(xPosition, yPosition, this.options.title, options);
        title.setAttribute('text-anchor', 'middle');
        
        this.svg.appendChild(title);
    }

    drawData(dataSource) {
        dataSource.then(items => {
            const coordinates = this.getCoordinates(items);
            const circles = createCircles(coordinates, this.options.marker);
            const lines = createLines(coordinates, this.options.line);

            this.drawXAxisLabels(items);
            this.addELementsToSvg(lines);
            this.addELementsToSvg(circles);
        });
    }

    getCoordinates(items) {
        const itemsCount = items.length;
        const values = items.map(item => item.value);
        const maxValue = Math.max(...values);
        const min = 0;
        const max = Math.ceil(maxValue * 1.05);

        this.yRatio = (max - min) / this.workHeight;
        this.xRatio = this.workWidth / itemsCount;

        const coordinates = values.map((value, i) => {
            const y = this.workHeight - ((value - min) / this.yRatio) + titleHeight;
            const x = (this.xRatio * i + this.xRatio / 2) + yAxisWidth;
            return {
                x,
                y,
                value
            }
        });

        return coordinates;
    }

    drawXAxisLabels(items) {
        const startXPosition = yAxisWidth + this.xRatio/4;
        const yPosition = this.workHeight + xAxisHeight/2 + titleHeight;
        const options = {
            color: 'black'
        }

        const axisLabels = items.map((item, i) => {
            const xPosition = startXPosition + this.xRatio*i;
            const axisLabel = createText(
                xPosition,
                yPosition,
                item.label,
                options
            )

            return axisLabel;
        });

        this.addELementsToSvg(axisLabels);
    }

    drawAxis(options) {
        this.drawXAxis(options);
        this.drawYAxis(options);
    }

    drawYAxis(options) {
        const strokeWidthAddition = parseInt(options.strokeWidth) / 2;
        const yAxisStart = {
            x: yAxisWidth,
            y: this.options.height - xAxisHeight + strokeWidthAddition
        }
        const yAxisEnd = {
            x: yAxisStart.x,
            y: titleHeight
        }

        const yAxis = createLine(yAxisStart, yAxisEnd, options);
        this.svg.appendChild(yAxis);
    }

    drawXAxis(options) {
        const xAxisStart = {
            x: yAxisWidth,
            y: this.options.height - xAxisHeight
        }
        const xAxisEnd = {
            x: this.options.width,
            y: xAxisStart.y
        }

        const xAxis = createLine(xAxisStart, xAxisEnd, options);
        this.svg.appendChild(xAxis);
    }

    addELementsToSvg(elements) {
        elements.forEach(element => {
            this.svg.appendChild(element);
        });
    }

    createLabel() {
        this.label = document.createElement('div');
        this.label.setAttribute('id', 'label');
        this.label.style.width = labelWidth;
        this.label.style.height = labelHeight;
        this.label.hidden = true;
        document.body.appendChild(this.label);
    }

    onMouseEnterLabel(value, event) {
        this.label.innerHTML = '';
        this.label.style.top = `${event.clientY - labelHeight}px`;
        this.label.style.left = `${event.clientX - labelWidth / 2}px`;
        label.appendChild(document.createTextNode(`value:${value}`));
        this.label.hidden = false;
    }

    onMouseLeaveLabel() {
        this.label.hidden = true;
    }

    addEventHandlersForMarker(markerOptions) {
        markerOptions.onMouseEnter = this.onMouseEnterLabel.bind(this);
        markerOptions.onMouseLeave = this.onMouseLeaveLabel.bind(this);
    }
}

export default XYChart;
import XYChart from './components/xyChart.js';
import getData from './services/data.service.js';

(function() {
    const options = {
        containerId: 'container',
        height: 300,
        width: 400,
        dataSource: getData(),
        marker: {
            color: 'blue',
            radius: 4,
            callback: (e) => console.log(e.target),
            transform: (x,y) => `translate(0, ${300 - 2*y})`
        },
        line: {
            strokeWidth: 2,
            stroke: 'red',
            transform: (x,y) => `translate(0, ${300 - 2*y})`
        }
    }

    new XYChart(options);
})()
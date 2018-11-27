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
            radius: 4
        },
        line: {
            strokeWidth: 2,
            stroke: 'red'
        },
        axis: {
            stroke: 'black',
            strokeWidth: '3px'
        },
        title: 'Number of code strings per day'
    }

    new XYChart(options);
})()
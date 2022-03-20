import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({dataPoints}) => {
    const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValues);

    return (
        <div className="chart">
            {dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    dataPoint={dataPoint}
                    maxValue={totalMaximum}
                />))}
        </div>
    )
};

export default Chart;
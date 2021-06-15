import React from 'react';
// import '../../../node_modules/react-vis/dist/style.css';
// import { XYPlot, LineSeries, } from 'react-vis'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const NewsChart = () => {
    const options = {
        series: [{
          data: [1, 2, 3]
        }]
      }
       
    return (
        <>
           <HighchartsReact
            highcharts={Highcharts}
            options={options}
  />
        </>
    );
};

export default NewsChart;
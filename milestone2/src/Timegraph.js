import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/plots';

const Timegraph = () => {

    const [data, setData] = useState([]); //using useState to hook to store the data and render it on the DOM

    useEffect(() => {
      getData();
    }, []);
  
    const getData = () => {
      fetch("../Dataset/us_covid_data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (myJson) {
          console.log(myJson);
          setData(myJson);
        });
    };
 
  const config = {
    data: [data,data],
    xField: 'date', //Can modify to years with 12 months for data ?? 
    yField: ['total_case', 'total_deaths'],
    // limitInPlot: false,
    padding: [10, 20, 80, 30],
    // 需要设置底部 padding 值，同 css
    slider: {},
    meta: {
      time: {
        sync: true, // 开启之后 slider 无法重绘
      },
    },
    geometryOptions: [
      {
        geometry: 'column',
      },
      {
        geometry: 'line',
      },
    ],
  };
  return <DualAxes {...config} />;
};
export default Timegraph;

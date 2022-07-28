import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/plots';

const Timegraph = () => {

    const [data, setData] = useState([]); //using useState to hook to store the data and render it on the DOM

    useEffect(() => {
      getData();
    }, []);
  
    const getData = () => {
      fetch("./Dataset/timegraph_data.json", {
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
      data: [data, data],
      xField: 'time',
      yField: ['newCase', 'newDeath'],
      limitInPlot: false,
      padding: [10, 20, 80, 30],
 
      slider: {},
      meta: {
        time: {
          sync: false, 
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

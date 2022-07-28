import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Mix, G2 } from '@ant-design/plots';

const Total_case = () => {
    const [data, setData] = useState([]); //using useState to hook to store the data and render it on the DOM

    useEffect(() => {
      getData();
    }, []);
  
    const getData = () => {
      fetch("./Dataset/total_case.json", {
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
 

  G2.registerInteraction('custom-association-filter', {
    showEnable: [
      {
        trigger: 'element:mouseenter',
        action: 'cursor:pointer',
      },
      {
        trigger: 'element:mouseleave',
        action: 'cursor:default',
      },
    ],
    start: [
      {
        trigger: 'element:click',
        action: (context) => {
          const { view, event } = context; 
          const view1 = view.parent.views[1];
          view1.filter('area', (d) => d === event.data?.data.area);
          view1.render(true);
        },
      },
    ],
    end: [
      {
        trigger: 'element:dblclick',
        action: (context) => {
          const { view } = context; 

          const view1 = view.parent.views[1];
          view1.filter('area', null);
          view1.render(true);
        },
      },
    ],
  });
  if (!Object.keys(data).length) {
    return null;
  }
  const config = {
   
    tooltip: false,
    plots: [
      {
        type: 'pie',
        region: {
          start: {
            x: 0,
            y: 0,
          },
          end: {
            x: 1,
            y: 0.45,
          },
        },
        options: {
          data: data.pie,
          angleField: 'bill',
          colorField: 'area',
          tooltip: {
            showMarkers: false,
          },
          radius: 0.85,
          label: {
            type: 'inner',
            formatter: '{name}',
            offset: '-15%',
          },
          interactions: [
            {
              type: 'element-highlight',
            },
            {
              type: 'custom-association-filter',
            },
          ],
        },
      },
      {
        type: 'area',
        region: {
          start: {
            x: 0,
            y: 0.5,
          },
          end: {
            x: 1,
            y: 0.95,
          },
        },
        options: {
          data: data.line,
          xField: 'time',
          yField: 'value',
          seriesField: 'area',
          line: {},
          point: {
            style: {
              r: 2.5,
            },
          },
          meta: {
            time: {
              range: [0, 1],
            },
          },
          smooth: true,
          tooltip: {
            showCrosshairs: true,
            shared: true,
          },
        },
      },
    ],
  };


  return <Mix {...config} />;
};

export default Total_case;
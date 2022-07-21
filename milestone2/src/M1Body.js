import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { Space, Card } from "antd";
import ProLayout, { PageContainer } from "@ant-design/pro-layout";

import "./M1Body.css";


function M1Body() {
  const divStyle = {
    display: "flex",
    justifyContent: "spacee-around",
  };

  return (
    <>
      <PageContainer>
        <div
          style={{
            height: "120vh",
          }}
        >
          <div style={divStyle}>
            <Space direction="horizontal">
              <Card
                style={{ width: 100, height: 100, background: "black" }}
                //    cover={}
              ><img alt="example" src="images/vis-spiral.png" width={100}/>
              </Card>
              <Card
                style={{ width: 100, height: 100, background: "red" }}
              >
                  <li>
                    The spiral chart depicts the number of new Covid-19 cases from the year 2020 to year 2022.
                  </li>
                  <br/>
                  <li>
                    Designer incorporates all the months of the year, divided into quadrants on the spiral.
                  </li>
                  <br/>
                  <li>
                    The “black line” in the middle of the spiral is not a discriminator, but it draws the outline of the spiral chart vividly. (I.e., backbone)
                  </li>
                  <br/>
                  <li>
                    View from clockwise direction
                  </li>
              </Card>
            </Space>
          </div>
          <div className="site-card-border-less-wrapper">
            <Card
              title="What (Data) - 'What Data the User Sees'"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <ul style="padding-left: 1rem;">
                <li>
                  The legend of the chart shows the spike in the number of cases in denominations of 150K but it does not account for other lower denominations.
                </li>
                <br/>
                <li>
                  The 7-day average shown in the chart is ambiguous.
                </li>
                <br/>
                <li>
                  The month shown are in every quarter, if the user wants to see a specific month they are required to count the months.
                </li>
                <br/>
                <li>
                  There are no tooltips provided upon hovering over the visualisation.
                </li>
              </ul>
            </Card>
          </div>

          <div className="site-card-border-less-wrapper">
            <Card
              title=" Why (Task) - 'User Intent to Use Visualization Tools'"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <ul style="padding-left: 1rem;">
                <li>
                  The designer opted for a  Spiral Chart representation, which is effective for a time-series data for Covid-19 cases.
                  <ul>
                    <li>
                      Characteristics include: Trend; Seasonality (Day-to-Day, Period-to-Period)
                    </li>
                  </ul>  
                </li>
                <br/>
                <li>
                  Designer intended to take an artistic route in visualising the covid-19 cases without using a standard linear modelling diagram.
                </li>
                <br/>
                <li>
                  The months were split across 12 section, each indicating a month. Despite the spatial restrictions, the designer manage to segment parts of the visualisation to provide more information to the audience.
                </li>
              </ul>
            </Card>
          </div>
          
          <div className="site-card-border-less-wrapper">
            <Card
              title="  How (Idiom) - 'How the visualization idioms are constructed'"
              bordered={false}
              style={{
                width: 300,
              }}
            >
            <ul style="padding-left: 1rem;">
              <dl>
                Expressiveness
                <ul>
                  <li>
                    The visualisation uses a single colour to represent the entire data flow. 
                  </li>
                </ul>  
              </dl>
              <dl>
                Effectiveness
                <ul>
                  <li>
                    The accuracy of how many cases are there in a month is very vague as there is no clear indication of the quantitative data.
                  </li>
                  <li>
                    The visualisation uses month as a Separability principle, however it is still difficult on first glance to locate a specific month and year. 
                  </li>
                </ul>  
              </dl>
            </ul>
            </Card>
          </div>
          <div style={divStyle}>
            <Space direction="horizontal">
              <Card
                style={{ width: 100, height: 100, background: "black" }}
                //    cover={}
              ><img alt="example" src="images/vis1-sol.png" width={100}/>
              </Card>
              <Card
                style={{ width: 100, height: 100, background: "red" }}
              >
                <ol class="list">
                      <li class="item">
                          <h2 class="headline">Solution A</h2><span>Colours could be implemented to each period to break them up and provide better comparison between each period.</span>
                      </li>
                      <li class="item">
                          <h2 class="headline">Solution B</h2><span>Since the chart is read from the centre of the spiral, there should be a larger indicator of where a user should begin their initial gaze.</span>
                      </li>
                      <li class="item">
                          <h2 class="headline">Solution C</h2><span>The lack of interactivity makes it difficult to drill-down each period’s data points accurately, therefore concepts such as annotation, view manipulation should be implemented.</span>
                      </li>
                      <li class="item">
                        <h2 class="headline">Solution D</h2><span>The legend is vague and meaningless. Instead of an area distribution from the center, a bar chart from the origin allows the designer to do a legend with various heights to account for larger/smaller data points.</span>
                    </li>
                </ol>
              </Card>
            </Space>
          </div>
          
        </div>
      </PageContainer>
    </>
  );
}

export default M1Body;

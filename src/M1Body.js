import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { Space, Card } from "antd";
import ProLayout, { PageContainer } from "@ant-design/pro-layout";
import "./M1Body.css";
import vis2 from "./images/vis2.png";
import visspiral from "./images/vis-spiral.png";
import vis1sol from "./images/vis1-sol.png";
import vis2sol from "./images/vis2-sol.png"

function M1Body() {
  const divStyle = {
    display: "flex",
    justifyContent: "space-around",
  };

  return (
    <>
      <PageContainer>
        <div
          style={{
            height: "240vh",
          }}
        >
          <div style={divStyle}>
            <Space direction="horizontal">
              <Card
                style={{ width: 400, height: 400}}
                cover={<img alt="example" src={visspiral} />}
              >
              </Card>
              <Card style={{ width: 400, height: 400 }}>
                <li>
                  The spiral chart depicts the number of new Covid-19 cases from
                  the year 2020 to year 2022.
                </li>
                <br />
                <li>
                  Designer incorporates all the months of the year, divided into
                  quadrants on the spiral.
                </li>
                <br />
                <li>
                  The “black line” in the middle of the spiral is not a
                  discriminator, but it draws the outline of the spiral chart
                  vividly. (I.e., backbone)
                </li>
                <br />
                <li>View from clockwise direction</li>
              </Card>
            </Space>
          </div>

          <div style={divStyle}>
            <Space direction="vertical">  
                <Card
                  title="What (Data) - 'What Data the User Sees'"
                  style={{
                    width: 810,
                  }}
                  className="cardTitle"
                >
                    <li>
                      The legend of the chart shows the spike in the number of cases
                      in denominations of 150K but it does not account for other
                      lower denominations.
                    </li>
                    <br />
                    <li>The 7-day average shown in the chart is ambiguous.</li>
                    <br />
                    <li>
                      The month shown are in every quarter, if the user wants to see
                      a specific month they are required to count the months.
                    </li>
                    <br />
                    <li>
                      There are no tooltips provided upon hovering over the
                      visualisation.
                    </li>
                
                </Card>
                <Card 
                  title=" Why (Task) - 'User Intent to Use Visualization Tools'"
                  style={{width: 810,}}
                  className="cardTitle">
                    <li>The designer opted for a Spiral Chart representation, which is effective for a time-series data for Covid-19 cases.
                    <li>Characteristics include: Trend; Seasonality (Day-to-Day,Period-to-Period)</li>
                    </li>
                    <br />
                    <li>
                      Designer intended to take an artistic route in visualising the
                      covid-19 cases without using a standard linear modelling
                      diagram.
                    </li>
                    <br />
                    <li>
                      The months were split across 12 section, each indicating a
                      month. Despite the spatial restrictions, the designer manage
                      to segment parts of the visualisation to provide more
                      information to the audience.
                    </li>
                </Card>
                <Card
                  title="  How (Idiom) - 'How the visualization idioms are constructed'"
                  style={{width: 810,}} 
                  className="cardTitle">
                    <dl>
                      Expressiveness
                        <li>
                          The visualisation uses a single colour to represent the
                          entire data flow.
                        </li>
                    </dl>
                    <dl>
                      Effectiveness
                        <li>
                          The accuracy of how many cases are there in a month is
                          very vague as there is no clear indication of the
                          quantitative data.
                        </li>
                        <li>
                          The visualisation uses month as a Separability principle,
                          however it is still difficult on first glance to locate a
                          specific month and year.
                        </li>
                    </dl>
                </Card>
              <div style={divStyle}>
                <Space direction="horizontal">
                  <Card
                    style={{ width: 400, height: 900 }}
                    cover={<img src= {vis1sol}/>}
                  >
                  </Card>
                  <Card style={{ width: 400, height: 900, }}>
                    <ol className="list">
                      <li className="item">
                        <h2 className="headline">Solution A</h2>
                        <span>
                          Colours could be implemented to each period to break them
                          up and provide better comparison between each period.
                        </span>
                      </li>
                      <li className="item">
                        <h2 className="headline">Solution B</h2>
                        <span>
                          Since the chart is read from the centre of the spiral,
                          there should be a larger indicator of where a user should
                          begin their initial gaze.
                        </span>
                      </li>
                      <li className="item">
                        <h2 className="headline">Solution C</h2>
                        <span>
                          The lack of interactivity makes it difficult to drill-down
                          each period’s data points accurately, therefore concepts
                          such as annotation, view manipulation should be
                          implemented.
                        </span>
                      </li>
                      <li className="item">
                        <h2 className="headline">Solution D</h2>
                        <span>
                          The legend is vague and meaningless. Instead of an area
                          distribution from the center, a bar chart from the origin
                          allows the designer to do a legend with various heights to
                          account for larger/smaller data points.
                        </span>
                      </li>
                    </ol>
                  </Card>
                </Space>
              </div>
            </Space>
          </div>

          {/* start of visualisation #2 */}
          <h2 style={{textAlign: 'center',} }>Visualization 2: Internet Hacking Attack Attribution Map</h2>
          <div style={divStyle}>
            <Space direction="vertical">
            
            <div style={divStyle}>
              <Space direction="horizontal">
                <Card
                  style={{ width: 400, height: 400 }}
                  cover={<img alt="example" src={vis2} />}>
                </Card>
                <Card style={{ width: 400, height: 400 }}>
                <li>
                This Internet Hacking Attack Attribution tracks cyber attacks in real time, showing the location and IP address of the source and target of each attack. 
                </li>
                <br/>
                <li>
                  It also adds small bits of commentary to indicate the severity of the each attack:  Notes such as “We’ll just call it a glitch” indicate small or minor attacks, while things like “It’s cyber Pompeii!” indicate large or widespread attacks.
                </li>
                </Card>
              </Space>
            </div>
            <div className="site-card-border-less-wrapper">
                <Card
                  title="  What (Data) - 'What Data the User Sees'"
                  style={{width: 810,}}
                  className="cardTitle">
                  <li>
                  The arc line showing in the map only has a red colour, which does not break down the attacks by colour, e.g. red for critical attacks, orange for high severity, blue for medium.
                  </li>
                  <br/>
                  <li>
                  No “hover-over” details on the arc line.
                  </li>
                  <br/>
                  <li>
                  The white circle that allows interactivity for user to hover on and view the tooltip. However, the tooltip has a perceived affordance as it disappears at the slightest move of the cursor.
                  </li>
                  <br/>
                  <li>
                  Live attack details like the software is being used to attack with the source, and destination details was shown in a very unclear text format.
                  </li>
                  <br/>
                  <li>
                  Users may see the country name while hovering over it on the map but cannot select it to view more details or zoom in or out on the map.
                  </li>
                </Card>
            </div>
            <div className="site-card-border-less-wrapper">
              <Card
                title=" Why (Task) - 'User Intent to Use Visualization Tools'"
                style={{width: 810,}}
                className="cardTitle">
                <li>
                The designer wants to design a simple retro-style map. The map and the live feed colour and style look more like a "Command Prompt, " making it very cool and unique. 
                </li>
                <br/>
                <li>
                  The designer improve the the user engagement by displaying the severity level for each attack as remark such as "We'll just call it a glitch," indicating small or minor attacks. In contrast, things like "It's cyber Pompeii!" show significant or widespread attacks.
                </li>
              </Card>
            </div>
            <div className="site-card-border-less-wrapper">
              <Card
                title="  How (Idiom) - 'How the visualization idioms are constructed'"
                style={{width: 810,}}
                className="cardTitle">
                <dl>
                  Expressiveness
                  <ul>
                    <li>
                      The visualisation uses single color to represent the severity of attack from one country to another. 
                    </li>
                  </ul>  
                </dl>
                <dl>
                  Effectiveness
                  <ul>
                    <li>
                      The country name displayed in live attack details is in abbreviated form rather than the complete form.
                    </li>
                    <li>
                      Tooltips and annotation are present, showing encodings of a specific region of the map. However, the usability of the “hover” status is not consistent as it disappears occasionally.
                    </li>
                  </ul>  
                </dl>
              </Card>
            </div>
            <div style={divStyle}>
                <Space direction="horizontal">
                  <Card
                    style={{ width: 400, height: 400 }}
                    cover={<img alt="example" src={vis2sol}/>}
                  >
                  </Card>
                  <Card style={{ width: 400, height: 400 }}>
                  <li className="item">
                            <h2 className="headline">Solution A</h2><span>Different arc line colours indicate the severity level of the attacks.</span>
                        </li>
                        <li className="item">
                            <h2 className="headline">Solution B</h2><span>Live attacks details can be shown in a clear table format.</span>
                        </li>
                        <li className="item">
                            <h2 className="headline">Solution C</h2><span>Hovering over the arc line reveals information on the source and destination country.</span>
                        </li>
                        <li className="item">
                          <h2 className="headline">Solution D</h2><span>The map can be more interactive by allowing users to pick certain countries to see more attack details on the specific country.</span>
                      </li>
                  </Card>
                </Space>
            </div>
            </Space>
          </div>
        </div>
      </PageContainer>
    </>
  );
}

export default M1Body;

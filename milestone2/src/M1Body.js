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
                //    cover={<img alt="example" src="images/vis-spiral.png" width={100}/>}
              ></Card>

              <Card
                style={{ width: 100, height: 100, background: "red" }}
              ></Card>
            </Space>
          </div>
        </div>
      </PageContainer>
    </>
  );
}

export default M1Body;

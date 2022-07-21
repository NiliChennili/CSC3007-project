import React, { useState, useEffect } from "react";
import { Layout } from 'antd';
import ProLayout, { PageContainer } from "@ant-design/pro-layout";
import RcResizeObserver from "rc-resize-observer";
import { Space, Card } from "antd";
import Timegraph from './Timegraph';
import Total_case from './Total_case';
import "./Milestone2.css";



// const { Header, Footer, Sider, Content } = Layout;


function Milestone2() {

    const divStyle = {
        display: "flex",
        justifyContent: "space-around"
      };
  
  return (
    // <div className="fade-in">
    
     
    
     
    <>
      {/* <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      > */}
        <PageContainer>
          <div
            style={{
              height: "120vh",
            }}
          >
            <div style={divStyle}>
              <Space direction="vertical" colSpan="30%">
              
                <Card
                  headerBordered
                  hoverable
                  bordered
                  style={{ width: 300, height: 200, color:"white" ,background: "#191932" }}
                  title = "28-Day Cases"
                  
                >
                  
 
                  <p style={{ color: "red", textAlign: "center",fontSize:30}}>
                  191455
                  </p>
                </Card>


                <Card
                  headerBordered
                  hoverable
                  bordered
                  style={{ width: 300, height: 200,color:"white" ,background: "#191932" }}
                  title = "28-Day Death"
                >
                  
                 
                  <p style={{ color: "white", textAlign: "center", fontSize:30}}>
                 532
                  </p>
                </Card>

                <Card
                  headerBordered
                  hoverable
                  bordered
                  style={{ width: 300, height: 200,color:"white" ,background: "#191932"}}
                  title = "28-Day Vaccine Doses Administered"
                >
                  
                 
                  <p style={{ color: "green", textAlign: "center",fontSize:30}}>
                  191455
                  </p>
                </Card>

                
              </Space>

              <Space direction="vertical" colSpan="70%">
                <Card
                  headerBordered
                  hoverable
                  bordered
                  title="New Case vs New Death"
                  style={{ width: 860, height: 500 }}
                  className="detail-stack-graph"
                >
                  < Timegraph/>
                 
                </Card>

                <Card
                  headerBordered
                  hoverable
                  bordered
                  title="Total Case"
                  style={{ width: 860, height: 500 }}
                  className="detail-line-graph"
                >
                  <Total_case />
                </Card>

               
              </Space>
            </div>
          </div>
        </PageContainer>
      {/* </RcResizeObserver> */}
    </>
  );
}

export default Milestone2;
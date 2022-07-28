import React from "react";
import ProLayout, { PageContainer } from "@ant-design/pro-layout";
import RcResizeObserver from "rc-resize-observer";
import { Space, Card } from "antd";
import Timegraph from './Timegraph';
import Total_case from './Total_case';
import Total_death from "./Total_death";
import "./Milestone2.css";
import Hexbin from "./Hexbin";



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
              <Space direction="horizontal" colSpan="30%">
              
                <Card
                  headerBordered
                  hoverable
                  bordered
                  style={{ width: 350, height: 180, color:"white" ,background: "#74a9cf",opacity: 0.8 }}
                  title = "July 2022 Cases"
                  className="card-cases"
                
                >
                  
 
                  <p style={{ color: "#d73027", textAlign: "center",fontSize:30,fontWeight:"bolder"}}>
                  191455
                  </p>
                </Card>


                <Card
                  headerBordered
                  hoverable
                  bordered
                  style={{ width: 350, height: 180,color:"white" ,background: "#74a9cf",opacity: 0.8}}
                  title = "July 2022 Death"
                  className="card-death"
                  
                 
                >
                  
                 
                  <p style={{ color: "white", textAlign: "center", fontSize:30, fontWeight:"bolder"}}>
                 532
                  </p>
                </Card>

                <Card
                  headerBordered
                  hoverable
                  bordered
                  style={{ width: 350, height: 180,color:"white" ,background: "#74a9cf",opacity: 0.8}}
                  title = "July 2022 Vaccine Doses Administered"
                  className="card-vaccine"
                >
                  
                 
                  <p style={{ color: "#005a32", textAlign: "center",fontSize:30,fontWeight:"bolder"}}>
                  3642516
                  </p>
                </Card>

                
              </Space>

        
            </div>

            <div style={divStyle}>
            <Space direction="vertical" colSpan="70%">
                <Card
                  headerBordered
                  hoverable
                  bordered
                  title="Hexbin Map"
                  style={{ width: 1065, height: 550 }}
                  // className="detail-time-graph"
                >
                  < Hexbin/>
                 
                </Card>
              
              </Space>
              </div>

            <div style={divStyle}>
            <Space direction="vertical" colSpan="70%">
                <Card
                  headerBordered
                  hoverable
                  bordered
                  title="New Case vs New Death"
                  style={{ width: 1065, height: 450 }}
                  className="detail-time-graph"
                >
                  < Timegraph/>
                 
                </Card>
              
              </Space>
              </div>


            <div style={divStyle}>
            <Space direction="hotizontal">

            <Card
                  headerBordered
                  hoverable
                  bordered
                  title="Total Case"
                  style={{ width: 530, height: 500 }}
                  className="detail-pie-graph"
                >
                  <Total_case />
                </Card>

                <Card
                  headerBordered
                  hoverable
                  bordered
                  title="Total Death"
                  style={{ width: 530, height: 500 }}
                  className="detail-pie-graph"
                >
                  <Total_death />
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


import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
import { Col, Row, List, Card , Space } from 'antd';

import './M1Body.css';
import { Content } from 'antd/lib/layout/layout';



function M1Body() {

    const divStyle = {
        display: "flex",
        justifyContent: "spacee-around"
    };



    return (
    <>  
    <div style={divStyle}>
       <Space direction="horizontal" >

       <Card 
       style={{width: 100, height:100, background:"black"}}
    //    cover={<img alt="example" src="images/vis-spiral.png" width={100}/>}
    >

        </Card>    
            
        
         <Card style={{width: 100, height:100, background:"red"}}>
              
        </Card>
        
       
       </Space>
                
    </div>                     
        
            
            
            {/* </Col> */}
             
    </>
  );
}

export default M1Body;
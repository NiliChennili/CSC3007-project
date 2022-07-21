import './App.css';
// import Timegraph from './Timegraph';
// import Vaccgraph from './Vacc_death_graph';
import React,{Component} from "react";
import Timegraph from './Timegraph';
// import Total_case from './Total_case';

class App extends Component {
  

  render() {

    return (
      <React.Fragment>
        <Timegraph/> 
    
      </React.Fragment>
    );
  }
}

export default App;

import "./App.css";
// import Timegraph from './Timegraph';
// import Vaccgraph from './Vacc_death_graph';
import React, { Component } from "react";
// import Timegraph from './Timegraph';
// import Total_case from './Total_case';
import Milestone2 from "./Milestone2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Milestone1 from "./pages/Milestone1";

import Hexbin from "./Hexbin";
// import HexbinHTML from './hexbin.html'
import Navbar from "./Navbar";
class App extends Component {
  render() {
    return (
      <>
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Routes>
            <Route path="/CSC3007-project" element={<Home />} exact />
            <Route path="/" element={<Home />} exact />
            <Route path="/milestone1" element={<Milestone1 />} />
            <Route path="/milestone2" element={<Milestone2 />} />
            {/* <Route path='/Hexbin' element={<Hexbin/>} /> */}
            {/* <Route path='/hexbin' element={<HexbinHTML/>} /> */}
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;

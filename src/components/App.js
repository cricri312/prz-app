import React, { Component } from "react";
import '../css/App.css';
import Navigation from "./Navbar";
// import Routes from "../routes/Routes";
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">      
    <Navigation/>      
      {/* <Routes/>  */}
    </div>
    );
  }
}

export default App;
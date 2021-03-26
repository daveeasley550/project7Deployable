import './App.css';
import React, { Component } from "react";
import "./People"
import People from './People';
import Home from "./Home"
import { Route, Switch } from "react-router-dom";
import Nav from "./Navbar"
import Edit from "./Edit"


class App extends Component {
  
  
  render() {
    return (
      <div>
        <Nav/>
      <div className="App">
        <div className="title">
       <Switch>
            <Route exact path="/people" render= {()=><People/>}/>
            <Route exact path="/" render= {()=><Home/>}/>
            {/* <Route exact path="/edit" render= {()=><Edit/>}/> */}

       </Switch>
      
        </div>
      </div>
      </div>
    );
  }
}
export default App;
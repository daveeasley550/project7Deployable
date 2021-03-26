import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

export default class Home extends React.Component {
    constructor(props) {
        super()
        this.state = {
            // yourState: []
        }
    }
   
    // componentDidMount() {
    //     //wll run immmediately after render processes (including all mounting for child components) is complete
    //     let newData = []
    //     this.setState({ yourState: newData })
    // }
    // componentDidUpdate() {
    //     //will only run if a component is React detects a change in the state for this component or props from parent
    // }
    // componentWillUnmount() {
    //     //will only run if a component is about to be removed from the dom by React
    // }
    render() {
        return (
            <div>
            <div className="home-words">
               <h1>A LONG TIME AGO IN A GALAXY FAR AWAY...</h1>
               <h2>THERE WAS A DUDE...HE WAS A NERD</h2>
               <h3>AND HE LIKED CODING</h3>
               <h4>SO HE MADE AN API</h4>
               <h5>THIS API!!!!</h5>
               <h6>CLICK PEOPLE IN THE NAV</h6>
            </div>
            <div className="star">
            <h1>STARWARS!!!!</h1>
            </div>
            </div>

        )
    }
}
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

export default class Nav extends React.Component {
  
    render() {
    return (
      <header>
        <a href={"/"}>Home</a>
        <a href={"/people"}>People</a>
      </header>
    );
  }
}

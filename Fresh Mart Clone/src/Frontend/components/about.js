import React, { Component } from "react";
import history from '../history/index'

class About extends Component {
    click =() => {
    }
  render() {
    console.log(history)
    return (
        <div>
            <h1 onClick={ () => { this.click() }}>dddddddddddddddddddddddd</h1>
        </div>
    );
  }
}

export default About

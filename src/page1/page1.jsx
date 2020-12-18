import React, { Component } from 'react'
import "./style.scss"


import Child_component from "./child_component.jsx"

export default class page1 extends Component {
    state = {
        child_style: {
            color: "white",
        }
    }
    componentWillMount() {
        let child_style = this.state.child_style
        child_style["color"] = "black"
        this.setState({ child_style: child_style }, console.log(this.state))
    }
    componentDidMount() {
        setInterval(() => {
            let child_style = this.state.child_style
            child_style["color"] = "brown"
            this.setState({ child_style: child_style }, console.log(this.state))
        }, 5000);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate executed")
    }
    componentWillUnmount() { 
        alert("leaving page")
    }
    render() {
        return (
            <div className="page1">
                <h1>Page1</h1>
                <h2>Initial page</h2>
                <a href="#page2">Open page2</a>
                <br />
                <input type="text" onChange={(e) => {
                    let child_style = this.state.child_style
                    child_style["color"] = e.target.value
                    this.setState({ child_style: child_style }, console.log(this.state))
                }} />
                <p>Current color: {this.state.child_style && this.state.child_style.color , this.state.child_style.color }</p>
                <br />
                <Child_component child_style={this.state.child_style} />
            </div>
        )
    }
}
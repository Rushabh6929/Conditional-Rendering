import React, { Component } from "react"

export class Internalcss extends Component {

    render() {

        const mystyle = {
            color: "blue",
            backgroundColor: "grey",
            padding: "10px",
            textAlign: "center"

        };

        return (
            <div>
                <h1 style={mystyle}>
                    This is Internal CSS Component</h1>
            </div>
        );
    }
}
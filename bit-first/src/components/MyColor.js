import React, { Component } from 'react'

class MyColor extends Component {
    render() {
        const mc = {fontSize:"20pt", color:"hotpink"}
        const {kind,price} = this.props
        return (
            <div >
                <h1>MyColor.js 7:36</h1>
                <div style={mc}>
                    종류 : {kind} &nbsp; 가격:{price} <br/>
                    종류 : {this.props.kind} &nbsp; 가격:{this.props.price} <br/>
                </div>
            </div>
        )
    }
}

export default MyColor

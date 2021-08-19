import React, { Component } from 'react'

class MyColor extends Component {
    static defaultProps = {
        kind:'tea',
        price: 2400,

    }
    render() {
        const mc = {fontSize:"16pt", color:"hotpink"}
        const {kind,price} = this.props
        return (
            <div >
                <h1>MyColor.js 7:36</h1>
                <div style={mc}>
                    종류 : {kind} &nbsp; 가격:{price} <br/>
                </div>
            </div>
        )
    }
}

export default MyColor
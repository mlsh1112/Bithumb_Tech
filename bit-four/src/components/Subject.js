import React, { Component } from 'react'

export default class Subject extends Component {
    render() {
        const mc = {fontSize:"10pt", color:"hotpink"}
        return (
            <div style={mc}>
                <h2>Subject</h2>
                제목 : {this.props.title}<br></br>
                설명 : {this.props.sub}<p></p>
                <hr></hr>
            </div>
        )
    }
}

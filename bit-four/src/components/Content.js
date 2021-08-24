import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        const mc = {fontSize:"10pt", color:"skyblue"}
        return (
            <div style={mc}>
                <h2>Content</h2>
                제목 : {this.props.title} 
                요약 : {this.props.desc}
            </div>
        )
    }
}

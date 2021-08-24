import React, { Component } from 'react'

export default class List extends Component {
    shouldComponentUpdate(newProps, newState){
        return true
    }
    render() {
        const mc = {fontSize:"20pt", color:"skyblue"}
        let mylists = []
        let data =this.props.data
        for(let i=0;i<data.length;i++){
            mylists.push(<b>
                <a href='{data[i].id}'
                    onClick={function(id,e){
                        this.props.onChangePage(id)
                        e.preventDefault()
                        }.bind(this,data[i].id)}>
                    {data[i].title}
                </a>
            <br/></b>)
        }


        return (
            <div  >
                <h2>List</h2>
                <div style={mc}>{mylists}</div>
            </div>
        )
    }
}

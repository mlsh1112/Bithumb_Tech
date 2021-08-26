
import React from 'react'

class MyCounter extends React.Component{
    state={
        num : 0
    }

    handleAdd=()=>{
        this.setState({
            num:this.state.num+1
        })
    }

    handleSub=()=>{
        this.setState({
            num:this.state.num-1
        })
    }

    handleRandom=()=>{
        this.setState({
            num:this.state.num+Math.floor(Math.random()*5+1)
        })
    }
    render(){
        const mc = {fontSize:'20pt' , color:'skyblue'} ;

        return(
            <div style={mc}>
                <h3>MyCounter.js </h3>
                숫자 출력 : {this.state.num}<br/>
                <button onClick={this.handleAdd}>1씩 증가</button>&nbsp;&nbsp;
                <button onClick={this.handleSub}>1씩 감소</button>&nbsp;&nbsp;
                <button onClick={this.handleRandom}>난수 발생</button>
            </div>
        );
    }
}//class END

export default  MyCounter ;


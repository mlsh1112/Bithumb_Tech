
import React from 'react'

class MyColor extends React.Component{
    static defaultProps = {
        kind:'apple',
        desc : '사과'
    }
    render(){
        const mc = { color:'hotpink'} ;
        const {kind, desc} = this.props
        return(
            <div style={mc}>
                <h2>MyColor.js </h2>
                제목 : {kind}  설명 : {desc}<br/>
                제목 : {this.props.kind}  설명 : {this.props.desc}<br/>
            </div>
        );
    }
}//class END

export {MyColor} ;


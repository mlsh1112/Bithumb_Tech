import React from 'react'

class My extends React.Component{
    render(){
        let name = "김합격"
        let age = 24

        return(
            <div >
               <h1>My.js 7:31</h1> 
               이름 : {name} <br/>
               나이 : {age} <br/>

            </div>
        )
    }
}

export default My
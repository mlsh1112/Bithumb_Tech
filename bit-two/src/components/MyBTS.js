import React, { Component } from 'react'

class MyBTS extends Component {
    state={ //DTO Data Transfer Object 필드존재 + getter/setter
        idols:[ 'bts','blackpink','wannaone'],
        images:[ '/images/musician.jpg','/images/flower.jpg','/images/guitars.jpg' ]
    }
    render() {
        let arr = this.state.idols
        let str = []
        for(let i=0;i<arr.length;i++){
            str.push(<b key={i} style={{fontSize:'20pt'}}> {arr[i]} &nbsp; </b>)
        }
        let dol = this.state.images.map((item,i)=>{
            return <img key={i} src={item} width='150' height='100'/>
        })

        return (
            <div>
                <h1>MyBTS.js 7:39</h1>
                {str}<p></p>
                {dol}
            </div>
        )
    }
}

export default MyBTS
import React, { Component } from 'react'

export default class Test extends Component {
// map / concat / filter / 화살표 함수
    state={
        people:[
            {name:'lee',age:19},
            {name:'kim',age:5},
            {name:'park',age:12},
            {name:'kang',age:6},
            {name:'kang',age:30},
            {name:'kang',age:28},
        ]
    }

    // 화살표 함수
    isAdult = (age) =>{
        if(age<20) return false
        else return true
    }
    render() {
        let arr = this.state.people
        

        // Map 함수
        let people = arr.map((person,i)=>{
            return <b key={i}>Name : {person.name}&nbsp; Age : {person.age} <br/> </b>
        })

        // Filter 함수
        let teen = arr.filter(person=>person.age>10&&person.age<20).map((person,i)=>{return <b key={i+10}>Name : {person.name} Age : {person.age}<br/> </b>})
        let kids = arr.filter(person=>person.age<10).map((person,i)=>{return <b key={i}>Name : {person.name} Age : {person.age}<br/> </b>})
        
        //Concat 함수
        let nonAdult = teen.concat(kids)

        // 화살표 함수 사용
        let adult = arr.map((person,i) => {
            if(this.isAdult(person.age)){
                return <b key={i+20}>Name : {person.name} Age : {person.age}<br/> </b>
            }
        })


        return (
            <div>
                <h1>People</h1>
                {people}
                <h1>Teenagers</h1>
                {teen}
                <h1>Kids</h1>
                {kids}
                <h1>Not Adult</h1>
                {nonAdult}
                <h1>Adult</h1>
                {adult}

            </div>
        )
    }
}

import React, { Component } from 'react'
import flower from './img/img1.png'
import List from './components/List'
import Subject from './components/Subject'
import Content from './components/Content'
import './App.css'

import {BrowserRouter, HashRouter, Link, Route} from 'react-router-dom'
export default class App extends Component {
  state = {
    msg:{title : 'bithumb', sub:'bitcamp'},
    lists : [
      {id:1, title:'aaa', desc:'apple is a best fruit'},
      {id:2, title:'bbb', desc:'blue is a best color'},
      {id:3, title:'ccc', desc:'cherry is a best fruit'}
    ]
  }

  
  render() {
    let ti2 = ''
    let de2 = ''
    if(this.state.mode==='read'){
      ti2 = this.state.lists[this.state.selected_id-1].title
      de2 = this.state.lists[this.state.selected_id-1].desc
    }

    const {title,sub} = this.state.msg
    return (
      <div className='App'>
        <img src={flower} alt="flower" width='100'/><br/>
        <h2>App.js </h2>
        <Subject 
              title={title} 
              sub={sub}></Subject>
        <List 
              data={this.state.lists}
              onChangePage={function(id){
                this.setState({
                  mode : 'read',
                  selected_id:Number(id)
                })
              }.bind(this)}></List>
        <Content title={ti2} desc={de2}></Content>


      </div>
    )
  }
}


//////////////////////////////
/*
import React, { Component } from 'react'
import flower from './img/img1.png'
import MyCoffee from './components/MyCoffee'
export default class App extends Component {
  state = {
    title:'bithumb',
    sub:"bit!!!"
  }
  constructor(prop){
    super();
  }
  render() {
    return (
      <div>
        <img src={flower} alt="flower" width='100'/><br/>
        제목 : {this.state.title}<br/>
        설명 : {this.state.sub}
      </div>
    )
  }
}
 */
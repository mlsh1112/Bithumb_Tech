import React, { Component } from 'react'
export default class App extends Component {

  render() {

    return (
      <div >
        <img src={require("./img/img1.png").default} width="400px" alt="img"/><p></p>
        
      </div>
    )
  }
}




/*
import React, { Component } from 'react'
import MyColor from './components/MyColor'
import Test from './components/Test'
export default class App extends Component {
  static defaultProps = {
    userID:'test',
    userPWD:1234,
  }

  id=3
  state={
    code : 7789,
    book : 'summer',
    todos : [
      {id:1, msg:'kim',flag:false},
      {id:2, msg:'lee',flag:true},
      {id:3, msg:'park',flag:false},

    ]
  }

  handleAdd = () => {
    const {code,book,todos} = this.state;
    this.setState({
      code : 9999,
      book : '몽블랑',
      //todos 추가
    });
  }

  render() {
    return (
      <div>
        <img src='images/flower.jpg' width='150'/>
        <MyColor></MyColor>
      </div>
    )
  }
}
*/
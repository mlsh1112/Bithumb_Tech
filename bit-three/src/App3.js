import React, { Component } from 'react'
import MyColor from './components/MyColor'
export default class App3 extends Component {
  static defaultProps = {
    userID:'test',
    userPWD:1234,
  }

  id=3
  state={
    code : 7789,
    book : 'winter',
    todos : [
      {id:1, msg:'kim',flag:false},
      {id:2, msg:'lee',flag:true},
      {id:3, msg:'park',flag:false},
    ]
  }

  render() {
    const cc ={fontSize:'20px',marginLeft:'120px'}
    const {userID,userPWD} = this.props
    const {code,book,todos} = this.state

    return (
      <div style={cc}>
        <img src={require("./img/img1.png").default} width="400px" alt="img"/><p></p>
        props 속성의 데이터 출력<br></br>
        유저 아이디 = {userID} &nbsp; &nbsp;  유저 pw = {userPWD}<br></br>
        유저 아이디 = {this.props.userID} &nbsp; &nbsp;  유저 pw = {this.props.userPWD}<p></p>
        <hr/>
        state 항목의 데이터 출력<br></br>
        코드 = {code}  &nbsp;  &nbsp; 책 = {book}<br/>
        코드 = {this.state.code}  &nbsp;  &nbsp; 책 = {this.state.book}<p/>
        <hr/>
        {JSON.stringify(todos)}<p></p>
        {JSON.stringify(this.state.todos)}<br/>
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
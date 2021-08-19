import React, { Component } from 'react'
export default class App4 extends Component {
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

  

  handleAdd = () =>{
    const {todos} = this.state;
    this.setState({
      code:9990,
      book:'gugu',
      todos:todos.concat(
        {id:this.id=this.id+1, msg:'last',flag:true},
      ),

  })};
  handleSearch = () =>{
      const {todos} = this.state;
      todos.filter(todo=>todo.flag).map(todo=>(console.log(todo)))
      
      
};

  

  render() {
    const cc ={fontSize:'20px',marginLeft:'120px'}
    const {userID,userPWD} = this.props
    const {code,book,todos} = this.state

    return (
      <div style={cc}>
        <img src={require("./img/img1.png").default} width="400px" alt="img"/><p></p>
        <button onClick={this.handleAdd}>handleAdd 호출</button> &nbsp;
        <button onClick={this.handleSearch}>handleSearch 호출</button><p></p>
        
        
        
        
        props 속성의 데이터 출력<br></br>
        유저 아이디 = {userID} &nbsp; &nbsp;  유저 pw = {userPWD}<br></br>
        <hr/>
        state 항목의 데이터 출력<br></br>
        코드 = {code}  &nbsp;  &nbsp; 책 = {book}<br/>
        <hr/>
        {JSON.stringify(todos)}<br/>
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
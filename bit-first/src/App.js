import React from 'react';
import img1 from './img/img1.png'
import './App.css';
import My from './components/My';
import MyBTS from './components/MyBTS';
import MyColor from './components/MyColor';
class App extends React.Component{

  state={
    idols:[ 'bts','blackpink','wannaone'],
  }
  render(){

    return (
      <div>
        <MyBTS></MyBTS>
      </div>
    );
  }
  
}

export default App;


/////////////////////////////////////////////////
//첫번째
/*
import logo from './logo.svg';
import img1 from './img/img1.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src='images/flower.jpg' alt="logo" width="200"/><br/>
        우리나라<br/>
        대한민국<br/>
        여름 소나기<p></p>
        <img src={img1} width="400" alt="img"/><p></p>
        <a href="https://reactjs.org"> Naver </a>
      </header>
    </div>
  );
}
*/

/////////////////////////////////////////////////
//두번째
/*
import React from 'react';
import img1 from './img/img1.png'
import './App.css';
import My from './components/My';
import MyBTS from './components/MyBTS';
import MyColor from './components/MyColor';
class App extends React.Component{
  render(){
    return (
      <div className="App">
        <img src={img1} alt="flower" width="400"/><br/>
        우리나라<br/>
        대한민국<br/>
        여름 소나기<p></p>

        <My></My>
        <MyColor></MyColor>
        <MyBTS></MyBTS>
      </div>
    );
  }
  
}
*/

/////////////////////////////////////////////////
//3번째
/*
import React from 'react';
import img1 from './img/img1.png'
import './App.css';
import My from './components/My';
import MyBTS from './components/MyBTS';
import MyColor from './components/MyColor';
class App extends React.Component{
  render(){
    return (
      <div className="App">
        <img src={img1} alt="flower" width="400"/><br/>
        <MyColor kind="cake" price="5700"></MyColor>
      </div>
    );
  }
  
}

export default App;
*/

////////////////////////////
//4
/*
import React from 'react';
import img1 from './img/img1.png'
import './App.css';
import My from './components/My';
import MyBTS from './components/MyBTS';
import MyColor from './components/MyColor';
class App extends React.Component{

  state={
    idols:[ 'bts','blackpink','wannaone'],
  }
  render(){
    const cc = {fontSize:"24pt", marginLeft:"150px", color:'hotpink'};
    const msg = "겨울눈보라";
    let arr = this.state.idols
    let str = []

    for(let i=0;i<arr.length;i++){
      str.push(<b> {arr[i]} &nbsp; </b>)
    }
    let dol = this.state.idols.map((item,i)=>{
      return <b key={i}> {item}&nbsp; </b>
    })

    return (
      <div style={cc}>
        {msg}<p></p>
        {str}<p></p>
        {dol}<p></p>
      </div>
    );
  }
  
}

export default App;
 */
import React from 'react';
import img1 from './img/img1.png'
import './App.css';
class App extends React.Component{
  render(){
    return (
      <div className="App">
        <img src='images/flower.jpg' alt="flower" width="200"/><br/>
        우리나라<br/>
        대한민국<br/>
        여름 소나기<p></p>
      </div>
    );
  }
  
}

export default App;


/////////////////////////////////////////////////
// First
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
import logo from './logo.svg';
import img1 from './img/img1.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src='images/flower.jpg' alt="logo" width="100"/><br/>
        우리나라<br/>
        대한민국<br/>
        여름 소나기<p></p>
        <img src={img1} width="400" alt="img"/><p></p>
        <a href="https://reactjs.org"> Naver </a>
      </header>
    </div>
  );
}

export default App;

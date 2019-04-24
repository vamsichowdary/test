import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SquereBoxContainer from "./SquereBoxContainer";
function App() {
  return (
    <div className="App">
      <nav className="nav navbar nav-extend-lg bg-primary">
      <a className="nav-brand text-white">Diamond - sweep</a>
      </nav>
      <SquereBoxContainer></SquereBoxContainer>
      
      
    </div>
  );
}

export default App;

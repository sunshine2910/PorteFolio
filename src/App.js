import './App.css';
import Header from "./component/header/Header.jsx";
import Motivation from "./component/body/Motivation.jsx"
import React from 'react';
//import Header from "./component/header/header";

function App() {
  return (
    <div className='App'>
      <Header />
      <Motivation>
      </Motivation>
    </div>
  );
}

export default App;

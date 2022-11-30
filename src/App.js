import logo from './logo.svg';
import './App.css';

import React from 'react';
import Post from './compoentns/useReducer/Post';
import Main from './compoentns/UseCallback/Main';
import Title from './compoentns/Custom hook/Title';
import OtherTitle from './compoentns/Custom hook/OtherTitle';



function App() {

 
  return (
    <div className="App">
      <Post />
      <Title />
      <OtherTitle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <Update />
      <Araay />
      {/* <TwoArray /> */}
      {/* <UpdatingObjectInTwoArray />
      <ObjectUpdate />
      <CondiitonUse /> */}
      {/* <Effect />  */}
      {/* <Cleanup /> */}
      {/* <MouseContainer />
      <Codeevolution /> */}
      {/* <DataFetching /> */}
      {/* <FetchById /> */}
      {/* <FetchByClick /> */}
      {/* <Main /> */}
      
     
    </div>
  );
}

export default App;

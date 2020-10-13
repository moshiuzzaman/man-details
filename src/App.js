import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Main from './Component/Header/Main/Main';
import daa from "./newData/newData.js"
function App() {
  console.log(daa);
  return (
    <div >
        <Header></Header>
        <Main></Main>
        
    
    </div>
  );
}

export default App;

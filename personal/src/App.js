import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import Header from './component/Header/Header'
import Content from './component/Content/Content'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StockApp from "./Containers/StockApp/StockApp";

class App extends Component {
  render() {
    return (
      <div className="App">
          <StockApp/>
      </div>
    );
  }
}

export default App;

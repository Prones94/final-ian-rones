import React, { Component, useState } from 'react';
import './App.css';
import Home from './components/Home'
import StarWars from './components/StarWars'

class App extends Component {
  render(){
    return (
      <div className="App">
      <header className="App-header">
        <Home title={"FEW 2.3 Single Page Applications"}/>
      </header>
      <StarWars />
      </div>
    )
  }
}

export default App;

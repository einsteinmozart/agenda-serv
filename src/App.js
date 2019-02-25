import React, { Component } from 'react';
import './App.css';
import Routes from './main/routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="jumbotron text-center">
            <h1>Agenda de Serviços</h1>             
          </div>
          <Routes />
          
        </div>
        
      </div>
    );
  }
}

export default App;

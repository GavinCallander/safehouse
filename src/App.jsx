import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';

class App extends Component {
  constructor(props) {
    super(props)
  };
  
  render () {
    return (
      <div className='App'>
    <h1>C-Cure</h1> 
      
      <Route path='/HomePage' component={HomePage} />   
      </div>
    )
  }

}

export default App;

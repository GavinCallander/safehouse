import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import { BrowserRouter, Route, Link} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      something: ''
    }
  }
  render () {
    return (
      <BrowserRouter>
        <h1>C-Cure</h1>
        <HomePage />
      </BrowserRouter>
    )
  }
}

export default App;

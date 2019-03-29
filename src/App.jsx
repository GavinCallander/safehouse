import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import Chat from './Chat';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import SmallSafehousePage from './SmallSafehousePage';

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
        
        <Route exact path='/'
        render = { () => <HomePage /> } />
        
        <Route path='/chat'
        render = { () => <Chat /> } />

        <Route path='/SmallSafehousePage'
        render = { () => <SmallSafehousePage /> }/>


      </BrowserRouter>
    )
  }
}

export default App;

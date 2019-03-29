import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import Chat1 from './Chat1';
import Chat2 from './Chat2';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import SafehouseOne from './SafehouseOne';
import SafehouseTwo from './SafehouseTwo';

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
        <Route exact path='/'
        render = { () => <HomePage /> } />
        
        <Route path='/chat1'
        render = { () => <Chat1 /> } />

        <Route path='/chat2'
        render = { () => <Chat2 /> } />

        <Route path='/House1'
        render = { () => <SafehouseOne /> } /> 

        <Route path='/House2'
        render = { () => <SafehouseTwo /> }/>
      </BrowserRouter>
    )
  }
}

export default App;

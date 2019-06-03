import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/AppPage';
export default class App extends Component {
  render() {
    return (
        <div>
            <Home />
        </div>
        
    )
  }
}

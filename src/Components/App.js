import React, { Component } from 'react';
import Header from './Header';
import MainBio from './MainBio';
import Projects from './Projects';

class App extends Component {
	render() {
	  return (
			<div>
				<Header/>
				<MainBio/>
				<Projects/>
			</div>
		)
  }
}

export default App;
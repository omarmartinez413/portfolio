import React, { Component } from 'react';
import Header from './Header';
import MainBio from './MainBio';
import Projects from './Projects';
import Footer from './Footer';

class App extends Component {
	render() {
	  return (
			<div>
				<Header/>
				<MainBio/>
				<Projects/>
				<Footer/>
			</div>
		)
  }
}

export default App;
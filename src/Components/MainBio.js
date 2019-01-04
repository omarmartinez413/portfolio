import React, { Component } from 'react';
import '../App.css';

class MainBio extends Component{
    render(){
    return (
    <div>
        <article id="main">
          <header className="special container">
            <span className="icon fa-bar-chart-o">About me</span>
            <h2>
              I'm a <strong>fullstack web developer </strong>
              <br />
              living in new york city, ny.
            </h2>
            <br />

            <p>
              I spend most of my time in frontend (HTML, CSS, and Javascript),
              <br />
              but I also enjoy working on the backend(Node.js)
              <br />
              <br />
              <p>
                I'm extremely passionate about web developement and <br />
                creating all types of designs. Aside from web developement,
                <br />
                I spend most of my time playing sports and hanging out with
                family.
              </p>
            </p>
          </header>
        </article>
      </div>
    );
  }
}

export default MainBio;

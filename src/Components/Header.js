import React, { Component } from 'react';
import '../App.css';


class Header extends Component{
    render(){
    return (
<div>
    <div className="index is-preload">
      <div id="page-wrapper">
        <div className="sticky">
          <header id="header" className="alt">
            <h1 id="logo">
              <a href="index.js">Omar <span>Martinez</span>
              </a>
            </h1>
            <nav id="nav">
              <ul>
                <li id="githublogo">
                  <a href="#">
                    <img
                      style={{ backgroundColor: 'white'}}
                      src=" https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                      alt="git hub logo"
                      width="30px"
                      height="30px"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <section id="banner">
          <div className="inner">
            <header>
              <h2>Welcome</h2>
            </header>
            <p>
              My name is <strong>Omar Martinez </strong>
              <br />
              and I'm a web developer.
              <br />
            </p>
            <footer>
              <ul className="buttons stacked">
                <li>
                  <a href="#main" className="button fit scrolly">
                    Tell Me More
                  </a>
                </li>
                <li>
                  <a href="contact.html" className="button primary">
                    Contact me
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        </section>
      </div>
    </div>
  </div>
        )
    }
};



export default Header;
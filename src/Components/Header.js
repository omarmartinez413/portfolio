import React, { Component } from 'react';
import pic01 from '../images/pic01.jpg';
import '../App.css';



class Header extends Component{
    render(){
    return (
            <div>
            <div className="index is-preload">
              <div id="page-wrapper">
      
                  {/*<!-- Header -->*/}
                      <div className = "sticky"><header id="header" className="alt">
                          <h1 id="logo"><a href="index.js">Omar <span>Martinez</span></a></h1>
                          <nav id="nav">
                              <ul>
                                  <li id = "githublogo"><a href = "#"><img src =" https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt = "git hub logo" width = "30px" height = "30px"></img></a></li>
                              </ul>
                          </nav>
                      </header>
                </div>
      
                  {/*<!-- Banner -->*/}
                      <section id="banner">
      
                          {/*<!--
                              ".inner" is set up as an inline-block so it automatically expands
                              in both directions to fit whatever's inside it. This means it won't
                              automatically wrap lines, so be sure to use line breaks where
                              appropriate (<br />).
                -->*/}
                          <div className="inner">
      
                              <header>
                                  <h2>Welcome</h2>
                              </header>
                              <p>My name is  <strong>Omar Martinez </strong>  
                              <br />
                              and I'm a web developer.
                              <br />
                              </p>
                              <footer>
                                  <ul className="buttons stacked">
                                      <li><a href="#main" className="button fit scrolly">Tell Me More</a></li>
                                      <li><a href="contact.html" className="button primary">Contact me</a></li>
                                  </ul>
                              </footer>
      
                          </div>
      
                      </section>
      
                  {/*<!-- Main -->*/}
                      <article id="main">
      
                      <header className="special container">
                              <span className="icon fa-bar-chart-o">About me</span>
                              <h2>I'm a <strong>fullstack web developer </strong>
                              <br/>
                                living in new york city, ny.</h2>
                              <br />
                              
                              <p>I spend most of my time in frontend (HTML, CSS, and Javascript), 
                                <br />
                               but I also enjoy working on the backend(Node.js)
                              <br />
                              <br/>
                              <p>I'm extremely passionate about web developement and <br/>
                              creating all types of designs. Aside from web developement, 
                              <br/>
                              I spend most of my time playing sports and hanging out with family.</p>
                              </p>
                          </header>
      
                          {/*<!-- One -->*/}
                              <section className="wrapper style3 container special">
      
                                  <header className="major">
                                      <h2>My <strong>Projects</strong></h2>
                                  </header>
      
                                  <div className="row">
                                      <div className="col-6 col-12-narrower">
      
                                          <section>
                                          <header>
                                                  <h3><strong>Rock, Paper, Scissors App</strong> <a href = "https://github.com/omarmartinez413/rock_paper_scissors_game" target = "_blank"><img src =" https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt = "git hub logo" width = "40px" height = "40px" ></img></a></h3>
                                              </header>
                                          <img style={{width: '90%', height: '90%'}} src = {pic01} alt="pic of RPS app" />
                                            <p>A simple Rock, Paper, Scissors game that uses JS DOM manipulation on the html. </p>
                                          </section>
                        <footer className="major">
                                      <ul className="buttons">
                                          <li><a href="https://arpsgame.netlify.com/" className="button" target = "_blank">Check it out!</a></li>
                                      </ul>
                                  </footer>
      
                                      </div>
                      
                      
                      
                                    {/*<div className="col-6 col-12-narrower">
      
                                          <section>
                                              <a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
                                              <header>
                                                  <h3>Lets Save!  <a href = "#"><img src =" https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt = "git hub logo" width = "30px" height = "30px"></img></a></h3>
                                              </header>
                                              <p>A nice Budget App using JS </p>
                                          </section>
                        <footer className="major">
                                      <ul className="buttons">
                                          <li><a href="#" className="button">Check it out!</a></li>
                                      </ul>
                                  </footer>
      
            </div>*/}
                                  </div>
                                  {/*<div className="row">
                                      <div className="col-6 col-12-narrower">
      
                                          <section>
                                              <a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
                                              <header>
                                                  <h3>Hyperspace Travel</h3>
                                              </header>
                                              <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
                                          </section>
      
                                      </div>
                                      <div className="col-6 col-12-narrower">
      
                                          <section>
                                              <a href="#" className="image featured"><img src="images/pic04.jpg" alt="" /></a>
                                              <header>
                                                  <h3>And Another Train</h3>
                                              </header>
                                              <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
                                          </section>
      
                                      </div>
                                  </div>*/}
                              </section>
      
                          {/*<!-- Two -->
                              <section className="wrapper style1 container special">
                                  <div className="row">
                                      <div className="col-4 col-12-narrower">
      
                                          <section>
                                              <span className="icon featured fa-check"></span>
                                              <header>
                                                  <h3>This is Something</h3>
                                              </header>
                                              <p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
                                          </section>
      
                                      </div>
                                      <div className="col-4 col-12-narrower">
      
                                          <section>
                                              <span className="icon featured fa-check"></span>
                                              <header>
                                                  <h3>Also Something</h3>
                                              </header>
                                              <p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
                                          </section>
      
                                      </div>
                                  </div>
                              </section>*/}
      
                      </article>
      
                  {/*<!-- CTA -->*/}
                      <section id="cta">
      
                          <header>
                              <h2>Ready to do <strong>something</strong>?</h2>
                              <p>Let's create your vision now!</p>
                          </header>
                          <footer>
                              <ul className="buttons">
                                  <li><a href="#" className="button primary">Contact me</a></li>
                                  <li><a href="#" className="button">Let me see more</a></li>
                              </ul>
                          </footer>
      
                      </section>
      
                  {/*<!-- Footer -->*/}
                      <footer id="footer">
      
                          <ul className="icons">
                              <li><a href = "#"><img src =" https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt = "git hub logo" width = "30px" height = "30px"></img></a></li>
                          </ul>
      
                          <ul className="copyright">
                              <li>&copy; OmarMartinez</li>
                          </ul>
      
                      </footer>
      
              </div>
              </div>
              </div>
          )
        }
    }



export default Header;
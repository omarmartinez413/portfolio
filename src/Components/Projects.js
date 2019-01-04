import React, { Component } from 'react';
import pic01 from '../images/pic01.jpg';
import '../App.css';


class Projects extends Component{
    render(){
    return(
        <div>
          {/*<!-- Projects -->*/}
          {/*<!-- Row One -->*/}
          {/*<!-- Project One -->*/}
  
          <section className="wrapper style3 container special">
            <header className="major">
              <h2>
                My <strong>Projects</strong>
              </h2>
            </header>
  
            <div className="row">
              <div className="col-6 col-12-narrower">
                <section>
                  <header>
                    <h3>
                      <strong>Rock, Paper, Scissors App</strong>{" "}
                      <a
                        href="https://github.com/omarmartinez413/rock_paper_scissors_game"
                        target="_blank"
                      >
                        <img
                          src=" https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                          alt="git hub logo"
                          width="40px"
                          height="40px"
                        />
                      </a>
                    </h3>
                  </header>
                  <img
                    style={{ width: "90%", height: "90%" }}
                    src= {pic01}
                    alt="pic of RPS app"
                  />
                  <p>
                    A simple Rock, Paper, Scissors game that uses JS DOM
                    manipulation on the html.
                  </p>
                </section>
                <footer className="major">
                  <ul className="buttons">
                    <li>
                      <a
                        href="https://arpsgame.netlify.com/"
                        className="button"
                        target="_blank"
                      >
                        Check it out!
                      </a>
                    </li>
                  </ul>
                </footer>
              </div>
  
              {/*<div className="col-6 col-12-narrower">
                                      <----Project Two---->
        
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
  
          {/*<!-- Row Two -->
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
        </div>
          );
        }
    }


export default Projects;
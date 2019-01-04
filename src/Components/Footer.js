import React, { Component } from 'react';
import '../App.css';


class Footer extends Component{
    render(){
    return (
    <div>
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
              
          )
        }
    }


export default Footer;
import React, { Component } from 'react';
import './footer.css';


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
                          <form id='formStyle'
                          name="portfolioContact" >
          <input type="hidden" name="form-name" value="contact" />
          <p >
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message" ></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
                          </footer>
      
                      </section>
      
                  {/*<!-- Footer -->*/}
                      <footer id="footer">
      
                          <ul className="icons">
                              <li><a href = "#cta"><img src =" https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt = "git hub logo" width = "30px" height = "30px"></img></a></li>
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
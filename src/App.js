import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="index is-preload">
		<div id="page-wrapper">

			{/*<!-- Header -->*/}
				<header id="header" className="alt">
					<h1 id="logo"><a href="index.html">Omar <span>Martinez</span></a></h1>
					<nav id="nav">
						<ul>
							<li><a href = "https://github.com/omarmartinez413" className="icon circle fa-github"><span className="label">Github</span></a></li>
						</ul>
					</nav>
				</header>

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
								<li><a href="contact.html" className="button fit scrolly">Contact me</a></li>
							</ul>
						</footer>

					</div>

				</section>

			{/*<!-- Main -->*/}
				<article id="main">

					<header className="special container">
						<span className="icon fa-bar-chart-o"></span>
						<h2>As this is my <strong>twentieth</strong> freebie for HTML5 UP
						<br />
						I decided to give it a really creative name.</h2>
						<p>Turns out <strong>Twenty</strong> was the best I could come up with. Anyway, lame name aside,
						<br />
						it's minimally designed, fully responsive, built on HTML5/CSS3,
						and, like all my stuff,
						<br />
						released for free under the <a href="http://html5up.net/license">Creative Commons Attribution 3.0</a> license. Have fun!</p>
					</header>

					{/*<!-- One -->*/}
						<section className="wrapper style2 container special-alt">
							<div className="row gtr-50">
								<div className="col-8 col-12-narrower">

									<header>
										<h2>Behold the <strong>icons</strong> that visualize what you’re all about. or just take up space. your call bro.</h2>
									</header>
									<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu comteger ut fermentum lorem. Lorem ipsum dolor sit amet. Sed tristique purus vitae volutpat ultrices. eu elit eget commodo. Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo.</p>
									<footer>
										<ul className="buttons">
											<li><a href="#" className="button">Find Out More</a></li>
										</ul>
									</footer>

								</div>
								<div className="col-4 col-12-narrower imp-narrower">

									<ul className="featured-icons">
										<li><span className="icon fa-clock-o"><span className="label">Feature 1</span></span></li>
										<li><span className="icon fa-volume-up"><span className="label">Feature 2</span></span></li>
										<li><span className="icon fa-laptop"><span className="label">Feature 3</span></span></li>
										<li><span className="icon fa-inbox"><span className="label">Feature 4</span></span></li>
										<li><span className="icon fa-lock"><span className="label">Feature 5</span></span></li>
										<li><span className="icon fa-cog"><span className="label">Feature 6</span></span></li>
									</ul>

								</div>
							</div>
						</section>

					{/*<!-- Two -->*/}
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
								<div className="col-4 col-12-narrower">

									<section>
										<span className="icon featured fa-check"></span>
										<header>
											<h3>Probably Something</h3>
										</header>
										<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
									</section>

								</div>
							</div>
						</section>

					{/*<!-- Three -->*/}
						<section className="wrapper style3 container special">

							<header className="major">
								<h2>Next look at this <strong>cool stuff</strong></h2>
							</header>

							<div className="row">
								<div className="col-6 col-12-narrower">

									<section>
										<a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
										<header>
											<h3>A Really Fast Train</h3>
										</header>
										<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
									</section>

								</div>
								<div className="col-6 col-12-narrower">

									<section>
										<a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
										<header>
											<h3>An Airport Terminal</h3>
										</header>
										<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
									</section>

								</div>
							</div>
							<div className="row">
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
							</div>

							<footer className="major">
								<ul className="buttons">
									<li><a href="#" className="button">See More</a></li>
								</ul>
							</footer>

						</section>

				</article>

			{/*<!-- CTA -->*/}
				<section id="cta">

					<header>
						<h2>Ready to do <strong>something</strong>?</h2>
						<p>Proin a ullamcorper elit, et sagittis turpis integer ut fermentum.</p>
					</header>
					<footer>
						<ul className="buttons">
							<li><a href="#" className="button primary">Take My Money</a></li>
							<li><a href="#" className="button">LOL Wut</a></li>
						</ul>
					</footer>

				</section>

			{/*<!-- Footer -->*/}
				<footer id="footer">

					<ul className="icons">
						<li><a href="#" className="icon circle fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="#" className="icon circle fa-facebook"><span className="label">Facebook</span></a></li>
						<li><a href="#" className="icon circle fa-google-plus"><span className="label">Google+</span></a></li>
						<li><a href="#" className="icon circle fa-github"><span className="label">Github</span></a></li>
						<li><a href="#" className="icon circle fa-dribbble"><span className="label">Dribbble</span></a></li>
					</ul>

					<ul className="copyright">
						<li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>

				</footer>

		</div>

		Scripts 
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.dropotron.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

    </div>
</div>
    );
  }
}

export default App;

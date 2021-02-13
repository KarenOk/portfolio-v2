import React from "react";
import "./LandingPage.css";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";
import {
	EmailIcon,
	GithubIcon,
	LinkedinIcon,
	TwitterIcon,
} from "../../images/icons/icons";

const LandingPage = ({ isHome }) => {
	return (
		<div className="landing-page">
			<div className="landing-page__content">
				<section className="landing-page__intro">
					<h1 className="landing-page__name"> Karen Okonkwo </h1>

					<Typewriter
						options={{
							strings: ["Software Engineer.", "Full-Stack Web Developer."],
							autoStart: true,
							loop: true,
							wrapperClassName: "landing-page__role",
							loop: true,
							cursorClassName: "landing-page__cursor",
						}}
					/>
				</section>
				<nav className={`landing-page__nav ${isHome ? "show" : ""}`}>
					<ul className="landing-page__nav-list">
						<li className="landing-page__nav-item">
							<NavLink
								exact
								to="/"
								activeClassName="landing-page__nav-link--active"
								className="landing-page__nav-link"
							>
								Home
							</NavLink>
						</li>
						<li className="landing-page__nav-item">
							<NavLink
								exact
								to="/about"
								activeClassName="landing-page__nav-link--active"
								className="landing-page__nav-link"
							>
								About
							</NavLink>
						</li>
						<li className="landing-page__nav-item">
							<NavLink
								exact
								to="/resume"
								activeClassName="landing-page__nav-link--active"
								className="landing-page__nav-link"
							>
								Resume
							</NavLink>
						</li>
						<li className="landing-page__nav-item">
							<NavLink
								exact
								to="/portfolio"
								activeClassName="landing-page__nav-link--active"
								className="landing-page__nav-link"
							>
								Portfolio
							</NavLink>
						</li>
						<li className="landing-page__nav-item">
							<NavLink
								exact
								to="/contact"
								activeClassName="landing-page__nav-link--active"
								className="landing-page__nav-link"
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>

				<ul className="social">
					<li className="social__item">
						<a
							href="https://github.com/KarenOk"
							className="social__link social__link--active"
						>
							Github
							<GithubIcon className="social__icon" />
						</a>
					</li>
					<li className="social__item">
						<a
							href="https://www.linkedin.com/in/karenokonkwo/"
							className="social__link"
						>
							LinkedIn
							<LinkedinIcon className="social__icon" />
						</a>
					</li>
					<li className="social__item">
						<a href="mailto:karenokonkwo29@gmail.com" className="social__link">
							Email
							<EmailIcon className="social__icon" />
						</a>
					</li>
					<li className="social__item">
						<a href="https://www.twitter.com/" className="social__link">
							Twitter
							<TwitterIcon className="social__icon" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default LandingPage;

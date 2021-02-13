import React from "react";
import "./LandingPage.css";
import Typewriter from "typewriter-effect";
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
							<a
								href="#!"
								className="landing-page__nav-link landing-page__nav-link--active"
							>
								Home
							</a>
						</li>
						<li className="landing-page__nav-item">
							<a href="#!" className="landing-page__nav-link">
								About
							</a>
						</li>
						<li className="landing-page__nav-item">
							<a href="#!" className="landing-page__nav-link">
								Resume
							</a>
						</li>
						<li className="landing-page__nav-item">
							<a href="#!" className="landing-page__nav-link">
								Portfolio
							</a>
						</li>
						<li className="landing-page__nav-item">
							<a href="#!" className="landing-page__nav-link">
								Contact
							</a>
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

import React from "react";
import "./ContactPage.css";
import {
	GithubIcon,
	LinkedinIcon,
	TwitterIcon,
} from "../../images/icons/icons";

const ContactPage = () => {
	return (
		<section className="contact-page">
			<header className="contact-page__header">
				<h1 className="contact-page__heading contact-page__heading--main">
					Get In Touch
				</h1>
				<p className="contact-page__subheading">
					I’m always interested in hearing about new projects and opportunities.
				</p>
			</header>
			<div className="contact-page__content">
				<div className="contact-page__content-left">
					<h2 className="contact-page__heading">
						Let's talk about everything!
					</h2>
					<p>
						Don't like forms? Send me an{" "}
						<a
							href="mailto:karenokonkwo29@gmail.com"
							className="contact-page__link"
						>
							email
						</a>
						. 👋
					</p>
				</div>
				<div className="contact-page__content-right">
					<form className="contact-page__form">
						<input className="contact-page__input" placeholder="Your name" />
						<input
							className="contact-page__input"
							placeholder="Email address"
						/>
						<input
							className="contact-page__input contact-page__input--full"
							placeholder="Subject"
						/>
						<textarea
							className="contact-page__input contact-page__textarea"
							placeholder="Message"
						></textarea>

						<div style={{ textAlign: "right" }}>
							<button className="contact-page__send-btn">Send Message</button>
						</div>
					</form>
				</div>
			</div>
			<div className="contact-page__content">
				<div className="contact-page__content-left">
					<h2 className="contact-page__heading">Reach out on social media!</h2>
				</div>
				<div className="contact-page__content-right">
					<ul className="social">
						<li className="social__item">
							<a
								href="https://github.com/KarenOk"
								className="social__link social__link--active"
							>
								<GithubIcon className="social__icon" />
								Github
							</a>
						</li>
						<li className="social__item">
							<a
								href="https://www.linkedin.com/in/karenokonkwo/"
								className="social__link"
							>
								<LinkedinIcon className="social__icon" fill="#0072b1" />
								LinkedIn
							</a>
						</li>
						<li className="social__item">
							<a href="https://www.twitter.com/" className="social__link">
								<TwitterIcon className="social__icon" fill="#1DA1F2" />
								Twitter
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ContactPage;

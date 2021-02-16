import React, { useState, useEffect } from "react";
import "./ContactPage.css";
import { ToastsStore } from "react-toasts";
import {
	GithubIcon,
	LinkedinIcon,
	TwitterIcon,
} from "../../images/icons/icons";
import data from "../../data.json";

const ContactPage = ({ closeNav }) => {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	useEffect(() => {
		closeNav();
	}, []);

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await fetch("https://formspree.io/f/xdopvkjw", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!res.ok) {
				await res.text().then((text) => {
					throw Error(text);
				});
			}
			ToastsStore.success(
				"Your message was sent successfully. I'll get back to you shortly.",
				5000
			);
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
		} catch (err) {
			ToastsStore.error(
				"Something went wrong while sending your message.",
				5000
			);
			console.error(err);
		}
		setLoading(false);
	};

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
			<div className="contact-page__body">
				<div className="contact-page__content">
					<div className="contact-page__content-left">
						<h2 className="contact-page__heading">
							Let's talk about everything!
						</h2>
						<p>
							Don't like forms? Send me an{" "}
							<a
								href={"mailto:" + data.social.email}
								className="contact-page__link"
							>
								email
							</a>
							. 👋
						</p>
					</div>
					<div className="contact-page__content-right">
						<form className="contact-page__form" onSubmit={onSubmit}>
							<input
								className="contact-page__input"
								placeholder="Your name"
								name="name"
								aria-label="Your name"
								required
								value={formData.name}
								onChange={onChange}
							/>
							<input
								className="contact-page__input"
								placeholder="Email address"
								aria-label="Email address"
								name="email"
								type="email"
								required
								value={formData.email}
								onChange={onChange}
							/>
							<input
								className="contact-page__input contact-page__input--full"
								placeholder="Subject"
								aria-label="Subject"
								name="subject"
								required
								value={formData.subject}
								onChange={onChange}
							/>
							<textarea
								className="contact-page__input contact-page__textarea"
								placeholder="Message"
								aria-label="Message"
								name="message"
								required
								value={formData.message}
								onChange={onChange}
							></textarea>

							<div style={{ textAlign: "right" }}>
								<button className="contact-page__send-btn" disabled={loading}>
									{loading ? "Sending..." : "Send Message"}
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="contact-page__content">
					<div className="contact-page__content-left">
						<h2 className="contact-page__heading">
							Reach out on social media!
						</h2>
					</div>
					<div className="contact-page__content-right">
						<ul className="social">
							<li className="social__item">
								<a
									href={data.social.github}
									className="social__link social__link--active"
								>
									<GithubIcon className="social__icon" fill="black" />
									Github
								</a>
							</li>
							<li className="social__item">
								<a href={data.social.linkedIn} className="social__link">
									<LinkedinIcon className="social__icon" fill="#0072b1" />
									LinkedIn
								</a>
							</li>
							<li className="social__item">
								<a href={data.social.twitter} className="social__link">
									<TwitterIcon className="social__icon" fill="#1DA1F2" />
									Twitter
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactPage;

import React, { useState } from "react";
import "./ContactPage.css";
import { useToasts } from "react-toast-notifications";
import ReactGA from "react-ga";
import {
	GithubIcon,
	LinkedinIcon,
	TwitterIcon,
	InstagramIcon,
} from "../../images/icons/icons";
import data from "../../data.json";
import Fade from "react-reveal/Fade";

const encode = (data) => {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
};

const ContactPage = () => {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const { addToast } = useToasts();

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		ReactGA.event({
			category: "Contact Form",
			action: "Submit",
		});
		try {
			const res = await fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: encode({ "form-name": "contact", ...formData }),
			});

			if (!res.ok) {
				await res.text().then((text) => {
					throw Error(text);
				});
			}
			addToast(
				"Your message was sent successfully. I'll get back to you shortly.",
				{
					appearance: "success",
					autoDismiss: true,
				}
			);
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
		} catch (err) {
			addToast("Something went wrong while sending your message.", {
				appearance: "error",
				autoDismiss: true,
			});
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
				<Fade bottom>
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
				</Fade>
				<Fade bottom>
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
										target="_blank"
										className="social__link"
									>
										<GithubIcon className="social__icon" fill="black" />
										Github
									</a>
								</li>
								<li className="social__item">
									<a
										href={data.social.linkedIn}
										className="social__link"
										target="_blank"
									>
										<LinkedinIcon
											className="social__icon"
											fill="#0072b1"
											width={27}
										/>
										LinkedIn
									</a>
								</li>
								<li className="social__item">
									<a
										href={data.social.twitter}
										className="social__link"
										target="_blank"
									>
										<TwitterIcon className="social__icon" fill="#1DA1F2" />
										Twitter
									</a>
								</li>
								<li className="social__item">
									<a
										href={data.social.instagram}
										className="social__link"
										target="_blank"
									>
										<InstagramIcon className="social__icon" fill="#E1306C" />
										Instagram
									</a>
								</li>
							</ul>
						</div>
					</div>
				</Fade>{" "}
			</div>
		</section>
	);
};

export default ContactPage;

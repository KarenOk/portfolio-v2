import React, { useEffect } from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";
import data from "../../data.json";
import illustration from "../../images/illustration.svg";

const AboutPage = ({ closeNav }) => {
	useEffect(() => {
		closeNav();
	}, []);

	return (
		<section className="about-page">
			<header className="about-page__header">
				<h1 className="about-page__heading about-page__heading--main">
					Meet Karen Okonkwo
				</h1>
				<p className="about-page__subheading">Get to know me.</p>
			</header>
			<div className="about-page__body">
				<div className="about-page__content">
					<div className="about-page__content-left">
						<p className="about-page__text">Hi there! 👋</p>
						<p className="about-page__text">
							<strong> Who am I? </strong>
							<ul className="about-page__list">
								<li className="about-page__list-item">
									A Software Engineer with hands on experience developing
									websites, full-stack web applications and APIs.
								</li>
								<li className="about-page__list-item">
									Someone with a good grasp of engineering concepts, data
									structures, algorithms and the design of systems.
								</li>
								<li className="about-page__list-item">
									A Bachelor’s Degree (First Class Honours) holder in Computer
									Engineering.
								</li>

								<li className="about-page__list-item">
									Currently making magic at{" "}
									<a href="https://eyowo.com" className="about-page__link">
										{" "}
										Eyowo.
									</a>
								</li>
							</ul>
						</p>

						<p className="about-page__text">
							I'm super excited you're here. Feel free to{" "}
							<Link to="/contact" className="about-page__link">
								reach out to me{" "}
							</Link>
							with any project ideas you have or to just say hello!
						</p>
					</div>
					<div className="about-page__content-right">
						<img
							src={illustration}
							alt=""
							className="about-page__illustration"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutPage;

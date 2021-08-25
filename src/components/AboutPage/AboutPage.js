import React from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import Fade from "react-reveal/Fade";
import animationData from "../../images/lotties/female.json";
import { HTMLIcon, CodeBracesIcon, WebIcon } from "../../images/icons/icons";

const AboutPage = () => {
	return (
		<section className="about-page">
			<header className="about-page__header">
				<h1 className="about-page__heading about-page__heading--main">
					Meet Karen Okonkwo
				</h1>
			</header>
			<div className="about-page__body">
				<div className="about-page__content">
					<div className="about-page__content-left">
						<Lottie
							options={{
								loop: true,
								autoplay: true,
								animationData: animationData,
								rendererSettings: {
									preserveAspectRatio: "xMidYMid slice",
								},
							}}
							style={{ maxWidth: 300 }}
							height="auto"
						/>
					</div>
					<div className="about-page__content-right">
						<Fade bottom>
							<p className="about-page__text about-page__text--restricted">
								<strong className="about-page__text--bold"> Who am I? </strong>
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
										<a
											href="https://www.bloomberg.com/company/"
											target="_blank"
											className="about-page__link"
										>
											{" "}
											Bloomberg L.P.
										</a>
									</li>
								</ul>
							</p>
							<div className="about-page__text">
								<strong className="about-page__text--bold"> What I do? </strong>
								<div className="about-page__services">
									<a
										href="https://blog.udacity.com/2014/12/front-end-vs-back-end-vs-full-stack-web-developers.html"
										target="_blank"
										className="about-page__services-link"
									>
										<HTMLIcon className="about-page__services-icon" />
										<span className="about-page__services-text">
											Front-End Web Development
										</span>
									</a>
									<a
										href="https://blog.udacity.com/2014/12/front-end-vs-back-end-vs-full-stack-web-developers.html"
										target="_blank"
										className="about-page__services-link"
									>
										<CodeBracesIcon className="about-page__services-icon" />
										<span className="about-page__services-text">
											Back-End / API Development
										</span>
									</a>
									<a
										href="https://blog.udacity.com/2014/12/front-end-vs-back-end-vs-full-stack-web-developers.html"
										target="_blank"
										className="about-page__services-link"
									>
										<WebIcon className="about-page__services-icon" />
										<span className="about-page__services-text">
											Full-Stack Web Development
										</span>
									</a>
								</div>
							</div>

							<p className="about-page__text about-page__text--restricted">
								I'm super excited you're here. Feel free to{" "}
								<Link to="/contact" className="about-page__link">
									reach out to me{" "}
								</Link>
								with any project ideas you have or to just say hello!
							</p>
						</Fade>{" "}
					</div>
				</div>{" "}
			</div>
		</section>
	);
};

export default AboutPage;

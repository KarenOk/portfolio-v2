import React from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import Fade from "react-reveal/Fade";
import animationData from "../../images/lotties/female.json";
import { HTMLIcon, CodeBracesIcon, WebIcon } from "../../images/icons/icons";

const aboutList = [
	"I’m a software engineer with 6 years of experience, focused on building user-centered software across diverse sectors.",
	"I create web applications that are simple to use, adapt well to different devices, and are accessible to everyone.",
	"I work on both the front and back end, developing everything from websites to full-stack applications and APIs.",
	"I’m skilled in core engineering concepts, using them to deliver software that’s reliable and impactful.",
	"I hold a First Class Honours degree in Computer Engineering.",
];

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
									{aboutList.map((listItem, i) => (
										<li className="about-page__list-item" key={i}>
											{listItem}
										</li>
									))}

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

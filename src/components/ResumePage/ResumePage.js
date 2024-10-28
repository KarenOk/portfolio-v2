import React from "react";
import "./ResumePage.css";
import Fade from "react-reveal/Fade";
import data from "../../data.jsx";
import javascript from "../../images/tech/javascript.svg";
import git from "../../images/tech/git.svg";
import python from "../../images/tech/python.svg";
import linux from "../../images/tech/linux.png";
import sql from "../../images/tech/sql.svg";
import react from "../../images/tech/react.svg";
import nodejs from "../../images/tech/nodejs.svg";
import html5 from "../../images/tech/html5.svg";
import css3 from "../../images/tech/css3.svg";
import flask from "../../images/tech/flask.svg";
import php from "../../images/tech/php.svg";
import cpp from "../../images/tech/cpp.svg";
import express from "../../images/tech/express.svg";
import redux from "../../images/tech/redux.svg";
import jquery from "../../images/tech/jquery.svg";
import aws from "../../images/tech/aws.svg";
import netlify from "../../images/tech/netlify.svg";
import mongodb from "../../images/tech/mongodb.svg";
import docker from "../../images/tech/docker.svg";
import typescript from "../../images/tech/typescript.svg";
import kafka from "../../images/tech/kafka.svg";

const tools = [
	{ icon: javascript, name: "Javascript" },
	{ icon: react, name: "React JS" },
	{ icon: python, name: "Python" },
	{ icon: typescript, name: "Typescropt" },
	{ icon: flask, name: "Flask" },
	{ icon: nodejs, name: "Node JS" },
	{ icon: sql, name: "SQL" },
	{ icon: html5, name: "HTML5" },
	{ icon: css3, name: "CSS3" },
	{ icon: git, name: "Git" },
	{ icon: linux, name: "Linux" },
	{ icon: mongodb, name: "MongoDB" },
	{ icon: docker, name: "Docker" },
	{ icon: php, name: "PHP" },
	{ icon: cpp, name: "C++" },
	{ icon: express, name: "Express.js" },
	{ icon: kafka, name: "Kafka" },
	{ icon: redux, name: "Redux" },
	{ icon: jquery, name: "jQuery" },
	{ icon: aws, name: "AWS" },
	{ icon: netlify, name: "Netlify" },
];

const ResumePage = () => {
	return (
		<section className="resume-page">
			<header className="resume-page__header">
				<h1 className="resume-page__heading resume-page__heading--main">
					Resume
				</h1>
				<p className="resume-page__subheading">
					Learn more about my skills, qualifications and experiences.
				</p>
			</header>
			<div className="resume-page__body">
				<div className="resume-page__content">
					<div className="resume-page__content-left">
						<h2 className="resume-page__heading">Tech Stack</h2>
						<p className="resume-page__subheading--body">
							TOOLS & TECHNOLOGIES
						</p>
					</div>
					<div className="resume-page__content-right">
						<Fade bottom>
							<div className="tech">
								{tools.map((tool) => (
									<img
										src={tool.icon}
										alt={tool.name}
										title={tool.name}
										className="tech__logo"
									/>
								))}
							</div>
						</Fade>
					</div>
				</div>

				<div className="resume-page__content">
					<div className="resume-page__content-left">
						<h2 className="resume-page__heading">Work Experience</h2>
						<p className="resume-page__subheading--body">
							PRESENT & PREVIOUS JOBS
						</p>
					</div>
					<div className="resume-page__content-right">
						<div className="work-wrapper">
							<Fade bottom>
								{data.work.map((work, i) => (
									<div className="work" key={i}>
										<p className="work__timeline">
											{work.timeline.from} - {work.timeline.to}
										</p>
										<h3 className="work__role">{work.role}</h3>
										<p className="work__company">{work.company}</p>
										<ul className="work__summary">
											{work.summary.map((item, i) => (
												<li className="work__summary-item" key={i}>
													{item}
												</li>
											))}
										</ul>
									</div>
								))}
							</Fade>
						</div>
					</div>
				</div>

				<div className="resume-page__content">
					<div className="resume-page__content-left">
						<h2 className="resume-page__heading">Education</h2>
						<p className="resume-page__subheading--body">ACADEMIC CAREER</p>
					</div>
					<div className="resume-page__content-right">
						<div className="education-wrapper">
							{data.education.map((edu, i) => (
								<Fade bottom>
									<div className="education" key={i}>
										<h3 className="education__degree">{edu.degree}</h3>
										<p className="education__school">{edu.school}</p>
										<p className="education__timeline">
											{edu.timeline.from} - {edu.timeline.to}
										</p>
										<p className="education__summary">{edu.summary} </p>
									</div>
								</Fade>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ResumePage;

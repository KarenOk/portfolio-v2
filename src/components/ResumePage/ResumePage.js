import React from "react";
import "./ResumePage.css";
import data from "../../data.json";

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
						<h2 className="resume-page__heading">Education</h2>
						<p className="resume-page__subheading--body">ACADEMIC CAREER</p>
					</div>
					<div className="resume-page__content-right">
						<div class="education-wrapper">
							{data.education.map((edu, i) => (
								<div class="education" key={i}>
									<h3 className="education__degree">{edu.degree}</h3>
									<p className="education__school">{edu.school}</p>
									<p className="education__timeline">
										{edu.timeline.from} - {edu.timeline.to}
									</p>
									<p className="education__summary">{edu.summary} </p>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="resume-page__content">
					<div className="resume-page__content-left">
						<h2 className="resume-page__heading">Work Experience</h2>
						<p className="resume-page__subheading--body">PREVIOUS JOBS</p>
					</div>
					<div className="resume-page__content-right"></div>
				</div>

				<div className="resume-page__content">
					<div className="resume-page__content-left">
						<h2 className="resume-page__heading">Tech Stack</h2>
						<p className="resume-page__subheading--body">
							TOOLS & TECHNOLOGIES
						</p>
					</div>
					<div className="resume-page__content-right"></div>
				</div>
			</div>
		</section>
	);
};

export default ResumePage;

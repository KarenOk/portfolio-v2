import React, { useState, useEffect } from "react";
import "./PortfolioPage.css";
import { AboutIcon, CloseIcon, ZoomIcon } from "../../images/icons/icons";
import data from "../../data.json";
import Modal from "../Modal/Modal";

const PortfolioPage = () => {
	const [showModal, setShowModal] = useState(false);
	const [selectedImg, setSelectedImg] = useState(null);
	const [selectedProject, setSelectedProject] = useState(null);
	const [showFullscreen, setShowFullscreen] = useState(false);

	useEffect(() => {
		if (selectedImg) setShowFullscreen(true);
		else setShowFullscreen(false);
	}, [selectedImg]);

	return (
		<section className="portfolio-page">
			<Modal
				visible={showModal}
				close={() => setShowModal(false)}
				project={selectedProject}
			/>
			<header className="portfolio-page__header">
				<h1 className="portfolio-page__heading portfolio-page__heading--main">
					Recent Works
				</h1>
				<p className="portfolio-page__subheading">
					Portfolio showcase of some of my work.
				</p>
			</header>
			<div className="portfolio-page__body">
				{data.projects.map((project, i) => (
					<div className="portfolio-page__img-wrapper" key={i}>
						<>
							<img
								src={project.image_url}
								alt={project.name}
								className="portfolio-page__img"
							/>
							<div className="portfolio-page__desc">
								<h3> {project.name} </h3>
								<div className="portfolio-page__actions">
									<button
										className="portfolio-page__img-btn"
										aria-label="View fullscreen"
										title="View fullscreen"
										onClick={() => setSelectedImg(project.image_url)}
									>
										<ZoomIcon width={40} className="portfolio-page__img-icon" />
									</button>
									<button
										className="portfolio-page__img-btn"
										aria-label="View details"
										title="View details"
										onClick={() => {
											setSelectedProject(project);
											setShowModal(true);
										}}
									>
										<AboutIcon
											width={40}
											className="portfolio-page__img-icon"
										/>
									</button>
								</div>
							</div>
						</>
					</div>
				))}

				{showFullscreen ? (
					<div className="portfolio-page__img-wrapper--full">
						<button
							className="portfolio-page__close-btn"
							aria-label="Close fullscreen"
							onClick={() => setSelectedImg(null)}
						>
							<CloseIcon
								width={50}
								height={50}
								stroke="white"
								className="portfolio-page__close-icon"
							/>
						</button>
						<img src={selectedImg} alt="" className="portfolio-page__img" />
					</div>
				) : (
					<div />
				)}
			</div>
		</section>
	);
};

export default PortfolioPage;

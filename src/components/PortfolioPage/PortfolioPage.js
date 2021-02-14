import React, { useState, useEffect } from "react";
import "./PortfolioPage.css";
import { AboutIcon, CloseIcon, ZoomIcon } from "../../images/icons/icons";
import project from "../../images/project.png";
import project2 from "../../images/project2.png";
import data from "../../data.json";
import Modal from "../Modal/Modal";

const PortfolioPage = () => {
	const [showModal, setShowModal] = useState(false);
	const [selectedImg, setSelectedImg] = useState(null);
	const [showFullscreen, setShowFullscreen] = useState(false);

	useEffect(() => {
		if (selectedImg) setShowFullscreen(true);
		else setShowFullscreen(false);
	}, [selectedImg]);

	return (
		<section className="portfolio-page">
			<Modal visible={showModal} close={() => setShowModal(false)} />
			<header className="portfolio-page__header">
				<h1 className="portfolio-page__heading portfolio-page__heading--main">
					Recent Works
				</h1>
				<p className="portfolio-page__subheading">
					Portfolio showcase of some work I've done
				</p>
			</header>
			<div className="portfolio-page__body">
				{new Array(10).fill(0).map((item, i) => (
					<div
						className="portfolio-page__img-wrapper"
						key={i}
						// onClick={() => setShowModal(true)}
					>
						{i % 2 === 0 ? (
							<>
								<img
									src={project}
									alt="Project"
									className="portfolio-page__img"
								/>
								<div className="portfolio-page__desc">
									<h3> Scribbles Blog </h3>
									<div className="portfolio-page__actions">
										<button
											className="portfolio-page__img-btn"
											aria-label="View fullscreen"
											title="View fullscreen"
											onClick={() => setSelectedImg(project)}
										>
											<ZoomIcon
												width={40}
												className="portfolio-page__img-icon"
											/>
										</button>
										<button
											className="portfolio-page__img-btn"
											aria-label="View details"
											title="View details"
											onClick={() => setShowModal(true)}
										>
											<AboutIcon
												width={40}
												className="portfolio-page__img-icon"
											/>
										</button>
									</div>
								</div>
							</>
						) : (
							<>
								<img
									src={project2}
									alt="Project"
									className="portfolio-page__img"
								/>
								<div className="portfolio-page__desc">
									<h3> Scribbles Blog </h3>
									<div className="portfolio-page__actions">
										<button
											className="portfolio-page__img-btn"
											aria-label="View fullscreen"
											title="View fullscreen"
											onClick={() => setSelectedImg(project2)}
										>
											<ZoomIcon
												width={40}
												className="portfolio-page__img-icon"
											/>
										</button>
										<button
											className="portfolio-page__img-btn"
											aria-label="View details"
											title="View details"
											onClick={() => setShowModal(true)}
										>
											<AboutIcon
												width={40}
												className="portfolio-page__img-icon"
											/>
										</button>
									</div>
								</div>
							</>
						)}
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
						<img
							src={selectedImg}
							alt="Project"
							className="portfolio-page__img"
						/>
					</div>
				) : (
					<div />
				)}
			</div>
		</section>
	);
};

export default PortfolioPage;

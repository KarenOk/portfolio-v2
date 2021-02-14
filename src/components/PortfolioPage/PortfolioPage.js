import React from "react";
import "./PortfolioPage.css";
import { AboutIcon, GithubIcon } from "../../images/icons/icons";
import project from "../../images/project.png";
import project2 from "../../images/project2.png";
import data from "../../data.json";

const PortfolioPage = () => {
	return (
		<section className="portfolio-page">
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
					<div className="portfolio-page__img-wrapper">
						{i % 2 === 0 ? (
							<>
								<img
									src={project}
									alt="Project"
									className="portfolio-page__img"
								/>
								<div className="portfolio-page__desc">
									<h3> Scribbles Blog </h3>
									<button
										className="portfolio-page__img-btn"
										aria-label="About scribbles blog"
									>
										<AboutIcon
											width={40}
											className="portfolio-page__img-icon"
										/>
									</button>
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
									<button
										className="portfolio-page__img-btn"
										aria-label="About scribbles blog"
									>
										<AboutIcon
											width={40}
											className="portfolio-page__img-icon"
										/>
									</button>
								</div>
							</>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default PortfolioPage;

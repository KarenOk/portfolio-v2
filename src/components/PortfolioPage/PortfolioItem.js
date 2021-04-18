import React from "react";
import { Link } from "react-router-dom";
import "./PortfolioItem.css";
import data from "../../data.json";
import { GithubIcon, LiveIcon } from "../../images/icons/icons";
import PageNotFound from "../PageNotFound/PageNotFound";

const PortfolioItem = ({ closeNav, match }) => {
	const slug = match.params.slug;
	const project = data.projects[slug];

	if (!project) {
		return <PageNotFound />;
	}

	return (
		<div className="portfolio-item">
			<header className="portfolio-item__header">
				<Link
					to="/portfolio"
					className="portfolio-item__path portfolio-item__path--link"
				>
					Portfolio
				</Link>

				<span className="portfolio-item__path-separator">{">"}</span>
				<span className="portfolio-item__path">{project.name}</span>
			</header>
			<main className="portfolio-item__body">
				<a
					className="device-wrapper portfolio-item__img-wrapper"
					// href={project.gif_url || project.image_url}
					// target="_blank"
				>
					<div
						className="device"
						data-device="Macbook2015"
						data-orientation="portrait"
						data-color="gold"
					>
						<div className="screen">
							<img
								src={
									project.gif_url ||
									project.device_image_url ||
									project.image_url
								}
								alt={project.name}
								className="portfolio-item__img"
							/>
						</div>
					</div>
				</a>
				<div className="portfolio-item__content">
					<h2 className="portfolio-item__heading"> {project.name}</h2>
					<p className="portfolio-item__summary">{project.description}</p>
					<div className="portfolio-item__link-wrapper">
						{project.github_url ? (
							<a
								href={project.github_url}
								target="_blank"
								className="portfolio-item__link portfolio-item__link--github"
							>
								<GithubIcon width={20} className="portfolio-item__link-icon" />{" "}
								View on Github
							</a>
						) : (
							<a />
						)}
						{project.live_url ? (
							<a
								href={project.live_url}
								className="portfolio-item__link portfolio-item__link--live"
								target="_blank"
							>
								<LiveIcon width={20} className="portfolio-item__link-icon" />{" "}
								View Live
							</a>
						) : (
							<a />
						)}
					</div>
				</div>
			</main>
		</div>
	);
};

export default PortfolioItem;

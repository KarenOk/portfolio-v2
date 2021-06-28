import React from "react";
import "./PortfolioItem.css";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import data from "../../data.json";
import { GithubIcon, LiveIcon } from "../../images/icons/icons";
import PageNotFound from "../PageNotFound/PageNotFound";

const PortfolioItem = ({ closeNav, match }) => {
	const slug = match.params.slug;
	const project = data.projects[slug];
	const isMobile = project?.device_type === "mobile";

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
				<div
					className={`portfolio-item__img-wrapper ${
						isMobile ? "portfolio-item__img-wrapper--mobile" : ""
					}`}
				>
					<a
						className="device-wrapper"
						href={project.gif_url || project.image_url}
						target="_blank"
					>
						<div
							className="device tooltip"
							data-device={isMobile ? "iPhone6" : "Macbook2015"}
							data-orientation="portrait"
							data-color={isMobile ? "white" : "gold"}
						>
							<div className="screen">
								<span class="tooltip__text tooltip__text--bottom">
									Click to view fullscreen
								</span>
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
				</div>
				<div className="portfolio-item__content">
					<h2 className="portfolio-item__heading"> {project.name}</h2>
					<p
						className="portfolio-item__summary"
						dangerouslySetInnerHTML={{ __html: project.description }}
					/>
					<div className="portfolio-item__link-wrapper">
						{project.github_url ? (
							<ReactGA.OutboundLink
								eventLabel="Clicked github link for portfolio item"
								to={project.github_url}
								target="_blank"
								className="portfolio-item__link portfolio-item__link--github"
							>
								<GithubIcon width={20} className="portfolio-item__link-icon" />{" "}
								View on Github
							</ReactGA.OutboundLink>
						) : (
							<a />
						)}
						{project.live_url ? (
							<ReactGA.OutboundLink
								eventLabel="Clicked live link for portfolio item"
								to={project.live_url}
								className="portfolio-item__link portfolio-item__link--live"
								target="_blank"
							>
								<LiveIcon width={20} className="portfolio-item__link-icon" />{" "}
								View Live
							</ReactGA.OutboundLink>
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

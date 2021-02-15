import React from "react";
import "./Modal.css";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { GithubIcon, LiveIcon } from "../../images/icons/icons";

const Modal = ({ visible, close, project }) => {
	if (!project) return <div />;

	return (
		<Rodal visible={visible} onClose={close}>
			<div className="modal__img-wrapper">
				{project.gif_url ? (
					<img
						src={project.gif_url}
						alt={project.name}
						className="modal__img"
					/>
				) : (
					<img
						src={project.image_url}
						alt={project.name}
						className="modal__img"
					/>
				)}
			</div>
			<h1 className="modal__heading"> {project.name}</h1>
			<p className="modal__summary">{project.description}</p>
			<div className="modal__link-wrapper">
				{project.github_url ? (
					<a
						href={project.github_url}
						target="_blank"
						className="modal__link modal__link--github"
					>
						<GithubIcon width={20} className="modal__link-icon" /> View on
						Github
					</a>
				) : (
					<a />
				)}
				{project.live_url ? (
					<a
						href={project.live_url}
						className="modal__link modal__link--live"
						target="_blank"
					>
						<LiveIcon width={20} className="modal__link-icon" /> View Live
					</a>
				) : (
					<a />
				)}
			</div>
		</Rodal>
	);
};

export default Modal;

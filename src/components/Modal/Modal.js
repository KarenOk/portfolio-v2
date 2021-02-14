import React from "react";
import "./Modal.css";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { GithubIcon, LiveIcon } from "../../images/icons/icons";
import project2 from "../../images/project2.png";

const Modal = ({ visible, close }) => {
	return (
		<Rodal visible={visible} onClose={close}>
			<div className="modal__img-wrapper">
				<img src={project2} alt="Project" className="modal__img" />
			</div>
			<h1 className="modal__heading"> Scribbles Blog</h1>
			<p className="modal__summary">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
			<div className="modal__link-wrapper">
				<a href="#!" className="modal__link modal__link--github">
					<GithubIcon width={20} className="modal__link-icon" /> View on Github
				</a>
				<a href="#!" className="modal__link modal__link--live">
					<LiveIcon width={20} className="modal__link-icon" /> View Live
				</a>
			</div>
		</Rodal>
	);
};

export default Modal;

import React from "react";
import "./PageNotFound.css";
import animationData from "../../images/lotties/404.json";
import Lottie from "react-lottie";

const PageNotFound = () => {
	return (
		<div className="not-found">
			<main className="not-found__content">
				<Lottie
					options={{
						loop: true,
						autoplay: true,
						animationData: animationData,
						rendererSettings: {
							preserveAspectRatio: "xMidYMid slice",
						},
					}}
					height="auto"
					width="40%"
				/>
				<p className="not-found__text"> PAGE NOT FOUND.</p>
			</main>
		</div>
	);
};

export default PageNotFound;

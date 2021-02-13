import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import logo from "../../logos/logo6 animated.svg";
import Banner1 from "../../images/banner 1.jpeg";
import Banner2 from "../../images/banner 2.jpeg";

const banners = [Banner1, Banner2];

const LandingPage = () => {
	const [banner, setBanner] = useState(0);

	useEffect(() => {
		const timer = setTimeout(nextBanner, 2000);

		return () => {
			clearTimeout(timer);
		};
	}, [banner]);

	const nextBanner = () => {
		let next = banner + 1;
		console.log(next);
		setBanner(next > banners.length - 1 ? 0 : next);
	};

	return (
		<div
			className="landing-page"
			style={{ backgroundImage: `url('${banners[banner]}')` }}
		>
			{/* <object data={logo} className="App-logo" /> */}
			<div className="landing-page__overlay"></div>
		</div>
	);
};

export default LandingPage;

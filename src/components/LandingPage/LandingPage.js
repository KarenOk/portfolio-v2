import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import logo from "../../logos/logo6 white animated.svg";
import Banner1 from "../../images/banner 1.jpeg";
import Banner2 from "../../images/banner 2.jpeg";
import Typewriter from "typewriter-effect";

const banners = [Banner1, Banner2];

const LandingPage = () => {
	const [banner, setBanner] = useState(0);

	useEffect(() => {
		const timer = setTimeout(nextBanner, 3000);

		return () => {
			clearTimeout(timer);
		};
	}, [banner]);

	const nextBanner = () => {
		let next = banner + 1;
		setBanner(next > banners.length - 1 ? 0 : next);
	};

	return (
		<div
			className="landing-page"
			style={{ backgroundImage: `url('${banners[banner]}')` }}
		>
			<div className="landing-page__overlay"></div>
			<header className="landing-page__header">
				<a href="/">
					<object
						data={logo}
						className="landing-page__logo"
						type="image/svg+xml"
					/>
				</a>
			</header>
			<div className="landing-page__body">
				<div className="landing-page__text-cont">
					<section className="landing-page__intro">
						<h1 className="landing-page__name"> Karen Okonkwo </h1>

						<Typewriter
							options={{
								strings: ["Software Engineer.", "Full-Stack Web Developer."],
								autoStart: true,
								loop: true,
								wrapperClassName: "landing-page__role",
								loop: true,
								cursorClassName: "landing-page__cursor",
							}}
						/>
					</section>
					<nav className="landing-page__nav">
						<ul className="landing-page__nav-list">
							<li className="landing-page__nav-item">
								<a
									href="#!"
									className="landing-page__nav-link landing-page__nav-link--active"
								>
									Home
								</a>
							</li>
							<li className="landing-page__nav-item">
								<a href="#!" className="landing-page__nav-link">
									About
								</a>
							</li>
							<li className="landing-page__nav-item">
								<a href="#!" className="landing-page__nav-link">
									Resume
								</a>
							</li>
							<li className="landing-page__nav-item">
								<a href="#!" className="landing-page__nav-link">
									Portfolio
								</a>
							</li>
							<li className="landing-page__nav-item">
								<a href="#!" className="landing-page__nav-link">
									Contact
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;

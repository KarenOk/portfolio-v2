import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logos/logo6 white animated.svg";
import Banner1 from "./images/banner 1.jpeg";
import Banner2 from "./images/banner 2.jpeg";
import { HomeIcon, MenuIcon, CloseCircleIcon } from "./images/icons/icons";

import LandingPage from "./components/LandingPage/LandingPage";
import ContactPage from "./components/ContactPage/ContactPage";

// const banners = [Banner1, Banner2];
const banners = [
	"https://res.cloudinary.com/karso/image/upload/v1613217031/Portfolio/banner_1_jqcqno.jpg",
	"https://res.cloudinary.com/karso/image/upload/v1613217032/Portfolio/banner_2_olqefy.jpg",
];

function App() {
	const [banner, setBanner] = useState(0);
	const [showNav, setShowNav] = useState(false);
	const isHome = true;

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
		<Router>
			<div
				className="app"
				style={{ backgroundImage: `url('${banners[banner]}')` }}
			>
				<div className="app__overlay"></div>
				<header className="app__header">
					<a href="/">
						<object
							data={logo}
							className="app__logo"
							type="image/svg+xml"
							alt="Karen Okonkwo"
						/>
					</a>
					<button
						aria-label="Open menu"
						className="app__menu-btn"
						onClick={() => setShowNav(true)}
					>
						<MenuIcon className="app__menu-icon" height={60} stroke="white" />
					</button>
					<nav className={`app__nav ${showNav ? "show" : ""}`}>
						<ul className="app__nav-list">
							<li className="app__nav-item">
								<a href="#!" className="app__nav-link app__nav-link--active">
									Home
								</a>
								<HomeIcon fill="white" width={20} className="app__nav-icon" />
							</li>
							<li className="app__nav-item">
								<a href="#!" className="app__nav-link">
									About
								</a>
								<HomeIcon fill="white" width={20} className="app__nav-icon" />
							</li>
							<li className="app__nav-item">
								<a href="#!" className="app__nav-link">
									Resume
								</a>
								<HomeIcon fill="white" width={20} className="app__nav-icon" />
							</li>
							<li className="app__nav-item">
								<a href="#!" className="app__nav-link">
									Portfolio
								</a>
								<HomeIcon fill="white" width={20} className="app__nav-icon" />
							</li>
							<li className="app__nav-item">
								<a href="#!" className="app__nav-link">
									Contact
								</a>
								<HomeIcon fill="white" width={20} className="app__nav-icon" />
							</li>
						</ul>
						<button
							className="app__nav-close"
							aria-label="Close menu"
							onClick={() => setShowNav(false)}
						>
							<CloseCircleIcon width={40} fill="white" />
						</button>
					</nav>
				</header>

				<Switch>
					<Route exact path="/contact" component={ContactPage} />
					<Route path="/" component={LandingPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

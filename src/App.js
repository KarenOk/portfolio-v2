import React, { useState, useEffect } from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	Redirect,
} from "react-router-dom";
import { ToastsContainer, ToastsStore } from "react-toasts";
import logo from "./logos/logo6 white animated.svg";
import {
	MenuIcon,
	CloseCircleIcon,
	HomeIcon,
	AboutIcon,
	ResumeIcon,
	PortfolioIcon,
	ContactIcon,
} from "./images/icons/icons";

import LandingPage from "./components/LandingPage/LandingPage";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import ResumePage from "./components/ResumePage/ResumePage";
import PortfolioPage from "./components/PortfolioPage/PortfolioPage";
import PortfolioItem from "./components/PortfolioPage/PortfolioItem";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const banners = [
	"https://res.cloudinary.com/karso/image/upload/v1613217031/Portfolio/banner_1_jqcqno.jpg",
	"https://res.cloudinary.com/karso/image/upload/v1613217032/Portfolio/banner_2_olqefy.jpg",
];

function App() {
	const [banner, setBanner] = useState(0);
	const [showNav, setShowNav] = useState(false);
	const [isHome, setIsHome] = useState(false);

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
							aria-label="Karen Okonkwo"
							tabIndex="-1"
						/>
					</a>
					<button
						aria-label="Open menu"
						className="app__menu-btn"
						onClick={() => setShowNav(true)}
					>
						<MenuIcon className="app__menu-icon" height={60} stroke="white" />
					</button>
					<nav
						className={`app__nav ${showNav ? "show" : ""} ${
							isHome ? "app__nav--home" : ""
						}`}
					>
						<button
							className="app__nav-close"
							aria-label="Close menu"
							onClick={() => setShowNav(false)}
						>
							<CloseCircleIcon width={40} fill="white" />
						</button>
						<ul className="app__nav-list">
							<li className="app__nav-item">
								<NavLink
									exact
									to="/"
									activeClassName="app__nav-link--active"
									className="app__nav-link"
								>
									Home
								</NavLink>
								<HomeIcon fill="white" width={25} className="app__nav-icon" />
							</li>
							<li className="app__nav-item">
								<NavLink
									exact
									to="/about"
									activeClassName="app__nav-link--active"
									className="app__nav-link"
								>
									About
								</NavLink>
								<AboutIcon fill="white" width={25} className="app__nav-icon" />
							</li>
							<li className="app__nav-item">
								<NavLink
									exact
									to="/resume"
									activeClassName="app__nav-link--active"
									className="app__nav-link"
								>
									Resume
								</NavLink>
								<ResumeIcon fill="white" width={30} className="app__nav-icon" />
							</li>
							<li className="app__nav-item">
								<NavLink
									exact
									to="/portfolio"
									activeClassName="app__nav-link--active"
									className="app__nav-link"
								>
									Portfolio
								</NavLink>
								<PortfolioIcon
									fill="white"
									width={20}
									className="app__nav-icon"
								/>
							</li>
							<li className="app__nav-item">
								<NavLink
									exact
									to="/contact"
									activeClassName="app__nav-link--active"
									className="app__nav-link"
								>
									Contact
								</NavLink>
								<ContactIcon
									fill="white"
									width={25}
									className="app__nav-icon"
								/>
							</li>
						</ul>
					</nav>
				</header>

				<Switch>
					<Route
						exact
						path="/about"
						render={(props) => (
							<AboutPage {...props} closeNav={() => setShowNav(false)} />
						)}
					/>
					<Route
						exact
						path="/portfolio/:slug"
						render={(props) => (
							<PortfolioItem {...props} closeNav={() => setShowNav(false)} />
						)}
					/>
					<Route
						exact
						path="/portfolio"
						render={(props) => (
							<PortfolioPage {...props} closeNav={() => setShowNav(false)} />
						)}
					/>
					<Route
						exact
						path="/contact"
						render={(props) => (
							<ContactPage {...props} closeNav={() => setShowNav(false)} />
						)}
					/>
					<Route
						exact
						path="/resume"
						render={(props) => (
							<ResumePage {...props} closeNav={() => setShowNav(false)} />
						)}
					/>
					<Route
						exact
						path="/"
						render={(props) => (
							<LandingPage
								{...props}
								setIsHome={setIsHome}
								closeNav={() => setShowNav(false)}
							/>
						)}
					/>
					<Route component={PageNotFound} />
				</Switch>

				<ToastsContainer store={ToastsStore} />
			</div>
		</Router>
	);
}

export default App;

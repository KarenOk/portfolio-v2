import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { Switch, Route, NavLink, useLocation, Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ReactGA from "react-ga";
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
	"https://res.cloudinary.com/karso/image/upload/v1644513745/Portfolio/Project%20Banners/r5rhwugjfjmxtmbyz2gf.jpg",
	"https://res.cloudinary.com/karso/image/upload/v1644513745/Portfolio/Project%20Banners/ypvwujh5iliiqjgeowpi.jpg",
	"https://res.cloudinary.com/karso/image/upload/v1644513745/Portfolio/Project%20Banners/nng75czwnwnugatr6v9p.jpg",
	"https://res.cloudinary.com/karso/image/upload/v1644513745/Portfolio/Project%20Banners/ukkbwgyqp6g7g98i1xqs.jpg",
];

const navLinks = [
	{ label: "Home", path: "/", icon: HomeIcon, iconWidth: 25 },
	{ label: "About", path: "/about", icon: AboutIcon, iconWidth: 25 },
	{ label: "Resume", path: "/resume", icon: ResumeIcon, iconWidth: 30 },
	{
		label: "Portfolio",
		path: "/portfolio",
		icon: PortfolioIcon,
		iconWidth: 20,
	},
	{ label: "Contact", path: "/contact", icon: ContactIcon, iconWidth: 25 },
];

function App() {
	const [banner, setBanner] = useState(0);
	const [showNav, setShowNav] = useState(false);
	const [isHome, setIsHome] = useState(false);

	const location = useLocation();

	useEffect(() => {
		updateAppHeight();
		window.addEventListener("resize", updateAppHeight);
		return () => {
			window.removeEventListener("resize", updateAppHeight);
		};
	}, []);

	useEffect(() => {
		if (
			window.location.href.includes("localhost") ||
			window.location.href.includes("staging")
		) {
			ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID_STAGING, {
				debug: true,
			});
		} else ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	useEffect(() => {
		if (location.pathname === "/") setIsHome(true);
		else setIsHome(false);
		setShowNav(false);
		ReactGA.pageview(location.pathname);
	}, [location.pathname]);

	useEffect(() => {
		const timer = setTimeout(getNextBanner, 3000);

		return () => {
			clearTimeout(timer);
		};
	}, [banner]);

	const updateAppHeight = useCallback(() => {
		const doc = document.documentElement;
		doc.style.setProperty("--app-height", `${window.innerHeight}px`);
	}, [window.innerHeight]);

	const getNextBanner = () => {
		let next = banner + 1;
		setBanner(next > banners.length - 1 ? 0 : next);
	};

	const renderNavLink = ({ label, path, icon: Icon, iconWidth }) => (
		<li className="app__nav-item" key={path}>
			<NavLink
				exact
				to={path}
				activeClassName="app__nav-link--active"
				className="app__nav-link"
			>
				{label}
			</NavLink>
			<Icon fill="white" width={iconWidth} className="app__nav-icon" />
		</li>
	);

	return (
		<div
			className="app"
			style={{ backgroundImage: `url('${banners[banner]}')` }}
		>
			<div className="app__overlay"></div>
			<header className="app__header">
				<Link to="/">
					<object
						data={logo}
						className="app__logo"
						type="image/svg+xml"
						aria-label="Karen Okonkwo"
						tabIndex="-1"
						style={{ pointerEvents: "none" }}
					/>
				</Link>
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
						{navLinks.map((navLink) => renderNavLink(navLink))}
					</ul>
				</nav>
			</header>

			<TransitionGroup>
				<CSSTransition key={location.key} classNames="page-fade" timeout={300}>
					<Switch location={location}>
						<Route exact path="/about" component={AboutPage} />
						<Route exact path="/portfolio/:slug" component={PortfolioItem} />
						<Route exact path="/portfolio" component={PortfolioPage} />
						<Route exact path="/contact" component={ContactPage} />
						<Route exact path="/resume" component={ResumePage} />
						<Route exact path="/" component={LandingPage} />
						<Route component={PageNotFound} />
					</Switch>
				</CSSTransition>{" "}
			</TransitionGroup>
		</div>
	);
}

export default App;

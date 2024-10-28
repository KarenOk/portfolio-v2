export default {
	social: {
		email: "karenokonkwo29@gmail.com",
		github: "https://github.com/KarenOk",
		twitter: "https://twitter.com/karen_okonkwo",
		linkedIn: "https://www.linkedin.com/in/karenokonkwo/",
		instagram: "https://instagram.com/karen_okonkwo",
	},
	education: [
		{
			degree: "Full-Stack Developer Nanodegree",
			school: "Udacity, Inc.",
			timeline: { from: "May 2020", to: "Sept 2020" },
			summary: (
				<>
					<p>
						This nanodegree course extensively taught various technical skills
						needed to build database-backed APIs and web applications including:
					</p>
					<ul>
						<li>SQL and Data Modelling for the Web</li>
						<li> API Development and Documentation</li>
						<li> Identity and Access Management</li>
						<li> Server Deployment, Containerization and Testing</li>
					</ul>
					<p>
						Find the full syllabus
						<a
							href="https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd0044"
							target="_blank"
						>
							{" "}
							here.{" "}
						</a>
					</p>
				</>
			),
		},
		{
			degree: "Front-End Developer Nanodegree",
			school: "Udacity, Inc.",
			timeline: { from: "May 2018", to: "Nov 2018" },
			summary: (
				<>
					<p>
						This course taught comprehensively various technical skills
						important in frontend web development.
					</p>

					<p>
						Completed several projects encompassing the knowledge of:
						<ul>
							<li> HTML, CSS and JavaScript</li>
							<li> Responsive Web Design</li>
							<li> Object-Oriented Programming</li>
							<li> Web Accessibility</li>
							<li> Test-driven development</li>
							<li> Working with APIs</li>
							<li> Working with several frameworks (among others) </li>
						</ul>
					</p>
				</>
			),
		},
		{
			degree: "BSc. in Computer Engineering",
			school: "University of Lagos, Nigeria.",
			timeline: { from: "Nov 2015", to: "Jan 2020" },
			summary: (
				<>
					<p> Graduated with first class honors. </p>
					<p>
						Relevant Coursework:
						<ul>
							<li>Software Engineering Fundamentals</li>
							<li>Computer Programming</li>
							<li>Computer Architecture</li>
							<li>Algorithms and Data Structures</li>
							<li>Systems Programming</li>
							<li>Machine and Assembly Language Programming</li>
							<li>Digital Electronics</li>
							<li>Digital Computer Design</li>
							<li>Microprocessors & Microcomputers</li>
							<li>Database Management</li>
							<li>Computer Networks</li>
							<li>Information Theory & Coding</li>
							<li>Numerical Methods in Engineering</li>
							<li>Technical Communication </li>
						</ul>
					</p>
				</>
			),
		},
	],
	work: [
		{
			role: "Software Engineer",
			location: "London, United Kingdom",
			company: "Bloomberg L.P.",
			timeline: { from: "August 2021", to: "Present" },
			summary: [
				"Currently building and maintaining the BloombergNEF web platform that delivers critical data, analysis, and insights for energy, transportation, and industrial sectors. I leverage a versatile tech stack including NextJS, PHP, Kafka, Postgres, and Comdb2 to build, optimize, and maintain both frontend and backend systems, enabling real-time data streaming, secure data handling, and an enhanced user experience for finance and policy professionals globally.",
				"Built out full-stack tools/solutions within the Bloomberg Terminal to ensure that the most valuable content is being written and promoted by Bloomberg's 3000+ editorial staff worldwide to 300,000+ Bloomberg Terminal subscribers at all times using Python, Typescript, Kafka and Comdb2.",
				"Built solutions to privilege large datasets curated by Bloomberg's data journalists using Python and React.",
				"Leading feature and project executions, managing client and stakeholder communications to ensure alignment with product goals and timely delivery of high-quality software solutions.",
				"As scrum leader, orchestrated efficient sprint planning, daily stand-ups, and retrospectives, fostering a cohesive and agile team environment.",
				"Driving industry diversity initiatives by mentoring emerging talent, conducting technical workshops, running candidate interviews and leading outreach and recruitment to support a more inclusive tech environment.",
			],
		},
		{
			role: "Freelancer",
			location: "Lagos, Nigeria",
			company: "Freelancer (Contract Roles)",
			timeline: { from: "2018", to: "Present" },
			summary: [
				"Providing services that span from front-end development to full-stack application development. This involves handling the translation of various designs and wireframes into high-quality code for the front-end, architecting and developing fully functional, accessible, and responsive web applications using various tools and technologies for multiple clients.",
			],
		},
		{
			role: "Front-End Engineer",
			location: "Lagos, Nigeria",
			company: "Softcom Africa",
			timeline: { from: "May 2020", to: "July 2021" },
			summary: [
				"Built out the web application for the 3rd version of Eyowo (Eyowo X) using React and Typescript. Eyowo is a fintech product which provides online personal/business banking and other financial services to 600,000+ users in Nigeria.",
				"Built out the non-graduates (N-creative) web portal for the NPower programme - a job creation and skills empowerment scheme created by the Nigerian Government - for over 1 million applicants using React and Typescript. ",
				"Collaborated with other teams/disciplines including backend developers, product managers, designers, UI developers and QA testers to deliver value with each product.`",
			],
		},

		{
			role: "Software Engineer Intern",
			location: "Lagos, Nigeria",
			company: "GRIT Systems Engineering Ltd.",
			timeline: { from: "June 2018", to: "Dec 2018" },
			summary: [
				"Worked with the software team to build software to support the company's hardware products. \n",
				"Designed, developed and maintained the front-end application for the company's project using ReactJS, TypeScript and Material UI. \n",
				"Developed web services for user and order management using Flask.",
			],
		},
		{
			role: "Intern",
			location: "Lagos, Nigeria",
			company: "Eko Konnect Research and Education Initiative",
			timeline: { from: "Aug 2018", to: "Sept 2018" },
			summary: [
				"Worked primarily with Linux (UBUNTU) as an operating system, learning about and unlocking its benefits and applications in everyday development.",
			],
		},
	],
	projects: {
		"anozie-stores": {
			name: "Anozie Stores",
			description:
				"For this project, Anozie Stores requested for a website to manage their orders and allow users track their order status. This resulted in my building a full-stack application for this online store. The completion of this project streamlined and removed ambiguities with their order placement process, which led to a significant improvement in the shopping experience of their customers.",
			image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624824208/Portfolio/Project%20Screenshots/lj2yamj3s7gjnkzfsfdt.png",
			device_image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624824211/Portfolio/Project%20Screenshots/g4pjkwgfwyscbhjpbmss.png",
			gif_url: "",
			live_url: "https://anoziestores.com",
			github_url: null,
		},
		"whatsapp-web-clone": {
			name: "Whatsapp Web Clone",
			description:
				"Recreated the current Whatsapp Web's UI. Best part? It handles both dark or light mode depending on your device's settings. Implemented a simple backend service for communication with this clone using websocket technology as well.",
			image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624874114/Portfolio/Project%20Screenshots/p8yvzprijsyuro2h9gtb.png",
			gif_url:
				"https://res.cloudinary.com/karso/image/upload/v1624868920/Portfolio/Project%20GIFs/tu5chddivl89nactrovw.gif",
			live_url: "https://whatsapp-clone-web.netlify.app/",
			github_url: "https://github.com/KarenOk/whatsapp-web-clone",
		},
		"scribbles-blog": {
			name: "Scribbles Blog",
			description:
				"Scribbles is a full stack blog application built using Flask and React. It allows authors to manage blog posts while readers can read and comment on each blog post. The blog posts are also available to users that are not logged in, but they are limited to just reading - they can't comment. A lot of the posts in this blog contain gibberish, but its simple UI gives me a lot of joy.",
			image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624824211/Portfolio/Project%20Screenshots/hfqtds5eqokmn0kzonzg.png",
			gif_url:
				"https://res.cloudinary.com/karso/image/upload/v1613348098/Portfolio/Project%20GIFs/scribbles_blog_yauonc.gif",
			live_url: "https://scribbles-blog.netlify.app",
			github_url: "https://github.com/KarenOk/Scribbles-Blog",
		},
		gff: {
			name: "Geraldine's Flourish Foods",
			description:
				"Geraldine’s Flourish Foods, a food processing and packaging company requested a website to boost their online presence, serve as a source of information about their products and the services they offer, as well as a platform for customers to purchase their products. These requirements led to my building a full-stack application for this company. The resulting website offers the customers convenience as they can access any information about GFF they need and make any purchases of their products at the comfort of their own homes.",
			image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624824209/Portfolio/Project%20Screenshots/j0fhpctaxekdx0cyvwzq.png",
			device_image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624824213/Portfolio/Project%20Screenshots/ddb4asyngfqywy3nepif.png",
			gif_url: "",
			live_url: "https://geraldinesflourishfoods.com",
			github_url: "",
		},
		"abeg-app-clone": {
			name: "Abeg App Clone",
			description:
				"Was inspired by the clone of Abeg App built by Olamide Solanke and decided to clone his clone 🌚. Check out <a href='https://no-dey-beg.netlify.app' target='_blank'>his clone</a>.",
			image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624830633/Portfolio/Project%20Screenshots/zxw5lmye6kquwliloc3w.png",
			gif_url:
				"https://res.cloudinary.com/karso/image/upload/v1624831566/Portfolio/Project%20GIFs/qziv6b9uisal21nuhyxp.gif",
			live_url: "https://abeg-app-clone.netlify.app/",
			github_url: "https://github.com/KarenOk/abeg-app-clone",
		},
		pasteit: {
			name: "PasteIt",
			description:
				"PasteIt is an online clipboard which allows sharing of text over the internet by generating a unique URL. Others can access the contents of the paste via this URL. Built this because I got tired of opening Whatsapp each time I wanted to transfer text between my devices. This project makes use of ReactJS for the frontend, with Flask, PostgreSQL and SQLAlchemy for the backend.",
			image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624824211/Portfolio/Project%20Screenshots/qpnzlifod0wxff0lbtnr.png",
			device_image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624824211/Portfolio/Project%20Screenshots/joea9loffnpuaiyke4ff.png",
			gif_url: "",
			live_url: "https://pasteit.netlify.app",
			github_url: "https://github.com/KarenOk/Paste-It",
		},
		nuvle: {
			name: "Nuvle",
			description:
				"This project involved building a Minimum Viable Product for a restaurant management system. Built a fully functional, accessible and responsive UI for the product’s web application using React, Context API and Bootstrap 4. Integrated the web application with the backend by consuming RESTful API endpoints.",
			image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624824210/Portfolio/Project%20Screenshots/io2eagos5jgn1pig2ldh.png",
			device_image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624824210/Portfolio/Project%20Screenshots/ibjkeqd5iiqwwiqzd2ft.png",
			gif_url: "",
			live_url: "",
			github_url: "",
		},
		rentgage: {
			name: "Rentgage MVP",
			description:
				"This project involved building a Minimum Viable Product for a proptech startup company, Rentgage. Built a mobile application for the product's client-side as well as the backend to go along with it. <br /> <br /> Built using React Native and Node.",
			image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624835630/Portfolio/Project%20Screenshots/plbctazbvcnqs8ipbx7y.png",
			device_type: "mobile",
			gif_url:
				"https://res.cloudinary.com/karso/image/upload/v1624873055/Portfolio/Project%20GIFs/afxrhdy8ocehdoly0e5a.gif",
			live_url: "",
			github_url: "",
		},
		"task-ager": {
			name: "Task-ager: The task manager",
			description:
				"Task-ager, Task Manager, get it 😉? Task-ager is a web-based task management application built with ReactJS. This project utilizes service workers which makes the app available to use even when the user’s device is offline. Being a Progressive Web App, it can be installed and then launched by users just as if it were any native app.",
			image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624824212/Portfolio/Project%20Screenshots/esa1ebkfh76cwl1gzgtg.png",
			gif_url: "https://github.com/KarenOk/task-ager/raw/master/demo.gif",
			live_url: "https://task-ager.netlify.app",
			github_url: "https://github.com/KarenOk/task-ager",
		},
		"portfolio-v2": {
			name: "Portfolio V2",
			description:
				"Decided to work on a second version of my personal website. You could say this doubles as some sort of digital resumé. Built with ReactJS. Don’t forget to reach out!",
			image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624824213/Portfolio/Project%20Screenshots/wcva4dpewjnxgitda74u.png",
			device_image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624824211/Portfolio/Project%20Screenshots/bjlc498c6udk51hhu7fz.png",
			gif_url: "",
			live_url: "https://karenokonkwo.netlify.app.com",
			github_url: "https://github.com/KarenOk/portfolio-v2",
		},
		fyyur: {
			name: "Fyyur",
			description:
				"Fyyur is a musical venue and artist booking site that facilitates the discovery and bookings of shows between local performing artists and venues. This site lets you list new artists and venues, discover them, and list shows with artists as a venue owner. This project involved building out the data models to power the API endpoints for the Fyyur site by connecting to a PostgreSQL database for storing, querying, and creating information about artists and venues on Fyyur.",
			image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624824209/Portfolio/Project%20Screenshots/meqai7m3xn5n9tu6ne6i.png",
			gif_url: "https://github.com/KarenOk/Fyyur/raw/master/demo.gif",
			live_url: "",
			github_url: "https://github.com/KarenOk/Fyyur",
		},
		"classic-arcade-game": {
			name: "Classic Arcade Game",
			description:
				"My rendition of the popular arcade game Frogger. This was a project I worked on while taking the Udacity Front-End Developer Nanodegree course. The aim of this game is to get the player to the water as many times as you can before for the countdown stops, while also avoiding the enemy bugs. Use the arrow keys to move the player left, right, up or down. Colliding with an enemy bug resets your position. Try it out and make sure to share your high score with me 🌚.",
			image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624829434/Portfolio/Project%20Screenshots/tdwys7lyjznthkhxs5t1.png",
			gif_url:
				"https://github.com/KarenOk/Classic-Arcade-Game/raw/master/images/demo.gif",
			live_url: "https://karenok.github.io/classic-arcade-game",
			github_url: "https://github.com/KarenOk/Classic-Arcade-Game",
		},
		"online-examination-system": {
			name: "Online Examination System",
			description:
				"Built this as my final year project for my Computer Engineering Bachelor’s Degree. In this project, I attempted to address some problems associated with paper-based examinations and also take into account some problems that could arise in a computer-based examination (such as power/network failure). <br /> <br /> The resulting system has the following features: <ul> <li> web-based software which can automatically and accurately grade examinations</li><li> compatible on any platform</li><li> distributes questions randomly to each student to reduce cheating</li><li> allows random selection of questions</li><li> incorporates accessibility considerations </li><li> is able to handle network or power failure by providing resumption capabilities.</li> </ul> <br /> Built using HTML, CSS, JavaScript, Bootstrap, PHP, MySQL. <br /> <br />",
			image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624824208/Portfolio/Project%20Screenshots/jktqjkwvkfobkldxxkwa.png",
			gif_url:
				"https://github.com/KarenOk/Computer-Based-Examination-Software/raw/master/assets/images/demo.gif",
			live_url: "http://cbe-test.atwebpages.com/views/login.php",
			github_url:
				"https://github.com/KarenOk/Computer-Based-Examination-Software",
		},
		"contact-keeper": {
			name: "Contact Keeper",
			description:
				"Full Stack application to manage contacts. Includes authentication functionality. Built using the MERN (MongoDB, Express, React, Node) stack.",
			image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624824208/Portfolio/Project%20Screenshots/jtqjj4qyqtbtqis3tpdj.png",
			gif_url: "https://github.com/KarenOk/Contact-Keeper/raw/master/demo.gif",
			live_url: "http://contact-keeper-webapp.herokuapp.com/",
			github_url: "https://github.com/KarenOk/Contact-Keeper",
		},
		"github-finder": {
			name: "Github Finder",
			description:
				"In this project, I make use of GitHub's Developer API to search for and display basic information about Github users.",
			image_url:
				"https://res.cloudinary.com/karso/image/upload/v1624824210/Portfolio/Project%20Screenshots/lkdutjkll9xouz8pfnqr.png",
			gif_url: "https://github.com/KarenOk/Github-Finder/raw/master/demo.gif",
			live_url: "https://find-users-github.netlify.app",
			github_url: "https://github.com/KarenOk/Github-Finder",
		},
	},
};

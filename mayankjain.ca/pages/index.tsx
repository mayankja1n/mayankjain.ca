import type { NextPage } from "next";
import Head from "next/head";
import LeftBlock from "../components/organisms/LeftBlock";
import About from "../components/pages/About";
import Blog from "../components/pages/Blog";
import Contact from "../components/pages/Contact";
import Landing from "../components/pages/Landing";
import Portfolio from "../components/pages/Portfolio";
import Resume from "../components/pages/Resume";
import ScriptImporter from "../components/utils/ScriptImporter";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Mayank Jain's Personal Website</title>
			</Head>

			<body>
				<ScriptImporter />
				{/* <!-- Preloader --> */}
				{/* <div id="preloader">
					<div className="loading-area">
						<div className="circle"></div>
					</div>
					<div className="left-side"></div>
					<div className="right-side"></div>
				</div> */}

				{/* <!-- Main Site --> */}
				<div id="home">
					<div id="about">
						<div id="resume">
							<div id="portfolio">
								<div id="blog">
									<div id="contact">
										<div className="header-mobile">
											<a className="header-toggle">
												<i className="fas fa-bars"></i>
											</a>
											<h2>Mayank Jain</h2>
										</div>

										{/* <!-- Left Block --> */}
										<LeftBlock />

										{/* <!-- Home Section --> */}
										<Landing />

										{/* <!-- About Section --> */}
										<About />

										{/* <!-- Resume Section --> */}
										<Resume />

										{/* <!-- Portfolio Section --> */}
										<Portfolio />

										{/* <!-- Blog Section --> */}
										<Blog />

										{/* <!-- Contact Section --> */}
										<Contact />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</body>
		</>
	);
};

export default Home;

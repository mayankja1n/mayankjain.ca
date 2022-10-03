import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import PortfolioItem from "../components/atoms/PortfolioItem";
import SocialIcons from "../components/molecules/SocialIcons";
import LeftBlock from "../components/organisms/LeftBlock";
import About from "../components/pages/About";
import Blog from "../components/pages/Blog";
import Contact from "../components/pages/Contact";
import Portfolio from "../components/pages/Portfolio";
import Resume from "../components/pages/Resume";
import ScriptImporter from "../components/utils/ScriptImporter";

import { BLOG_THUMBNAILS, PROJECT_THUMBNAILS } from "../utils/imageImports";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
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
										<div
											className="pt-home"
											style={{
												backgroundImage: "url('/home-bg.jpg')",
											}}
										>
											{/* <!-- Particles --> */}
											<div id="particles-js"></div>

											<section>
												{/* <!-- Banner --> */}
												<div className="banner">
													<h1>Mayank Jain</h1>
													<p className="cd-headline rotate-1">
														<span></span>
														<span
															className="cd-words-wrapper"
															style={{
																textAlign: "center",
															}}
														>
															<b className="is-visible">
																Deep Learning Engineer
															</b>
															<b>
																Brain Computer Interface
																Developer
															</b>
															<b>Web Designer</b>
															<b>
																Augmented Reality
																Developer
															</b>
														</span>
													</p>
												</div>

												{/* <!-- Social --> */}
												<SocialIcons />
											</section>
										</div>

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

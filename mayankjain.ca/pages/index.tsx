import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import PortfolioItem from "../components/PortfolioItem";

import { BLOG_THUMBNAILS, PROJECT_THUMBNAILS } from "../utils/imageImports";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
			</Head>

			<body>
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
										<nav className="header-main ">
											{/* <!-- Logo --> */}
											<div className="logo">
												<Image
													src={"/logo.png"}
													alt=""
													width="50"
													height="75"
												/>
											</div>

											<ul>
												<li
													data-tooltip="home"
													data-position="top"
												>
													<a
														href="#home"
														className="icon-h fas fa-house-damage"
													></a>
												</li>
												<h6 className="nav-headings">Home</h6>

												<li
													data-tooltip="about"
													data-position="top"
												>
													<a
														href="#about"
														className="icon-a fas fa-user-tie"
													></a>
												</li>
												<h6 className="nav-headings">About</h6>

												<li
													data-tooltip="resume"
													data-position="top"
												>
													<a
														href="#resume"
														className="icon-r fas fa-address-book"
													></a>
												</li>
												<h6 className="nav-headings">Resume</h6>

												<li
													data-tooltip="portfolio"
													data-position="top"
												>
													<a
														href="#portfolio"
														className="icon-p fas fa-briefcase"
													></a>
												</li>
												<h6 className="nav-headings">
													Portfolio
												</h6>

												<li
													data-tooltip="blog"
													data-position="top"
												>
													<a
														href="#blog"
														className="icon-b fas fa-receipt"
													></a>
												</li>
												<h6 className="nav-headings">Blog</h6>

												<li
													data-tooltip="contact"
													data-position="bottom"
												>
													<a
														href="#contact"
														className="icon-c fas fa-envelope"
													></a>
												</li>
												<h6 className="nav-headings">Contact</h6>
											</ul>
										</nav>

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
												<div className="social">
													<ul>
														<li>
															<a href="https://www.linkedin.com/in/mayankj2112/">
																<i className="fab fa-linkedin"></i>
															</a>
														</li>
														<li>
															<a href="https://medium.com/@mayankj2112">
																<i className="fab fa-medium"></i>
															</a>
														</li>
														<li>
															<a href="https://www.youtube.com/channel/UC5V3dlAxPw8a_Uwt0-o7Dsw/videos">
																<i className="fab fa-youtube"></i>
															</a>
														</li>
														<li>
															<a href="https://www.github.com/Mayankj62">
																<i className="fab fa-github"></i>
															</a>
														</li>
													</ul>
												</div>
											</section>
										</div>

										{/* <!-- About Section --> */}
										<div className="page pt-about">
											<section className="container">
												{/* <!-- Section Title --> */}
												<div className="header-page mt-70 mob-mt">
													<h2>About Me</h2>
													<span></span>
												</div>

												{/* <!-- Personal Info Start --> */}
												<div className="row mt-100">
													{/* <!-- Information Block --> */}
													<div className="col-lg-12 col-sm-12">
														<div className="info box-1">
															<div className="row">
																<div className="col-lg-3 col-sm-4">
																	<div className="photo">
																		<Image
																			layout="fill"
																			alt=""
																			src="/user-photo.jpg"
																		/>
																	</div>
																</div>
																<div className="col-lg-9 col-sm-8">
																	<h4>Mayank Jain</h4>
																	<div className="loc">
																		<i className="fas fa-map-marked-alt"></i>{" "}
																		Toronto, Canada
																	</div>
																	<p>
																		{`I'm an exponential
																		tech developer
																		who's passionate
																		about using
																		emmerging
																		technologies to
																		solve real world
																		problems. In the
																		past I've
																		developed with
																		brain-computer
																		interfaces,
																		artificial
																		intelligence, and
																		augmented reality.`}
																	</p>
																	<p>
																		{`I've worked with
																		several companies
																		including Walmart,
																		TribalScale, IDUN
																		Technologies, and
																		Loyalty One.`}
																	</p>
																</div>

																{/* <!-- Icon Info ---> */}

																<div className="col-lg-3 col-sm-4">
																	<div className="info-icon">
																		<i className="fas fa-award"></i>
																		<div className="desc-icon">
																			<h6>
																				8 Years
																				Job
																			</h6>
																			<p>
																				Experience
																			</p>
																		</div>
																	</div>
																</div>

																{/* <!-- Icon Info ---> */}
																<div className="col-lg-3 col-sm-4">
																	<div className="info-icon">
																		<i className="fas fa-certificate"></i>
																		<div className="desc-icon">
																			<h6>
																				500+
																				Projects
																			</h6>
																			<p>
																				Completed
																			</p>
																		</div>
																	</div>
																</div>

																{/* <!-- Icon Info ---> */}
																<div className="col-lg-3 col-sm-4">
																	<div className="info-icon">
																		<i className="fas fa-user-astronaut"></i>
																		<div className="desc-icon">
																			<h6>
																				Freelance
																			</h6>
																			<p>
																				Available
																			</p>
																		</div>
																	</div>
																</div>

																<div className="col-lg-3 col-sm-12 pt-50">
																	<a
																		href="#"
																		className="btn-st"
																	>
																		Download CV
																	</a>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div className="row mt-100">
													{/* <!-- Header Block --> */}
													<div className="col-md-12 col-sm-12">
														<div className="header-box mb-50">
															<h3>Collaborations</h3>
														</div>
													</div>
												</div>
											</section>
										</div>

										{/* <!-- Resume Section --> */}
										<div className="page pt-resume ">
											<section className="container">
												{/* <!-- Section Title --> */}
												<div className="header-page mt-70 mob-mt">
													<h2>Resume</h2>
													<span></span>
												</div>

												{/* <!-- Experience & Education Row Start --> */}
												<div className="row mt-100">
													{/* <!-- Experience Column Start --> */}
													<div className="col-lg-6 col-sm-12">
														{/* <!-- Header Block --> */}
														<div className="header-box mb-50">
															<h3>Experience</h3>
														</div>

														<div className="experience box-1">
															{/* <!-- Experience Item --> */}
															<div className="item">
																<div className="main">
																	<h4>Neuroengineer</h4>
																	<p>
																		<i className="far fa-calendar-alt"></i>
																		June 2020 -
																		Present &nbsp; |
																		&nbsp;{" "}
																		<i className="fas fa-briefcase"></i>
																		IDUN Technologies
																	</p>
																	<p></p>
																	<p>
																		<i className="fas fa-globe">
																			{" "}
																			Zurich,
																			Switzerland
																		</i>
																	</p>
																</div>
																<p>
																	Created EEG hardware
																	designs,
																	brain-controlled
																	games, programatic 3D
																	animations, and
																	conducted EEG research
																	projects.
																</p>
															</div>

															{/* <!-- Experience Item --> */}
															<div className="item">
																<div className="main">
																	<h4>
																		Innovation
																		Developer
																	</h4>
																	<p>
																		<i className="far fa-calendar-alt"></i>
																		July 2019 - August
																		2019 &nbsp; |
																		&nbsp;{" "}
																		<i className="fas fa-briefcase"></i>
																		Zero Gravity Labs
																		(Loyalty One)
																	</p>
																	<p>
																		<i className="fas fa-globe">
																			{" "}
																			Toronto,
																			Canada
																		</i>
																	</p>
																</div>
																<p>
																	In the summer of 2019,
																	I got a job as a
																	highschool intern at
																	ZGL, the innovation
																	lab for Loyalty One.
																	During my 2 months
																	there, I piloted an
																	Augmented Reality app
																	for Airmiles that used
																	ARKit and artificial
																	intelligence to create
																	a virtual pet that
																	interacted with the
																	real world.
																</p>
															</div>

															{/* <!-- Experience Item --> */}
															<div className="item">
																<div className="main">
																	<h4>Disruptor</h4>
																	<p>
																		<i className="far fa-calendar-alt"></i>
																		2019 - 2020 | The
																		Knowledge Society
																	</p>
																</div>
																<div className="main">
																	<h4>Innovator</h4>
																	<p>
																		<i className="far fa-calendar-alt"></i>
																		2018 - 2019 | The
																		Knowledge Society
																	</p>
																</div>
																<p>
																	{`I am an alumni of The
																	Knowlege Society, a
																	human accelerator
																	program that gives
																	teenagers the tools to
																	solve the world's
																	biggest problems.`}
																</p>
															</div>

															{/* <!-- Experience Item --> */}
															<div className="item">
																<div className="main">
																	<h4>Freelancer</h4>
																	<p>
																		<i className="far fa-calendar-alt"></i>
																		2018 - Present
																	</p>
																</div>
																<p>
																	I work as a freelance
																	machine learning and
																	web developer
																</p>
															</div>
														</div>
													</div>

													{/* <!-- Education Column Start --> */}
													<div className="col-lg-6 col-sm-12">
														{/* <!-- Header Block --> */}
														<div className="header-box mb-50 mob-box-mt">
															<h3>Education</h3>
														</div>

														<div className="experience box-2">
															{/* <!-- Education Item --> */}
															<div className="item">
																<div className="main">
																	<h4>
																		{`Bachelor's of
																		Computer Science`}
																	</h4>
																	<p>
																		<i className="far fa-calendar-alt"></i>
																		2020 - 2025 &nbsp;
																		| &nbsp;{" "}
																		<i className="fas fa-graduation-cap"></i>{" "}
																		University of
																		Waterloo
																	</p>
																</div>
																<p>
																	{`Recieved a President's
																	Scholarship. Part of
																	the Digital Hardware
																	Specialization.`}
																</p>
															</div>

															{/* <!-- Education Item --> */}
															<div className="item">
																<div className="main">
																	<h4>
																		Deep Learning &
																		Computer Vision
																		Nanodegree
																	</h4>
																	<p>
																		<i className="far fa-calendar-alt"></i>
																		2019 - Present
																		&nbsp; | &nbsp;{" "}
																		<i className="fas fa-graduation-cap"></i>{" "}
																		Udacity
																	</p>
																</div>
																<p>
																	{`I receieved a full
																	scholarships for
																	Udacity's Nanodegrees.
																	The courses were
																	co-created by
																	Facebook, AWS, Nvidea,
																	and Affectiva.`}
																</p>
															</div>

															{/* <!-- Education Item --> */}
															<div className="item">
																<div className="main">
																	<h4>
																		Neuroscience 101
																	</h4>
																	<p>
																		<i className="far fa-calendar-alt"></i>
																		2018-2019 &nbsp;|
																		&nbsp;{" "}
																		<i className="fas fa-graduation-cap"></i>{" "}
																		University of
																		Toronto
																	</p>
																</div>
																<p>
																	I attended weekly
																	lectures at the
																	University of Toronto
																	for their course on
																	neuroscience. I
																	learned about the
																	science behind all the
																	processes that the
																	brain carries out.
																</p>
															</div>

															{/* <!-- Education Item --> */}
															<div className="item">
																<div className="main">
																	<h4>
																		High School Degree
																	</h4>
																	<p>
																		<i className="far fa-calendar-alt"></i>
																		2016 - 2020 &nbsp;
																		| &nbsp;{" "}
																		<i className="fas fa-graduation-cap"></i>{" "}
																		Mentor College
																	</p>
																</div>
																<p>
																	Played rugby,
																	football, skiing, and
																	track.
																</p>
															</div>
														</div>
													</div>
												</div>

												{/* <!-- Skills Row Start --> */}
												<div className="row mt-100 mb-100">
													{/* <!-- Header Block --> */}
													<div className="col-md-12 col-sm-12">
														<div className="header-box mb-50">
															<h3>Skills</h3>
														</div>

														<div className="box-2">
															<div className="row">
																{/* <!-- Interests Item --> */}
																<div className="col-lg-3 col-sm-6">
																	<div className="inter-icon">
																		<i className="fab fa-python"></i>
																		<div className="desc-inter">
																			<h6>
																				Python
																			</h6>
																		</div>
																	</div>
																</div>

																{/* <!-- Interests Item --> */}
																<div className="col-lg-3 col-sm-6">
																	<div className="inter-icon">
																		<i className="fab fa-app-store"></i>
																		<div className="desc-inter">
																			<h6>
																				iOS &
																				ARKit3
																			</h6>
																		</div>
																	</div>
																</div>

																{/* <!-- Interests Item --> */}
																<div className="col-lg-3 col-sm-6">
																	<div className="inter-icon">
																		<i className="fas fa-paint-brush"></i>
																		<div className="desc-inter">
																			<h6>
																				Photoshop
																			</h6>
																		</div>
																	</div>
																</div>

																{/* <!-- Interests Item --> */}
																<div className="col-lg-3 col-sm-6">
																	<div className="inter-icon">
																		<i className="fas fa-brain"></i>
																		<div className="desc-inter">
																			<h6>
																				Neurotech
																			</h6>
																		</div>
																	</div>
																</div>

																{/* <!-- Interests Item --> */}
																<div className="col-lg-3 col-sm-6">
																	<div className="inter-icon">
																		<i className="fas fa-tv"></i>
																		<div className="desc-inter">
																			<h6>
																				HTML/CSS/JS
																			</h6>
																		</div>
																	</div>
																</div>

																{/* <!-- Interests Item --> */}
																<div className="col-lg-3 col-sm-6">
																	<div className="inter-icon">
																		<i className="fas fa-pepper-hot"></i>
																		<div className="desc-inter">
																			<h6>Flask</h6>
																		</div>
																	</div>
																</div>

																{/* <!-- Interests Item --> */}
																<div className="col-lg-3 col-sm-6">
																	<div className="inter-icon">
																		<i className="fas fa-gamepad"></i>
																		<div className="desc-inter">
																			<h6>Unity</h6>
																		</div>
																	</div>
																</div>

																{/* <!-- Interests Item --> */}
																<div className="col-lg-3 col-sm-6">
																	<div className="inter-icon">
																		<i className="fas fa-microchip"></i>
																		<div className="desc-inter">
																			<h6>
																				Deep
																				Learning
																			</h6>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</section>
										</div>

										{/* <!-- Portfolio Section --> */}
										<div className="page pt-portfolio">
											<section className="container">
												{/* <!-- Section Title --> */}
												<div className="header-page mt-70 mob-mt">
													<h2>Portfolio</h2>
													<span></span>
												</div>

												{/* <!-- Portfolio Filter Row Start --> */}
												<div className="row mt-100">
													<div className="col-lg-12 col-sm-12 portfolio-filter">
														<ul>
															<li
																className="active"
																data-filter="*"
															>
																All
															</li>
															<li data-filter=".ai">AI</li>
															<li data-filter=".bci">
																Brain-computer Interfaces
															</li>
															<li data-filter=".ar">AR</li>
															<li data-filter=".web">
																Wesbites
															</li>
														</ul>
													</div>
												</div>

												{/* <!-- Portfolio Item Row Start --> */}
												<div className="row portfolio-items mt-100 mb-100">
													{/* <!-- Templates	--> */}
													<div className="item col-lg-4 col-sm-6 graphic">
														<figure>
															<Image
																layout="fill"
																alt=""
																src="/portfolio/img.jpg"
															/>
															<figcaption>
																<h3>
																	Project Name <br />
																	<span className="pt-caption">
																		Caption
																	</span>
																</h3>
																<p>Graphic</p>
																<i className="fas fa-image"></i>
																<a
																	className="image-link"
																	href="/portfolio/img-1.jpg"
																></a>
															</figcaption>
														</figure>
													</div>

													<div className="item col-lg-4 col-sm-6 brand">
														<figure>
															<Image
																layout="fill"
																alt=""
																src="/portfolio/img.jpg"
															/>
															<figcaption>
																<h3>
																	Project Name <br />
																	<span className="pt-caption">
																		Caption
																	</span>
																</h3>
																<p>Graphic</p>
																<i className="fas fa-video"></i>
																<a
																	className="video-link"
																	href="https://www.youtube.com/watch?v=k_okcNVZqqI"
																></a>
															</figcaption>
														</figure>
													</div>

													<div className="item col-lg-4 col-sm-6 bci">
														<figure>
															<Image
																layout="fill"
																alt=""
																src="/portfolio/emg-csgo.jpg"
															/>
															<figcaption>
																<h3>
																	EMG CS:GO
																	<br />
																	<span className="pt-caption">
																		Playing CS:GO
																		completely using
																		bio-signals from
																		my brain.
																	</span>
																</h3>
																<p>BCI</p>
																<i className="fas fa-brain"></i>
																<a
																	className="video-link"
																	href="https://www.youtube.com/watch?v=uhCTg8XmQaQ"
																></a>
															</figcaption>
														</figure>
													</div>

													<div className="item col-lg-4 col-sm-6 bci">
														<figure>
															<Image
																layout="fill"
																alt=""
																src="/portfolio/fbwg.jpg"
															/>
															<figcaption>
																<h3>
																	Brain-controlled FB &
																	WG
																	<br />
																	<span className="pt-caption">
																		Using EEG to let 2
																		people collaborate
																		on a
																		brain-controlled
																		game
																	</span>
																</h3>
																<p>BCI</p>
																<i className="fas fa-brain"></i>
																<a
																	className="video-link"
																	href="https://www.youtube.com/watch?v=3XYSKy4gaY4"
																></a>
															</figcaption>
														</figure>
													</div>

													<div className="item col-lg-4 col-sm-6 ai">
														<figure>
															<Image
																alt=""
																src={
																	PROJECT_THUMBNAILS.yearbook
																}
															/>
															<figcaption>
																<h3>
																	AI Yearbook Quote{" "}
																	<br />
																	<span className="pt-caption">
																		I created an AI to
																		write my
																		highschool
																		yearbook quote!
																	</span>
																</h3>
																<p>AI</p>
																<i className="fas fa-cogs"></i>
																<a
																	className="image-link"
																	href="/portfolio/ai-yearbook-quote.jpg"
																></a>
															</figcaption>
														</figure>
													</div>

													<PortfolioItem
														title="AI Yearbook Quote"
														thumbnail={
															PROJECT_THUMBNAILS.yearbook
														}
														caption={
															"I created an AI to write my highschool yearbook quote!"
														}
														tags={["ai"]}
														image
														link="portfolio/ai-yearbook-quote.jpg"
														hashtag="AI"
														icon={
															<i className="fas fa-cogs"></i>
														}
													/>

													{/* <div className="item col-lg-4 col-sm-6 ar">
														<figure>
															<Image
																layout="fill"
																alt=""
																src="/portfolio/airpets.jpg"
															/>
															<figcaption>
																<h3>
																	Airpets
																	<br />
																	<span className="pt-caption">
																		Play with a
																		virtual pet in AR
																	</span>
																</h3>
																<p>AR</p>
																<i className="fas fa-mobile-alt"></i>
																<a
																	className="video-link"
																	href="https://www.youtube.com/watch?v=hj5dynbmfpw"
																></a>
															</figcaption>
														</figure>
													</div> */}

													<PortfolioItem
														title="AirPets"
														thumbnail={
															PROJECT_THUMBNAILS.airpets
														}
														caption={
															"Play with a virtual pet in AR"
														}
														tags={["ar"]}
														video
														link="https://www.youtube.com/watch?v=hj5dynbmfpw"
														hashtag="AR"
														icon={
															<i className="fas fa-mobile-alt"></i>
														}
													/>

													{/* <div className="item col-lg-4 col-sm-6 ar">
														<figure>
															<Image
																layout="fill"
																alt=""
																src="/portfolio/ar-shooter.jpg"
															/>
															<figcaption>
																<h3>
																	AR Shooter Game <br />
																	<span className="pt-caption">
																		Shooting targets
																		in AR
																	</span>
																</h3>
																<p>AR</p>
																<i className="fas fa-mobile-alt"></i>
																<a
																	className="video-link"
																	href="https://www.youtube.com/watch?v=XyKXg3c5bj8"
																></a>
															</figcaption>
														</figure>
													</div> */}

													<PortfolioItem
														title="AR Shooter Game"
														thumbnail={
															PROJECT_THUMBNAILS.shooter
														}
														caption={"Shooting targets in AR"}
														tags={["ar"]}
														video
														link="https://www.youtube.com/watch?v=XyKXg3c5bj8"
														hashtag="AR"
														icon={
															<i className="fas fa-mobile-alt"></i>
														}
													/>

													{/* <div className="item col-lg-4 col-sm-6 web">
														<figure>
															<Image
																layout="fill"
																alt=""
																src="/portfolio/synex.jpg"
															/>
															<figcaption>
																<h3>
																	Synex Medical Wesbite
																	<br />
																	<span className="pt-caption">
																		The website for a
																		Toronto biotech
																		startup
																	</span>
																</h3>
																<p>Websites</p>
																<i className="fas fa-desktop"></i>
																<a
																	className=""
																	href="https://synexmedical.com"
																></a>
															</figcaption>
														</figure>
													</div> */}

													<PortfolioItem
														title="Synex Medical Wesbite"
														thumbnail={
															PROJECT_THUMBNAILS.synex
														}
														caption={
															"The website for a Toronto biotech startup"
														}
														tags={["web"]}
														link="https://synexmedical.com"
														hashtag="Websites"
														icon={
															<i className="fas fa-desktop"></i>
														}
													/>

													{/* <div className="item col-lg-4 col-sm-6 ar">
														<figure>
															<Image
																layout="fill"
																alt=""
																src="/portfolio/ar-basketball.jpg"
															/>
															<figcaption>
																<h3>
																	AR Basketball <br />
																	<span className="pt-caption">
																		Playing basketball
																		in AR
																	</span>
																</h3>
																<p>AR</p>
																<i className="fas fa-mobile-alt"></i>
																<a
																	className="video-link"
																	href="https://www.youtube.com/watch?v=EDHwj74XLdg"
																></a>
															</figcaption>
														</figure>
													</div> */}

													<PortfolioItem
														title="AR Basketball"
														thumbnail={
															PROJECT_THUMBNAILS.basketball
														}
														caption={
															"Playing basketball in AR"
														}
														tags={["ar"]}
														link="https://www.youtube.com/watch?v=EDHwj74XLdg"
														video
														hashtag="AR"
														icon={
															<i className="fas fa-mobile-alt"></i>
														}
													/>

													{/* <div className="item col-lg-4 col-sm-6 ai">
														<figure>
															<Image
																layout="fill"
																alt=""
																src="/portfolio/grimm-writer.jpg"
															/>
															<figcaption>
																<h3>
																	Grimm Writer <br />
																	<span className="pt-caption">
																		Revive the writing
																		of dead authors
																	</span>
																</h3>
																<p>AI</p>
																<i className="fas fa-cogs"></i>
																<a
																	className=""
																	href="Projects/GrimmWriter.html"
																></a>
															</figcaption>
														</figure>
													</div> */}

													<PortfolioItem
														title="Grimm Writer"
														thumbnail={
															PROJECT_THUMBNAILS.grimm
														}
														caption={
															"Revive the writing of dead authors"
														}
														tags={["ai"]}
														link="Projects/GrimmWriter.html"
														hashtag="AI"
														icon={
															<i className="fas fa-cogs"></i>
														}
													/>

													{/* <div className="item col-lg-4 col-sm-6 ai">
														<figure>
															<Image
																layout="fill"
																alt=""
																src="/portfolio/stock-predictor.jpg"
															/>
															<figcaption>
																<h3>
																	Facebook Stock
																	Predictor <br />
																	<span className="pt-caption">
																		Over 35% ROI using
																		AI
																	</span>
																</h3>
																<p>AI</p>
																<i className="fas fa-cogs"></i>
																<a
																	className=""
																	href="https://github.com/Mayankj62/Facebook-Stock-Predictor"
																></a>
															</figcaption>
														</figure>
													</div> */}

													<PortfolioItem
														title="Facebook Stock Predictor"
														thumbnail={
															PROJECT_THUMBNAILS.stock
														}
														caption={"Over 35% ROI using AI"}
														tags={["ai"]}
														link="https://github.com/Mayankj62/Facebook-Stock-Predictor"
														hashtag="AI"
														icon={
															<i className="fas fa-cogs"></i>
														}
													/>

													{/* <div className="item col-lg-4 col-sm-6 web">
														<figure>
															<Image
																layout="fill"
																alt=""
																src="/portfolio/100thx.jpg"
															/>
															<figcaption>
																<h3>
																	100THX Wesbite
																	<br />
																	<span className="pt-caption">
																		The website for a
																		Toronto cannabis
																		startup
																	</span>
																</h3>
																<p>Websites</p>
																<i className="fas fa-desktop"></i>
																<a
																	className=""
																	href="https://100thx.ca"
																></a>
															</figcaption>
														</figure>
													</div> */}

													<PortfolioItem
														title="100THX Wesbite"
														thumbnail={PROJECT_THUMBNAILS.thx}
														caption={
															"The website for a Toronto cannabis startup"
														}
														tags={["web"]}
														link="https://100thx.ca"
														hashtag="Websites"
														icon={
															<i className="fas fa-desktop"></i>
														}
													/>

													{/* <div className="item col-lg-4 col-sm-6 ai">
														<figure>
															<Image
																layout="fill"
																alt=""
																src="/portfolio/malarAI.jpg"
															/>
															<figcaption>
																<h3>
																	Malar.AI <br />
																	<span className="pt-caption">
																		Diagnosing Malaria
																		better than
																		doctors
																	</span>
																</h3>
																<p>AI</p>
																<i className="fas fa-cogs"></i>
																<a
																	className=""
																	href="Projects/MalarAI.html"
																></a>
															</figcaption>
														</figure>
													</div> */}

													<PortfolioItem
														title="Malar.AI"
														thumbnail={
															PROJECT_THUMBNAILS.malaria
														}
														caption={
															"Diagnosing Malaria better than doctors"
														}
														tags={["ai"]}
														link="Projects/MalarAI.html"
														hashtag="AI"
														icon={
															<i className="fas fa-cogs"></i>
														}
													/>

													{/* <!-- Portfolio Item --> */}
													{/* <div className="item col-lg-4 col-sm-6 bci">
														<figure>
															<Image
																layout="fill"
																alt=""
																src="/portfolio/neurospace.jpg"
															/>
															<figcaption>
																<h3>NeuroSpace</h3>
																<p>BCIs</p>
																<i className="fas fa-brain"></i>
																<a
																	className=""
																	href="Projects/Neurospace.html"
																></a>
															</figcaption>
														</figure>
													</div> */}

													<PortfolioItem
														title="Neurospace"
														thumbnail={
															PROJECT_THUMBNAILS.neurospace
														}
														caption={
															"Neurofeedback therapy for astronauts"
														}
														tags={["bci"]}
														link="Projects/Neurospace.html"
														hashtag="BCIs"
														icon={
															<i className="fas fa-brain"></i>
														}
													/>

													{/* <!-- Portfolio Item --> */}
													{/* <div className="item col-lg-4 col-sm-6 bci">
														<figure>
															<Image
																layout="fill"
																alt=""
																src="/portfolio/intelom.jpg"
															/>
															<figcaption>
																<h3>
																	Intelom <br />
																	<span className="pt-caption">
																		Music curated by
																		your brain
																	</span>
																</h3>
																<p>BCIs</p>
																<i className="fas fa-brain"></i>
																<a
																	className=""
																	href="Projects/Intelom/intelom.html"
																></a>
															</figcaption>
														</figure>
													</div> */}

													<PortfolioItem
														title="Intelom"
														thumbnail={
															PROJECT_THUMBNAILS.intelom
														}
														caption="Music curated by
                            your brain"
														tags={["bci"]}
														link="Projects/Intelom/intelom.html"
														hashtag="BCIs"
														icon={
															<i className="fas fa-brain"></i>
														}
													/>

													{/* <!-- Portfolio Item --> */}
													{/* <div className="item col-lg-4 col-sm-6 bci">
														<figure>
															<Image
																layout="fill"
																alt=""
																src="/portfolio/brain-to-speech.png"
															/>
															<figcaption>
																<h3>
																	Brain to Speech
																	Translator <br />
																	<span className="pt-caption">
																		Speak using
																		brainwaves
																	</span>
																</h3>
																<p>BCIs</p>
																<i className="fas fa-brain"></i>
																<a
																	className=""
																	href="Projects/BrainToSpeech.html"
																></a>
															</figcaption>
														</figure>
													</div> */}

													<PortfolioItem
														title="Brain to Speech
																	Translator"
														thumbnail={PROJECT_THUMBNAILS.b2s}
														caption="Oral speech using
                            brainwaves"
														tags={["bci"]}
														link="Projects/BrainToSpeech.html"
														hashtag="BCIs"
														icon={
															<i className="fas fa-brain"></i>
														}
													/>

													{/* <!-- Portfolio Item -->
													<div className="item col-lg-4 col-sm-6 bci">
														<figure>
															<Image
																layout="fill"
																alt=""
																src="/portfolio/snake.png"
															/>
															<figcaption>
																<h3>
																	EEG Snake <br />
																	<span className="pt-caption">
																		Playing games with
																		your brain
																	</span>
																</h3>
																<p>BCIs</p>
																<i className="fas fa-brain"></i>
																<a
																	className=""
																	href="Projects/Snake.html"
																></a>
															</figcaption>
														</figure>
													</div> */}

													<PortfolioItem
														title="EEG Snake"
														thumbnail={
															PROJECT_THUMBNAILS.snake
														}
														caption="Playing Snake with
                            your Brain"
														tags={["bci"]}
														link="Projects/Snake.html"
														hashtag="BCIs"
														icon={
															<i className="fas fa-brain"></i>
														}
													/>

													<PortfolioItem
														title="Leasure"
														thumbnail={
															PROJECT_THUMBNAILS.leasure
														}
														caption="Tribalscale Ideathon Winner"
														tags={["transportation"]}
														video
														link="https://www.youtube.com/watch?v=7uB2oxbe-rA"
														hashtag="Transportation"
														icon={
															<i className="fas fa-car-alt"></i>
														}
													/>

													{/* <!-- Portfolio Item --> */}
													{/* <div className="item col-lg-4 col-sm-6 transportation">
														<figure>
															<Image
																layout="fill"
																alt=""
																src="/portfolio/leasure.jpg"
															/>
															<figcaption>
																<h3>
																	Leasure <br />
																	<span className="pt-caption">
																		Tribalscale
																		Ideathon Winner
																	</span>
																</h3>
																<p>Transportation</p>
																<i className="fas fa-car-alt"></i>
																<a
																	className="video-link"
																	href="https://www.youtube.com/watch?v=7uB2oxbe-rA"
																></a>
															</figcaption>
														</figure>
													</div> */}

													{/* <!-- Portfolio Item  -->*/}
													{/* <div className="item col-lg-4 col-sm-6 bci vr">
														<figure>
															<Image
																layout="fill"
																alt=""
																src="/portfolio/template-3.jpg"
															/>
															<figcaption>
																<h3>Myo Ball</h3>
																<p>VR</p>
																<i className="fas fa-vr-cardboard"></i>
																<a
																	className="image-link"
																	href="/portfolio/img-9.jpg"
																></a>
															</figcaption>
														</figure>
													</div> */}
												</div>
											</section>
										</div>

										{/* <!-- Blog Section --> */}
										<div className="page pt-blog">
											<section className="container">
												{/* <!-- Section Title --> */}
												<div className="header-page mt-70 mob-mt">
													<h2>Blog</h2>
													<span></span>
												</div>

												{/* <!-- Blog Row Start --> */}
												<div className="row blog-masonry mt-100 mb-50">
													{/*                           
													<div className="col-lg-4 col-sm-6">                            
														<div className="blog-item">
															<div className="thumbnail">
																<a href="blog-posts/1.html">
																	<Image
																		alt=""
																		src={BLOG_THUMBNAILS[1]}
																	/>
																</a>
															</div>
															<h4>
																<a href="blog-posts/1.html">
																	Road to success
																</a>
															</h4>
															<ul>
																<li>15 April 2019</li>
																<li>Lifestyle</li>
																<li>x min read</li>
															</ul>
														</div>
													</div>

													<div className="col-lg-4 col-sm-6">
														<div className="blog-item">
															<div className="thumbnail">
																<a href="blog-posts/1.html">
																	<Image
																		layout="fill"
																		alt=""
																		src="/blog/img-2.jpg"
																	/>
																</a>
																<a
																	href="https://www.youtube.com/watch?v=k_okcNVZqqI"
																	className="btn-play"
																></a>
															</div>
															<h4>
																<a href="blog-posts/1.html">
																	Road to success
																</a>
															</h4>
															<ul>
																<li>
																	<a href="#">
																		10 March 2019
																	</a>
																</li>
																<li>
																	<a href="#">
																		Lifestyle
																	</a>
																</li>
															</ul>
															<div className="blog-btn">
																<a
																	href="blog-posts/1.html"
																	className="btn-st"
																>
																	Read More
																</a>
															</div>
														</div>
													</div> */}

													{/* <!-- Blog Item--> */}

													<div className="col-lg-4 col-sm-6">
														<div className="blog-item">
															<div className="thumbnail">
																<a href="blog-posts/how-to-evaluate-your-ai.html">
																	<Image
																		alt=""
																		src={
																			BLOG_THUMBNAILS[19]
																		}
																	/>
																</a>
															</div>
															<h4>
																<a href="blog-posts/how-to-evaluate-your-ai.html">
																	How to Evaluate your
																	AI
																</a>
															</h4>
															<ul>
																<li>9 Aug 2020</li>
																<li>AI</li>
																<li>3 min read</li>
															</ul>
														</div>
													</div>

													<div className="col-lg-4 col-sm-6">
														<div className="blog-item">
															<div className="thumbnail">
																<a href="blog-posts/what-fnirs-is-and-how-it-works.html">
																	<Image
																		alt=""
																		src={
																			BLOG_THUMBNAILS[18]
																		}
																	/>
																</a>
															</div>
															<h4>
																<a href="blog-posts/what-fnirs-is-and-how-it-works.html">
																	What fNIRS is and How
																	it Works
																</a>
															</h4>
															<ul>
																<li>15 May 2020</li>
																<li>BCIs</li>
																<li>5 min read</li>
															</ul>
														</div>
													</div>

													{/* <!-- Blog Item--> */}
													<div className="col-lg-4 col-sm-6">
														<div className="blog-item">
															<div className="thumbnail">
																<a href="blog-posts/nlp-from-watermelon-boxes-to-word-embeddings.html">
																	<Image
																		alt=""
																		src={
																			BLOG_THUMBNAILS[17]
																		}
																	/>
																</a>
															</div>
															<h4>
																<a href="blog-posts/nlp-from-watermelon-boxes-to-word-embeddings.html">
																	NLP: From Watermelon
																	Boxes to Word
																	Embeddings
																</a>
															</h4>
															<ul>
																<li>22 April 2020</li>
																<li>AI</li>
																<li>7 min read</li>
															</ul>
														</div>
													</div>

													{/* <!-- Blog Item--> */}
													<div className="col-lg-4 col-sm-6">
														<div className="blog-item">
															<div className="thumbnail">
																<a href="blog-posts/16.html">
																	<Image
																		alt=""
																		src={
																			BLOG_THUMBNAILS[16]
																		}
																	/>
																</a>
															</div>
															<h4>
																<a href="blog-posts/16.html">
																	The Future of Battery
																	Technology
																</a>
															</h4>
															<ul>
																<li>10 November 2019</li>
																<li>Energy</li>
																<li>7 min read</li>
															</ul>
														</div>
													</div>

													{/* <!-- Blog Item --> */}
													<div className="col-lg-4 col-sm-6">
														<div className="blog-item">
															<div className="thumbnail">
																<a href="blog-posts/15.html">
																	<Image
																		alt=""
																		src={
																			BLOG_THUMBNAILS[15]
																		}
																	/>
																</a>
															</div>
															<h4>
																<a href="blog-posts/15.html">
																	Talk to Smart People
																	and Figure Shit Out
																</a>
															</h4>
															<ul>
																<li>20 Oct 2019</li>
																<li>Philosophy</li>
																<li>3 min read</li>
															</ul>
														</div>
													</div>

													{/* <!-- Blog Item --> */}
													<div className="col-lg-4 col-sm-6">
														<div className="blog-item">
															<div className="thumbnail">
																<a href="blog-posts/14.html">
																	<Image
																		alt=""
																		src={
																			BLOG_THUMBNAILS[14]
																		}
																	/>
																</a>
															</div>
															<h4>
																<a href="blog-posts/14.html">
																	IoT Has Disrupted the
																	way we Feed our Planet
																</a>
															</h4>
															<ul>
																<li>16 Oct 2019</li>
																<li>IoT</li>
																<li>5 min read</li>
															</ul>
														</div>
													</div>

													{/* <!-- Blog Item--> */}
													<div className="col-lg-4 col-sm-6">
														<div className="blog-item">
															<div className="thumbnail">
																<a href="blog-posts/7.html">
																	<Image
																		alt=""
																		src={
																			BLOG_THUMBNAILS[7]
																		}
																	/>
																</a>
															</div>
															<h4>
																<a href="blog-posts/7.html">
																	Using AI to Predict
																	Facebook’s Stock Price
																</a>
															</h4>
															<ul>
																<li>4 March 2019</li>
																<li>AI</li>
																<li>5 min read</li>
															</ul>
														</div>
													</div>

													{/* <!-- Blog Item--> */}
													<div className="col-lg-4 col-sm-6">
														<div className="blog-item">
															<div className="thumbnail">
																<a href="blog-posts/6.html">
																	<Image
																		alt=""
																		src={
																			BLOG_THUMBNAILS[6]
																		}
																	/>
																</a>
															</div>
															<h4>
																<a href="blog-posts/6.html">
																	How a 16-year-old
																	learned to Diagnose
																	Malaria in a Day
																</a>
															</h4>
															<ul>
																<li>25 Feb 2019</li>
																<li>AI</li>
																<li>7 min read</li>
															</ul>
														</div>
													</div>

													{/* <!-- Blog Item--> */}
													<div className="col-lg-4 col-sm-6">
														<div className="blog-item">
															<div className="thumbnail">
																<a href="blog-posts/5.html">
																	<Image
																		alt=""
																		src={
																			BLOG_THUMBNAILS[5]
																		}
																	/>
																</a>
															</div>
															<h4>
																<a href="blog-posts/5.html">
																	The Man who Changed my
																	Perspective of Life
																</a>
															</h4>
															<ul>
																<li>1 Feb 2019</li>
																<li>Philosophy</li>
																<li>6 min read</li>
															</ul>
														</div>
													</div>

													{/* <!-- Blog Item--> */}
													<div className="col-lg-4 col-sm-6">
														<div className="blog-item">
															<div className="thumbnail">
																<a href="blog-posts/4.html">
																	<Image
																		alt=""
																		src={
																			BLOG_THUMBNAILS[4]
																		}
																	/>
																</a>
															</div>
															<h4>
																<a href="blog-posts/4.html">
																	The Basics of Neural
																	Networks
																</a>
															</h4>
															<ul>
																<li>16 Jan 2019</li>
																<li>AI</li>
																<li>5 min read</li>
															</ul>
														</div>
													</div>

													{/* <!-- Blog Item--> */}
													<div className="col-lg-4 col-sm-6">
														<div className="blog-item">
															<div className="thumbnail">
																<a href="blog-posts/3.html">
																	<Image
																		alt=""
																		src={
																			BLOG_THUMBNAILS[3]
																		}
																	/>
																</a>
															</div>
															<h4>
																<a href="blog-posts/3.html">
																	Brain to Speech
																	Translation: A New Way
																	to Communicate
																</a>
															</h4>
															<ul>
																<li>5 Dec 2018</li>
																<li>BCIs</li>
																<li>3 min read</li>
															</ul>
														</div>
													</div>

													{/* <!-- Blog Item --> */}
													<div className="col-lg-4 col-sm-6">
														<div className="blog-item">
															<div className="thumbnail">
																<a href="blog-posts/2.html">
																	<Image
																		alt=""
																		src={
																			BLOG_THUMBNAILS[2]
																		}
																	/>
																</a>
															</div>
															<h4>
																<a href="blog-posts/2.html">
																	Brain Controlled Snake
																</a>
															</h4>
															<ul>
																<li>22 Nov 2018</li>
																<li>BCIs</li>
																<li>3 min read</li>
															</ul>
															<p>
																Using brain-computer
																interfaces to play video
																games with just your
																brainwaves.
															</p>
														</div>
													</div>

													{/* <!-- Blog Item --> */}
													<div className="col-lg-4 col-sm-6">
														<div className="blog-item">
															<div className="thumbnail">
																<a href="blog-posts/1.html">
																	<Image
																		alt=""
																		src={
																			BLOG_THUMBNAILS[1]
																		}
																	/>
																</a>
															</div>
															<h4>
																<a href="blog-posts/1.html">
																	EEGs Put Brainwaves in
																	the Hands of Everyone
																</a>
															</h4>
															<ul>
																<li>12 Nov 2018</li>
																<li>BCIs</li>
																<li>6 min read</li>
															</ul>
														</div>
													</div>
												</div>
											</section>
										</div>

										{/* <!-- Contact Section --> */}
										<div className="page pt-contact">
											<section className="container">
												{/* <!-- Section Title --> */}
												<div className="header-page mt-70 mob-mt">
													<h2>Contact</h2>
													<span></span>
												</div>

												{/* <!-- Form Start --> */}
												<div className="row mt-100">
													<div className="col-lg-12 col-sm-12"></div>
												</div>

												{/* <!-- Contact Info --> */}
												<div className="box-2 contact-info">
													<div className="row">
														<div className="col-lg-12 col-sm-12 info">
															<i className="fas fa-paper-plane"></i>
															<p>
																<a
																	href="mailto:mayankj2112@gmail.com"
																	target="blank"
																>
																	mayankj2112@gmail.com
																</a>
															</p>
															<span>Email</span>
														</div>
													</div>
												</div>
											</section>
										</div>
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

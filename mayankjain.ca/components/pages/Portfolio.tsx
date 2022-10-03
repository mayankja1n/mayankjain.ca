import Image from "next/image";
import { PROJECT_THUMBNAILS } from "../../utils/imageImports";
import PortfolioItem from "../atoms/PortfolioItem";

export default function Portfolio() {
	return (
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
							<li className="active" data-filter="*">
								All
							</li>
							<li data-filter=".ai">AI</li>
							<li data-filter=".bci">Brain-computer Interfaces</li>
							<li data-filter=".ar">AR</li>
							<li data-filter=".web">Wesbites</li>
						</ul>
					</div>
				</div>

				{/* <!-- Portfolio Item Row Start --> */}
				<div className="row portfolio-items mt-100 mb-100">
					{/* <!-- Templates	--> */}
					<div className="item col-lg-4 col-sm-6 graphic">
						<figure>
							<Image layout="fill" alt="" src="/portfolio/img.jpg" />
							<figcaption>
								<h3>
									Project Name <br />
									<span className="pt-caption">Caption</span>
								</h3>
								<p>Graphic</p>
								<i className="fas fa-image"></i>
								<a className="image-link" href="/portfolio/img-1.jpg"></a>
							</figcaption>
						</figure>
					</div>

					<div className="item col-lg-4 col-sm-6 brand">
						<figure>
							<Image layout="fill" alt="" src="/portfolio/img.jpg" />
							<figcaption>
								<h3>
									Project Name <br />
									<span className="pt-caption">Caption</span>
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
							<Image layout="fill" alt="" src="/portfolio/emg-csgo.jpg" />
							<figcaption>
								<h3>
									EMG CS:GO
									<br />
									<span className="pt-caption">
										Playing CS:GO completely using bio-signals from my
										brain.
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
							<Image layout="fill" alt="" src="/portfolio/fbwg.jpg" />
							<figcaption>
								<h3>
									Brain-controlled FB & WG
									<br />
									<span className="pt-caption">
										Using EEG to let 2 people collaborate on a
										brain-controlled game
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
							<Image alt="" src={PROJECT_THUMBNAILS.yearbook} />
							<figcaption>
								<h3>
									AI Yearbook Quote <br />
									<span className="pt-caption">
										I created an AI to write my highschool yearbook
										quote!
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
						thumbnail={PROJECT_THUMBNAILS.yearbook}
						caption={"I created an AI to write my highschool yearbook quote!"}
						tags={["ai"]}
						image
						link="portfolio/ai-yearbook-quote.jpg"
						hashtag="AI"
						icon={<i className="fas fa-cogs"></i>}
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
						thumbnail={PROJECT_THUMBNAILS.airpets}
						caption={"Play with a virtual pet in AR"}
						tags={["ar"]}
						video
						link="https://www.youtube.com/watch?v=hj5dynbmfpw"
						hashtag="AR"
						icon={<i className="fas fa-mobile-alt"></i>}
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
						thumbnail={PROJECT_THUMBNAILS.shooter}
						caption={"Shooting targets in AR"}
						tags={["ar"]}
						video
						link="https://www.youtube.com/watch?v=XyKXg3c5bj8"
						hashtag="AR"
						icon={<i className="fas fa-mobile-alt"></i>}
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
						thumbnail={PROJECT_THUMBNAILS.synex}
						caption={"The website for a Toronto biotech startup"}
						tags={["web"]}
						link="https://synexmedical.com"
						hashtag="Websites"
						icon={<i className="fas fa-desktop"></i>}
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
						thumbnail={PROJECT_THUMBNAILS.basketball}
						caption={"Playing basketball in AR"}
						tags={["ar"]}
						link="https://www.youtube.com/watch?v=EDHwj74XLdg"
						video
						hashtag="AR"
						icon={<i className="fas fa-mobile-alt"></i>}
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
						thumbnail={PROJECT_THUMBNAILS.grimm}
						caption={"Revive the writing of dead authors"}
						tags={["ai"]}
						link="Projects/GrimmWriter.html"
						hashtag="AI"
						icon={<i className="fas fa-cogs"></i>}
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
						thumbnail={PROJECT_THUMBNAILS.stock}
						caption={"Over 35% ROI using AI"}
						tags={["ai"]}
						link="https://github.com/Mayankj62/Facebook-Stock-Predictor"
						hashtag="AI"
						icon={<i className="fas fa-cogs"></i>}
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
						caption={"The website for a Toronto cannabis startup"}
						tags={["web"]}
						link="https://100thx.ca"
						hashtag="Websites"
						icon={<i className="fas fa-desktop"></i>}
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
						thumbnail={PROJECT_THUMBNAILS.malaria}
						caption={"Diagnosing Malaria better than doctors"}
						tags={["ai"]}
						link="Projects/MalarAI.html"
						hashtag="AI"
						icon={<i className="fas fa-cogs"></i>}
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
						thumbnail={PROJECT_THUMBNAILS.neurospace}
						caption={"Neurofeedback therapy for astronauts"}
						tags={["bci"]}
						link="Projects/Neurospace.html"
						hashtag="BCIs"
						icon={<i className="fas fa-brain"></i>}
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
						thumbnail={PROJECT_THUMBNAILS.intelom}
						caption="Music curated by
                            your brain"
						tags={["bci"]}
						link="Projects/Intelom/intelom.html"
						hashtag="BCIs"
						icon={<i className="fas fa-brain"></i>}
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
						icon={<i className="fas fa-brain"></i>}
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
						thumbnail={PROJECT_THUMBNAILS.snake}
						caption="Playing Snake with
                            your Brain"
						tags={["bci"]}
						link="Projects/Snake.html"
						hashtag="BCIs"
						icon={<i className="fas fa-brain"></i>}
					/>

					<PortfolioItem
						title="Leasure"
						thumbnail={PROJECT_THUMBNAILS.leasure}
						caption="Tribalscale Ideathon Winner"
						tags={["transportation"]}
						video
						link="https://www.youtube.com/watch?v=7uB2oxbe-rA"
						hashtag="Transportation"
						icon={<i className="fas fa-car-alt"></i>}
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
	);
}

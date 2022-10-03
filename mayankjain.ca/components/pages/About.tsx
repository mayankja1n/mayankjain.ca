import Image from "next/image";

export default function About() {
	return (
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
										<i className="fas fa-map-marked-alt"></i> Toronto,
										Canada
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
											<h6>8 Years Job</h6>
											<p>Experience</p>
										</div>
									</div>
								</div>

								{/* <!-- Icon Info ---> */}
								<div className="col-lg-3 col-sm-4">
									<div className="info-icon">
										<i className="fas fa-certificate"></i>
										<div className="desc-icon">
											<h6>500+ Projects</h6>
											<p>Completed</p>
										</div>
									</div>
								</div>

								{/* <!-- Icon Info ---> */}
								<div className="col-lg-3 col-sm-4">
									<div className="info-icon">
										<i className="fas fa-user-astronaut"></i>
										<div className="desc-icon">
											<h6>Freelance</h6>
											<p>Available</p>
										</div>
									</div>
								</div>

								<div className="col-lg-3 col-sm-12 pt-50">
									<a href="#" className="btn-st">
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
	);
}

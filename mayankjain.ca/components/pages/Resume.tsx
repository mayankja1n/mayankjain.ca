export default function Resume() {
	return (
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
										June 2020 - Present &nbsp; | &nbsp;{" "}
										<i className="fas fa-briefcase"></i>
										IDUN Technologies
									</p>
									<p></p>
									<p>
										<i className="fas fa-globe">
											{" "}
											Zurich, Switzerland
										</i>
									</p>
								</div>
								<p>
									Created EEG hardware designs, brain-controlled games,
									programatic 3D animations, and conducted EEG research
									projects.
								</p>
							</div>

							{/* <!-- Experience Item --> */}
							<div className="item">
								<div className="main">
									<h4>Innovation Developer</h4>
									<p>
										<i className="far fa-calendar-alt"></i>
										July 2019 - August 2019 &nbsp; | &nbsp;{" "}
										<i className="fas fa-briefcase"></i>
										Zero Gravity Labs (Loyalty One)
									</p>
									<p>
										<i className="fas fa-globe"> Toronto, Canada</i>
									</p>
								</div>
								<p>
									In the summer of 2019, I got a job as a highschool
									intern at ZGL, the innovation lab for Loyalty One.
									During my 2 months there, I piloted an Augmented
									Reality app for Airmiles that used ARKit and
									artificial intelligence to create a virtual pet that
									interacted with the real world.
								</p>
							</div>

							{/* <!-- Experience Item --> */}
							<div className="item">
								<div className="main">
									<h4>Disruptor</h4>
									<p>
										<i className="far fa-calendar-alt"></i>
										2019 - 2020 | The Knowledge Society
									</p>
								</div>
								<div className="main">
									<h4>Innovator</h4>
									<p>
										<i className="far fa-calendar-alt"></i>
										2018 - 2019 | The Knowledge Society
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
									I work as a freelance machine learning and web
									developer
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
										2020 - 2025 &nbsp; | &nbsp;{" "}
										<i className="fas fa-graduation-cap"></i>{" "}
										University of Waterloo
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
									<h4>Deep Learning & Computer Vision Nanodegree</h4>
									<p>
										<i className="far fa-calendar-alt"></i>
										2019 - Present &nbsp; | &nbsp;{" "}
										<i className="fas fa-graduation-cap"></i> Udacity
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
									<h4>Neuroscience 101</h4>
									<p>
										<i className="far fa-calendar-alt"></i>
										2018-2019 &nbsp;| &nbsp;{" "}
										<i className="fas fa-graduation-cap"></i>{" "}
										University of Toronto
									</p>
								</div>
								<p>
									I attended weekly lectures at the University of
									Toronto for their course on neuroscience. I learned
									about the science behind all the processes that the
									brain carries out.
								</p>
							</div>

							{/* <!-- Education Item --> */}
							<div className="item">
								<div className="main">
									<h4>High School Degree</h4>
									<p>
										<i className="far fa-calendar-alt"></i>
										2016 - 2020 &nbsp; | &nbsp;{" "}
										<i className="fas fa-graduation-cap"></i> Mentor
										College
									</p>
								</div>
								<p>Played rugby, football, skiing, and track.</p>
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
											<h6>Python</h6>
										</div>
									</div>
								</div>

								{/* <!-- Interests Item --> */}
								<div className="col-lg-3 col-sm-6">
									<div className="inter-icon">
										<i className="fab fa-app-store"></i>
										<div className="desc-inter">
											<h6>iOS & ARKit3</h6>
										</div>
									</div>
								</div>

								{/* <!-- Interests Item --> */}
								<div className="col-lg-3 col-sm-6">
									<div className="inter-icon">
										<i className="fas fa-paint-brush"></i>
										<div className="desc-inter">
											<h6>Photoshop</h6>
										</div>
									</div>
								</div>

								{/* <!-- Interests Item --> */}
								<div className="col-lg-3 col-sm-6">
									<div className="inter-icon">
										<i className="fas fa-brain"></i>
										<div className="desc-inter">
											<h6>Neurotech</h6>
										</div>
									</div>
								</div>

								{/* <!-- Interests Item --> */}
								<div className="col-lg-3 col-sm-6">
									<div className="inter-icon">
										<i className="fas fa-tv"></i>
										<div className="desc-inter">
											<h6>HTML/CSS/JS</h6>
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
											<h6>Deep Learning</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default function Contact() {
	return (
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
								<a href="mailto:mayankj2112@gmail.com" target="blank">
									mayankj2112@gmail.com
								</a>
							</p>
							<span>Email</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

import Image from "next/image";

export default function LeftBlock() {
	return (
		<nav className="header-main ">
			{/* <!-- Logo --> */}
			<div className="logo">
				<Image src={"/logo.png"} alt="" width="50" height="75" />
			</div>

			<ul>
				<li data-tooltip="home" data-position="top">
					<a href="#home" className="icon-h fas fa-house-damage"></a>
				</li>
				<h6 className="nav-headings">Home</h6>

				<li data-tooltip="about" data-position="top">
					<a href="#about" className="icon-a fas fa-user-tie"></a>
				</li>
				<h6 className="nav-headings">About</h6>

				<li data-tooltip="resume" data-position="top">
					<a href="#resume" className="icon-r fas fa-address-book"></a>
				</li>
				<h6 className="nav-headings">Resume</h6>

				<li data-tooltip="portfolio" data-position="top">
					<a href="#portfolio" className="icon-p fas fa-briefcase"></a>
				</li>
				<h6 className="nav-headings">Portfolio</h6>

				<li data-tooltip="blog" data-position="top">
					<a href="#blog" className="icon-b fas fa-receipt"></a>
				</li>
				<h6 className="nav-headings">Blog</h6>

				<li data-tooltip="contact" data-position="bottom">
					<a href="#contact" className="icon-c fas fa-envelope"></a>
				</li>
				<h6 className="nav-headings">Contact</h6>
			</ul>
		</nav>
	);
}

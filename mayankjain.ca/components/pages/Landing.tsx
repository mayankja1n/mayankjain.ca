import SocialIcons from "../molecules/SocialIcons";

export default function Landing() {
	return (
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
							<b className="is-visible">Deep Learning Engineer</b>
							<b>Brain Computer Interface Developer</b>
							<b>Web Designer</b>
							<b>Augmented Reality Developer</b>
						</span>
					</p>
				</div>

				{/* <!-- Social --> */}
				<SocialIcons />
			</section>
		</div>
	);
}

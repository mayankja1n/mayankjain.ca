import React from "react";
import Script from "next/script";

export default function ScriptImporter() {
	return (
		<>
			{/* SCRIPTS */}
			<Script type="text/javascript" src="/js/main.js" />
			<Script type="text/javascript" src="/js/jquery.min.js" />
			<Script type="text/javascript" src="/js/isotope.pkgd.min.js" />
			<Script type="text/javascript" src="/js/bootstrap.min.js" />
			<Script type="text/javascript" src="/js/simplebar.js" />
			<Script type="text/javascript" src="/js/owl.carousel.min.js" />
			<Script type="text/javascript" src="/js/jquery.magnific-popup.min.js" />
			<Script type="text/javascript" src="/js/jquery.animatedheadline.min.js" />
			<Script type="text/javascript" src="/js/jquery.easypiechart.js" />
			<Script type="text/javascript" src="/js/jquery.validation.js" />
			<Script type="text/javascript" src="/js/tilt.js" />

			<Script
				type="text/javascript"
				src="/js/particles.min.js"
				onLoad={() =>
					console.log(`script loaded correctly, window.FB has been populated`)
				}
			/>
			<Script id="particles-js">
				{`particlesJS.load('particles-js', 'js/particles.json', function() {
				console.log('callback - particles.js config loaded');
        	});	`}
			</Script>
		</>
	);
}

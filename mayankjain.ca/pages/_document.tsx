import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html>
			<Head>
				{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
				<Script
					id="g-analytics-tag"
					async
					src="https://www.googletagmanager.com/gtag/js?id=UA-151005557-1"
				></Script>
				<Script id="g-analytics-script">
					{`window.dataLayer = window.dataLayer || []; function gtag()
					{dataLayer.push(arguments)}
					gtag('js', new Date()); gtag('config', 'UA-151005557-1');`}
				</Script>

				{/* <!-- MailerLite Universal -->
		<script>
		(function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
		var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
		f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
		var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
		_.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');

		var ml_account = ml('accounts', '1339656', 'q6y6q2g3r5', 'load');
		</script>
		<!-- End MailerLite Universal --> */}

				{/* Meta */}
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta http-equiv="X-UA-Compatible" content="ie=edge" />
				<meta name="description" content="Mayank Jain's personal website" />

				{/* Title */}
				<link rel="icon" href="favicon.ico" />

				{/* CSS Plugins */}
				{/* <link rel="stylesheet" href="css/plugins/bootstrap.min.css" />
				<link rel="stylesheet" href="css/plugins/font-awesome.css" />
				<link rel="stylesheet" href="css/plugins/magnific-popup.css" />
				<link rel="stylesheet" href="css/plugins/simplebar.css" />
				<link rel="stylesheet" href="css/plugins/owl.carousel.min.css" />
				<link rel="stylesheet" href="css/plugins/owl.theme.default.min.css" />
				<link rel="stylesheet" href="css/plugins/jquery.animatedheadline.css" /> */}

				{/* CSS Base */}
				{/* <link rel="stylesheet" href="css/style-dark.css" /> */}

				{/* Settings Style */}
				{/* <link rel="stylesheet" href="css/settings/left-nav.css" />
				<link rel="stylesheet" href="css/settings/green-color.css" />
				<link rel="stylesheet" href="css/settings/circle-box.css" /> */}
			</Head>
			<body>
				{/* <!-- All Script --> */}
				<Script src="/js/jquery.min.js" />
				<Script src="/js/isotope.pkgd.min.js" />
				<Script src="/js/bootstrap.min.js" />
				<Script src="/js/simplebar.js" />
				<Script src="/js/owl.carousel.min.js" />
				<Script src="/js/jquery.magnific-popup.min.js" />
				<Script src="/js/jquery.animatedheadline.min.js" />
				<Script src="/js/jquery.easypiechart.js" />
				<Script src="/js/jquery.validation.js" />
				<Script src="/js/tilt.js" />
				<Script src="/js/main.js" />
				<Script src="https://maps.google.com/maps/api/js?sensor=false" />

				{/* <!-- Page Script --> */}
				<Script
					src="/js/particles.min.js"
					onLoad={() =>
						console.log(
							`script loaded correctly, window.FB has been populated`
						)
					}
				/>
				<Script id="particles-js">
					{`particlesJS.load('particles-js', 'js/particles.json', function() {
				console.log('callback - particles.js config loaded');
        	});	`}
				</Script>

				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

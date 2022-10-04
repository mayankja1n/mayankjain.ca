import Image from "next/image";
import { BLOG_LINKS } from "../../utils/blogLinks";
import { BLOG_THUMBNAILS } from "../../utils/imageImports";
import BlogItem from "../atoms/BlogItem";

export default function Blog() {
	return (
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

					<BlogItem
						title="How to Evaluate your AI"
						link={BLOG_LINKS[18]}
						thumbnail={BLOG_THUMBNAILS[18]}
						date="9 Aug 2020"
						tag="AI"
						readLen={3}
					/>

					<BlogItem
						title="What fNIRS is and How it Works"
						link={BLOG_LINKS[17]}
						thumbnail={BLOG_THUMBNAILS[17]}
						date="15 May 2020"
						tag="BCIs"
						readLen={5}
					/>
					<BlogItem
						title="NLP: From Watermelon Boxes to Word Embeddings"
						link={BLOG_LINKS[16]}
						thumbnail={BLOG_THUMBNAILS[16]}
						date="22 Apr 2020"
						tag="AI"
						readLen={7}
					/>
					<BlogItem
						title="The Future of Battery Technology"
						link={BLOG_LINKS[15]}
						thumbnail={BLOG_THUMBNAILS[15]}
						date="10 Nov 2019"
						tag="Energy"
						readLen={7}
					/>
					<BlogItem
						title="Talk to Smart People and Figure Shit Out"
						link={BLOG_LINKS[14]}
						thumbnail={BLOG_THUMBNAILS[14]}
						date="20 Oct 2019"
						tag="Philosophy"
						readLen={3}
					/>
					<BlogItem
						title="IoT Has Disrupted the way we Feed our Planet"
						link={BLOG_LINKS[13]}
						thumbnail={BLOG_THUMBNAILS[13]}
						date="16 Oct 2019"
						tag="IoT"
						readLen={5}
					/>
					<BlogItem
						title="Using AI to Predict Facebook's Stock Price"
						link={BLOG_LINKS[6]}
						thumbnail={BLOG_THUMBNAILS[6]}
						date="4 March 2019"
						tag="AI"
						readLen={5}
					/>
					<BlogItem
						title="How a 16-year-old learned to Diagnose Malaria in a Day"
						link={BLOG_LINKS[5]}
						thumbnail={BLOG_THUMBNAILS[5]}
						date="25 Feb 2019"
						tag="AI"
						readLen={7}
					/>
					<BlogItem
						title="The Pereson who Changed my Perspective of Life"
						link={BLOG_LINKS[4]}
						thumbnail={BLOG_THUMBNAILS[4]}
						date="1 Feb 2019"
						tag="Philosophy"
						readLen={6}
					/>
					<BlogItem
						title="The Basics of Neural Networks"
						link={BLOG_LINKS[3]}
						thumbnail={BLOG_THUMBNAILS[3]}
						date="16 Jan 2019"
						tag="BCIs"
						readLen={5}
					/>
					<BlogItem
						title="Brain to Speech Translation: A New Way to Communicate"
						link={BLOG_LINKS[2]}
						thumbnail={BLOG_THUMBNAILS[2]}
						date="5 Dec 2018"
						tag="BCIs"
						readLen={3}
					/>

					<BlogItem
						title="Brain Controlled Snake"
						link={BLOG_LINKS[1]}
						thumbnail={BLOG_THUMBNAILS[1]}
						date="22 Nov 2018"
						tag="BCIs"
						readLen={3}
					/>

					<BlogItem
						title="EEGs Put Brainwaves in the Hands of Everyone"
						link={BLOG_LINKS[0]}
						thumbnail={BLOG_THUMBNAILS[0]}
						date="12 Nov 2018"
						tag="BCIs"
						readLen={6}
					/>
				</div>
			</section>
		</div>
	);
}

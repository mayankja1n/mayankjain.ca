import Image from "next/image";
import { BLOG_THUMBNAILS } from "../../utils/imageImports";

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

					{/* <!-- Blog Item--> */}

					<div className="col-lg-4 col-sm-6">
						<div className="blog-item">
							<div className="thumbnail">
								<a href="blog-posts/how-to-evaluate-your-ai.html">
									<Image alt="" src={BLOG_THUMBNAILS[19]} />
								</a>
							</div>
							<h4>
								<a href="blog-posts/how-to-evaluate-your-ai.html">
									How to Evaluate your AI
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
									<Image alt="" src={BLOG_THUMBNAILS[18]} />
								</a>
							</div>
							<h4>
								<a href="blog-posts/what-fnirs-is-and-how-it-works.html">
									What fNIRS is and How it Works
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
									<Image alt="" src={BLOG_THUMBNAILS[17]} />
								</a>
							</div>
							<h4>
								<a href="blog-posts/nlp-from-watermelon-boxes-to-word-embeddings.html">
									NLP: From Watermelon Boxes to Word Embeddings
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
									<Image alt="" src={BLOG_THUMBNAILS[16]} />
								</a>
							</div>
							<h4>
								<a href="blog-posts/16.html">
									The Future of Battery Technology
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
									<Image alt="" src={BLOG_THUMBNAILS[15]} />
								</a>
							</div>
							<h4>
								<a href="blog-posts/15.html">
									Talk to Smart People and Figure Shit Out
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
									<Image alt="" src={BLOG_THUMBNAILS[14]} />
								</a>
							</div>
							<h4>
								<a href="blog-posts/14.html">
									IoT Has Disrupted the way we Feed our Planet
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
									<Image alt="" src={BLOG_THUMBNAILS[7]} />
								</a>
							</div>
							<h4>
								<a href="blog-posts/7.html">
									Using AI to Predict Facebook’s Stock Price
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
									<Image alt="" src={BLOG_THUMBNAILS[6]} />
								</a>
							</div>
							<h4>
								<a href="blog-posts/6.html">
									How a 16-year-old learned to Diagnose Malaria in a Day
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
									<Image alt="" src={BLOG_THUMBNAILS[5]} />
								</a>
							</div>
							<h4>
								<a href="blog-posts/5.html">
									The Man who Changed my Perspective of Life
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
									<Image alt="" src={BLOG_THUMBNAILS[4]} />
								</a>
							</div>
							<h4>
								<a href="blog-posts/4.html">
									The Basics of Neural Networks
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
									<Image alt="" src={BLOG_THUMBNAILS[3]} />
								</a>
							</div>
							<h4>
								<a href="blog-posts/3.html">
									Brain to Speech Translation: A New Way to Communicate
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
									<Image alt="" src={BLOG_THUMBNAILS[2]} />
								</a>
							</div>
							<h4>
								<a href="blog-posts/2.html">Brain Controlled Snake</a>
							</h4>
							<ul>
								<li>22 Nov 2018</li>
								<li>BCIs</li>
								<li>3 min read</li>
							</ul>
							<p>
								Using brain-computer interfaces to play video games with
								just your brainwaves.
							</p>
						</div>
					</div>

					{/* <!-- Blog Item --> */}
					<div className="col-lg-4 col-sm-6">
						<div className="blog-item">
							<div className="thumbnail">
								<a href="blog-posts/1.html">
									<Image alt="" src={BLOG_THUMBNAILS[1]} />
								</a>
							</div>
							<h4>
								<a href="blog-posts/1.html">
									EEGs Put Brainwaves in the Hands of Everyone
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
	);
}

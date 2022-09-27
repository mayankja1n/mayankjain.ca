import { Highlight } from "@chakra-ui/react";
import Image from "next/image";

interface PortfolioItemProps {
	thumbnail: any;
	video?: boolean;
	image?: boolean;
	title: string;
	caption: string;
	tags: string[];
	link: string;
	hashtag: string;
	icon: JSX.Element;
}

export default function PortfolioItem({
	thumbnail,
	video,
	image,
	title,
	caption,
	tags,
	link,
	hashtag,
	icon,
}: PortfolioItemProps) {
	return (
		<div className={`item col-lg-4 col-sm-6 ${tags.join(" ")}`} color="black">
			<figure>
				<Image alt="" src={thumbnail} />
				<figcaption>
					<h3>
						<mark className="highlight-black">{title}</mark>
						<br />

						<span className="pt-caption">
							<mark className="highlight-black">{caption}</mark>
						</span>
					</h3>
					<p>{hashtag}</p>
					{icon}
					<a
						className={video ? "video-link" : image ? "image-link" : ""}
						href={link}
					></a>
				</figcaption>
			</figure>
		</div>
	);
}

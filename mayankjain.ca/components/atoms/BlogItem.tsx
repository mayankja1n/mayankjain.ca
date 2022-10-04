import Image from "next/image";

interface BlogItemProps {
	thumbnail: any;
	link: string;
	title: string;
	date: string;
	tag: string;
	readLen: number;
}

export default function BlogItem({
	thumbnail,
	link,
	title,
	date,
	tag,
	readLen,
}: BlogItemProps) {
	return (
		<div className="col-lg-4 col-sm-6">
			<div className="blog-item">
				<div className="thumbnail">
					<a href={link}>
						<Image alt="" src={thumbnail} />
					</a>
				</div>
				<h4>
					<a href={link}>{title}</a>
				</h4>
				<ul>
					<li>{date}</li>
					<li>{tag}</li>
					<li>{readLen} min read</li>
				</ul>
			</div>
		</div>
	);
}

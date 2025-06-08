import { PortfolioPagePictures } from '../data/PictureData';

export default function Portfolio() {
	const pics = PortfolioPagePictures;
	return (
		<section id="portfolio" className="flex flex-col items-center justify-center">
			<header className="mx-auto mb-16 mt-20 flex select-none flex-col text-white font-inter md:mb-40">
				<h1 className="mb-4 text-7xl font-bold">Portfolio</h1>
				<p>Scroll down to see some of my work</p>
			</header>
			<div className="flex w-full flex-wrap justify-center md:justify-between md:px-[250px]">
				{pics.map((p) => {
					return (
						<article key={p} className={`${p.ratio} flex w-64`}>
							<img
								src={p.Path}
								alt={p.alt}
								className="h-full w-full object-cover ring-2 ring-gray-300"
							/>
						</article>
					);
				})}
			</div>
		</section>
	);
}

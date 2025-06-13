import { PortfolioPagePictures } from '../data/PictureData';
import { Helmet } from 'react-helmet-async';

export default function Portfolio() {
	const pics = PortfolioPagePictures;
	return (
		<>
			<Helmet>
				<title>Portfolio | Jeremy Messina Photography</title>
				<meta
					name="description"
					content="View the photography portfolio of Jeremy Messina, featuring studio, outdoor, event, and proposal sessions. See a selection of recent work and creative projects."
				/>
				<meta property="og:title" content="Portfolio | Jeremy Messina Photography" />
				<meta
					property="og:description"
					content="Explore a curated gallery of portraits, events, and creative photography by Jeremy Messina."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://your-domain.com/portfolio" />
			</Helmet>
			<section id="portfolio" className="mb-20 flex flex-col items-center justify-center">
				<header className="mx-auto mb-16 mt-20 flex select-none flex-col text-white font-inter md:mb-32">
					<h1 className="mb-4 text-7xl font-bold">Portfolio</h1>
					<p>Scroll down to see some of my work</p>
				</header>
				<div className="flex w-full flex-wrap justify-center px-10 md:justify-between md:px-[70px] lg:px-[100px] 2xl:px-[220px]">
					{pics.map((p) => {
						return (
							<article
								key={p.alt}
								className={`${p.ratio} mx-auto my-10 flex w-5/6 items-center justify-center sm:w-64 md:mx-3 md:w-72 lg:w-80 2xl:w-[21.5rem]`}
							>
								<img
									src={p.Path}
									alt={p.alt}
									loading="lazy"
									className="object-contain ring-2 ring-gray-300"
								/>
							</article>
						);
					})}
				</div>
			</section>
		</>
	);
}

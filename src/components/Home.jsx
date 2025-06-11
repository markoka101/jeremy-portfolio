import HomeButton from './HomeButton';
import CustomHorizontalDivider from './CustomHorizontalDivider';
import { HomePagePictures } from '../data/PictureData';
import clsx from 'clsx';

export default function Home() {
	const buttonCustomStyles = clsx('font-semibold font-inter md:my-0 md:py-0');
	const hpp = HomePagePictures;

	return (
		<section id="home" className="flex min-h-screen flex-col bg-slate-300">
			<div className="hidden h-full flex-col md:flex md:flex-1">
				<div className="mb-2 h-[180px] w-full">
					<header className="mb-5 flex h-[130px] w-full flex-col px-8 py-8">
						<h1 className="text-6xl font-bold font-inter">Jeremy Messina</h1>
						<p className="ml-[425px] flex items-center text-xl font-semibold">
							Photography / Editing
						</p>
					</header>
					<ul className="flex flex-row items-end px-2">
						<li>
							<HomeButton
								route="/about-jeremy"
								text="About jeremy"
								customStyle={buttonCustomStyles}
							/>
						</li>
						<li>
							<HomeButton
								route="/portfolio"
								text="Jeremy's Portfolio"
								customStyle={buttonCustomStyles}
							/>
						</li>
						<li>
							<HomeButton
								route="/book-photo-session"
								text="Book a Session"
								customStyle={buttonCustomStyles}
							/>
						</li>
						<li>
							<HomeButton
								route="/session-pricing"
								text="Pricing"
								customStyle={buttonCustomStyles}
							/>
						</li>
					</ul>
				</div>
				<CustomHorizontalDivider
					baseThickness={1.5}
					numberOfLines={3}
					gapBetweenLine={1}
					lineThicknessGrowth={0.2}
				/>

				<div className="flex flex-1 items-center justify-center bg-[url('../src/assets/generated-image-95.webp')] bg-center">
					<div className="grid-cols-13 my-auto grid py-2 md:gap-x-5 md:gap-y-3 lg:gap-x-10 lg:gap-y-4">
						<div
							className={`${hpp[0].ratio} col-start-1 flex w-60 items-center justify-center bg-gray-900 lg:col-start-2`}
						>
							<img
								src={hpp[0].Path}
								alt={hpp[0].Path}
								className="h-full w-full object-contain ring-2 ring-gray-400"
							/>
						</div>
						<div
							className={`${hpp[1].ratio} col-start-6 row-start-2 flex w-56 items-center justify-center bg-gray-700 lg:col-start-5`}
						>
							<img
								src={hpp[1].Path}
								alt={hpp[1].alt}
								className="h-full w-full object-contain ring-2 ring-gray-400"
							/>
						</div>
						<div
							className={`${hpp[3].ratio} col-start-8 mt-10 hidden w-60 items-center justify-center bg-gray-900 lg:flex`}
						>
							<img
								src={hpp[3].Path}
								alt={hpp[3].alt}
								className="h-full w-full object-contain ring-2 ring-gray-400"
							/>
						</div>
						<div
							className={`${hpp[2].ratio} col-start-11 row-start-2 -mt-24 hidden w-60 items-center justify-center bg-gray-900 2xl:flex`}
						>
							<img
								src={hpp[2].Path}
								alt={hpp[2].alt}
								className="h-full w-full object-contain ring-2 ring-gray-400"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-1 items-center justify-center bg-[url('../src/assets/generated-image-95.webp')] text-white font-inter md:hidden">
				<article className="mx-auto -mt-5 flex h-full w-5/6 flex-col items-center justify-center sm:mt-6 sm:pb-4 md:hidden">
					<p className="mb-1 w-11/12 text-left text-lg italic">Photography</p>
					<h1 className="mb-1 text-center text-7xl font-inter">Jeremy Messina</h1>
					<p className="w-11/12 text-right text-lg italic">Editing</p>
					<CustomHorizontalDivider
						baseThickness={1}
						numberOfLines={3}
						gapBetweenLine={1}
						lineThicknessGrowth={0.1}
						lineColor="bg-white"
						customStyles="w-3/4 mt-6  "
					/>
					<ul className="mt-5 flex flex-col">
						<li>
							<HomeButton
								route="/about-jeremy"
								text="About jeremy"
								customStyle={buttonCustomStyles}
							/>
						</li>
						<li>
							<HomeButton
								route="/portfolio"
								text="Jeremy's Portfolio"
								customStyle={buttonCustomStyles}
							/>
						</li>
						<li>
							<HomeButton
								route="/book-photo-session"
								text="Book a Session"
								customStyle={buttonCustomStyles}
							/>
						</li>
						<li>
							<HomeButton
								route="/session-pricing"
								text="Pricing"
								customStyle={buttonCustomStyles}
							/>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
}

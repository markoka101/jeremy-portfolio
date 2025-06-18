import CustomHorizontalDivider from './CustomHorizontalDivider';
import jeremyPic from '../assets/jeremy-pic.jpg';
import { Helmet } from 'react-helmet-async';

export default function About() {
	return (
		<>
			<Helmet>
				<title>About Jeremy Messina | Freelance Photographer</title>
				<meta
					name="description"
					content="Learn about Jeremy Messina, a passionate freelance photographer capturing real moments and honest emotions in [Your City]."
				/>
				<meta property="og:title" content="About Jeremy Messina" />
				<meta
					property="og:description"
					content="Freelance photographer specializing in candid, event, and lifestyle photography."
				/>
			</Helmet>
			<section
				id="about"
				className="flex min-h-screen w-full flex-1 flex-col items-start pb-24 md:flex-row"
			>
				<div className="mt-20 flex w-full flex-col px-10 text-white font-inter sm:px-12 lg:w-1/2">
					<div className="mb-5 flex flex-col text-7xl font-bold md:flex-row">
						<h1>About{'\u00A0'} </h1>
						<h1 className="ml-14 md:ml-0"> Jeremy</h1>
					</div>
					<CustomHorizontalDivider
						baseThickness={1}
						numberOfLines={2}
						gapBetweenLine={1}
						lineThicknessGrowth={0.2}
						lineColor="bg-white"
						customStyles="mb-5 w-full lg:w-[480px]"
					/>
					<p className="md:text-lg">
						Hi, I’m Jeremy Messina— a photographer with a deep love for capturing real moments,
						honest emotions, and the beauty in the everyday. My journey behind the lens started with
						a curiosity for light and storytelling, and over the years, it’s grown into a full-blown
						passion. Whether I’m documenting a quiet moment between loved ones, the energy of a city
						street, or the subtle details that often go unnoticed, my goal is always the same: to
						create images that feel personal, timeless, and true. When I’m not behind the camera,
						you can usually find me at a trendy restaurant or hanging out with my friends. Thanks
						for being here — I’m glad that you are.
					</p>
				</div>

				<aside className="my-auto mt-[11.2rem] hidden h-full w-1/2 justify-center pr-20 lg:flex">
					<div className="aspect-[2/3] w-96 outline-double outline-4 outline-offset-2 outline-white">
						<img
							src={jeremyPic}
							alt="Portrait of Jeremy Messina"
							className="h-full w-full object-cover"
						/>
					</div>
				</aside>
			</section>
		</>
	);
}

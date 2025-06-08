import CustomHorizontalDivider from './CustomHorizontalDivider';
export default function About() {
	return (
		<section
			id="about"
			className="flex min-h-screen w-full flex-1 flex-col items-start md:flex-row"
		>
			<div className="mt-20 flex w-full select-none flex-col px-12 text-white font-inter md:w-1/2">
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
					customStyles="mb-5 w-full md:w-[480px]"
				/>
				<p className="md:text-lg">
					Hi, I’m a Goof, a passionate freelance photographer with an eye for capturing life’s most
					memorable moments. Whether it’s portraits, events, or landscapes, I strive to tell unique
					stories through my lens. With a creative approach and attention to detail, I aim to
					deliver images that inspire and connect.When I’m not behind the camera, you’ll find me
					exploring new places, seeking out natural light, and always looking for the next perfect
					shot. Let’s work together to create something beautiful!This is a placeholder bio
				</p>
			</div>

			<aside className="my-auto mt-52 hidden h-full w-1/2 justify-center pr-20 md:flex">
				<div className="aspect-[9/16] w-80 outline-double outline-4 outline-offset-4 outline-white">
					<img
						src="../src/assets/jair-bouta-die-xd.png"
						alt="Portrait of Jeremy Messina"
						className="h-full w-full object-cover"
					/>
				</div>
			</aside>
		</section>
	);
}

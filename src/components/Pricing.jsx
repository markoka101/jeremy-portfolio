import { Bookings } from '../data/BookingCatergories';
import CustomHorizontalDivider from './CustomHorizontalDivider';
import ListItemIcon from './icons/ListItemIcon';
import { Helmet } from 'react-helmet-async';

export default function Pricing() {
	const book = Bookings;
	return (
		<>
			<Helmet>
				<title>Photography Pricing | Jeremy Messina</title>
				<meta
					name="description"
					content="Explore photography session, event, and proposal pricing from Jeremy Messina. Transparent rates and package details."
				/>
				<meta property="og:title" content="Photography Pricing" />
				<meta
					property="og:description"
					content="Session, event, and proposal photography packages by Jeremy Messina."
				/>
			</Helmet>
			<section id="pricing" className="flex h-full w-full flex-1 flex-col items-center">
				<header className="mx-auto mt-20 flex w-4/5 flex-col items-center text-center text-white font-inter">
					<h1 className="mb-4 text-7xl font-bold">Pricing And Plans</h1>
					<p className="text-lg">Here are the standard prices </p>
				</header>

				<div className="mx-4 mt-10 flex w-full flex-wrap justify-center bg-sky-950 pb-10 md:mt-20">
					{book.map((item) => {
						return (
							<article
								key={item.type}
								className="mx-8 my-8 flex h-[410px] w-[380px] flex-col items-center rounded-sm bg-amber-100 px-2 py-8 text-center font-serif shadow-md shadow-black"
							>
								<h2 className="mb-1 text-3xl font-semibold">{item.type}</h2>
								<p className="mb-1 text-sm">{item.desc}</p>
								<h3 className="mb-1 font-semibold">Includes</h3>
								<ul className="mx-auto flex flex-col">
									{item.included.map((co) => {
										return (
											<li key={co} className="flex flex-row">
												<ListItemIcon className="" /> {co}
											</li>
										);
									})}
								</ul>
								<div className="mt-20 w-full">
									<CustomHorizontalDivider
										numberOfLines={4}
										baseThickness={0.5}
										gapBetweenLine={1}
										lineThicknessGrowth={0.1}
										lineColor="bg-slate-500"
										customStyles="w-full  "
									/>
									<h3 className="mt-4 text-3xl">{item.price}</h3>
								</div>
							</article>
						);
					})}
				</div>
			</section>
		</>
	);
}

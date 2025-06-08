import MenuIcon from './icons/MenuIcon';
import MenuCollapseIcon from './icons/MenuCollapseIcon';
import NavbarSlideButtons from './NavbarSlideButtons';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import InstagramIcon from './icons/InstagramIcon';

export default function Navbar({ isOpen, setIsOpen }) {
	const buttonCustomStyles = clsx(`-ml-6 mb-4 !pl-6 text-xl font-inter`);
	const location = useLocation();

	return (
		<div className="absolute top-0 w-full">
			{!isOpen ? (
				<button
					className={`fixed right-0 top-4 z-50 m-4 rounded p-2 sm:right-4`}
					onClick={() => setIsOpen(true)}
				>
					<MenuIcon
						className={
							location.pathname === '/'
								? `menuicon-animate text-white md:text-black lg:text-black`
								: `menuicon-animate text-white`
						}
					/>
				</button>
			) : null}

			<nav
				className={`fixed right-0 top-0 h-screen w-[75%] transform overflow-y-auto bg-gray-900 pl-6 pt-2 text-white sm:w-[350px] md:w-[400px] lg:w-[400px] ${
					!isOpen ? 'translate-x-full' : '-translate-x-0'
				} z-40 transition-transform ease-in-out`}
			>
				<h1 className="mb-10 mt-2 cursor-default select-none text-4xl font-bold font-inter">
					Pages
				</h1>

				<ul className="mb-12">
					<li>
						<NavbarSlideButtons route="/" text="Home" customStyle={buttonCustomStyles} />
					</li>
					<li>
						<NavbarSlideButtons
							route="/about-jeremy"
							text="About Jeremy"
							customStyle={buttonCustomStyles}
						/>
					</li>
					<li>
						<NavbarSlideButtons
							route="/portfolio"
							text="Jeremy's Portfolio"
							customStyle={buttonCustomStyles}
						/>
					</li>
					<li>
						<NavbarSlideButtons
							route="/book-photo-session"
							text="Book a Session"
							customStyle={buttonCustomStyles}
						/>
					</li>
					<li>
						<NavbarSlideButtons
							route="/session-pricing"
							text="Pricing"
							customStyle={buttonCustomStyles}
						/>
					</li>
					<li>
						<a
							className="-ml-4 inline-flex w-[50px] transform items-center justify-start pl-4 duration-200 ease-in-out hover:text-pink-500"
							target="_blank"
							href="https://www.instagram.com/"
						>
							<InstagramIcon className="w-[25px]" />
						</a>
					</li>

					<li>
						<button
							onClick={() => setIsOpen(false)}
							className="-ml-6 mt-4 inline-flex w-full justify-start pl-6 duration-200 ease-in-out hover:translate-x-3"
						>
							<MenuCollapseIcon />
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
}

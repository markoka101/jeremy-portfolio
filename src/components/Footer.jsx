import InstagramIcon from './icons/InstagramIcon';
export default function Footer() {
	return (
		<section
			id="footer"
			className="menuicon-animate fixed bottom-0 z-50 mt-auto flex h-[75px] w-screen items-center justify-end bg-transparent"
		>
			<a
				className="mr-5 inline-flex w-[50px] transform items-center justify-start text-white duration-200 ease-in-out hover:text-pink-500"
				target="_blank"
				href="https://www.instagram.com/jair.m3/"
			>
				<InstagramIcon className="w-[25px]" />
			</a>
		</section>
	);
}

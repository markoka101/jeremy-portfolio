import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { RouteButtonProps } from '../types/route-button';

export default function NavbarSlideButtons({
	text = ' ',
	route = ' ',
	customStyle = ' '
}: RouteButtonProps) {
	return (
		<Link
			to={route}
			className={twMerge(
				`inline-flex w-full justify-start px-0 py-1 duration-200 ease-in-out hover:translate-x-2 hover:text-white`,
				`${customStyle}`,
			)}
		>
			{`${text}`}
		</Link>
	);
}

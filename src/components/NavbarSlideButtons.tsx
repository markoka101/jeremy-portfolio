import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { RouteButtonProps } from '../types/route-button';

export default function NavbarSlideButtons({
	text = ' ',
	route = ' ',
	customStyle = ' '
}: RouteButtonProps) {
	const navigate = useNavigate();
	return (
		<button
			onClick={() => navigate(route)}
			className={twMerge(
				`${customStyle}`,
				`inline-flex w-full justify-start px-0 py-1 duration-200 ease-in-out hover:translate-x-2 hover:text-white`
			)}
		>
			{`${text}`}
		</button>
	);
}

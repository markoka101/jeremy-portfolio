import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export default function HomeButton({ text = ' ', route = ' ', customStyle = ' ' }) {
	const navigate = useNavigate();
	const [hoveredOver, setHoveredOver] = useState(false);
	return (
		<div className="flex flex-col items-center justify-center">
			<button
				onClick={() => navigate(route)}
				onMouseEnter={() => setHoveredOver(true)}
				onMouseLeave={() => setHoveredOver(false)}
				className={twMerge(
					`${customStyle}`,
					`my-1 inline-flex justify-center border-[1px] border-transparent px-6 py-2 text-lg focus:outline-none md:mr-1 lg:mr-2`
				)}
			>
				{`${text}`}
			</button>
			<div className="flex w-full justify-center px-6">
				<hr
					className={`flex w-0 justify-center border-[1px] border-black transition-all duration-[.25s] ease-in-out md:mr-1 lg:mr-2 ${
						hoveredOver ? 'w-full opacity-100' : 'w-0 opacity-0'
					}`}
				/>
			</div>
		</div>
	);
}

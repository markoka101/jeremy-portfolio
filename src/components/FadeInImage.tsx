import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function FadeInImage({ src = '', alt = '', className = '', ...props }) {
	const [loaded, setLoaded] = useState<boolean>(false);

	return (
		<img
			src={src}
			alt={alt}
			loading="lazy"
			onLoad={() => setLoaded(true)}
			className={twMerge(
				`opacity-0 transition-opacity duration-700 ease-in ${loaded ? 'opacity-100' : ''}`,
				className
			)}
			{...props}
		/>
	);
}

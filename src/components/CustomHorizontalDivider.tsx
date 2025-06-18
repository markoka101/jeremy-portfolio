import { twMerge } from 'tailwind-merge';
export default function CustomHorizontalDivider({
	numberOfLines = 3,
	baseThickness = 2,
	gapBetweenLine = 2,
	lineThicknessGrowth = 0,
	customStyles = '',
	lineColor = 'bg-black',
	lineWidth = 'w-full'
}) {
	return (
		<div className={twMerge(`${customStyles}`, `flex flex-col`)}>
			{Array.from({ length: numberOfLines }).map((_, i) => (
				<div
					key={i}
					className={`${lineColor} ${lineWidth} w-full`}
					style={{
						height: `${baseThickness + i * lineThicknessGrowth}px`,
						marginBottom: i !== numberOfLines - 1 ? `${gapBetweenLine}px` : 0
					}}
				/>
			))}
		</div>
	);
}

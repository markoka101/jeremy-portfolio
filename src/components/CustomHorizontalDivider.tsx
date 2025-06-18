import { twMerge } from 'tailwind-merge';

type CustomHorizontalDividerProps = Readonly<{
	numberOfLines?: number;
	baseThickness?: number;
	gapBetweenLine?: number;
	lineThicknessGrowth?: number;
	customStyles?: string;
	lineColor?: string;
	lineWidth?: string;
}>;

export default function CustomHorizontalDivider({
	numberOfLines = 3,
	baseThickness = 2,
	gapBetweenLine = 2,
	lineThicknessGrowth = 0,
	customStyles = '',
	lineColor = 'bg-black',
	lineWidth = 'w-full'
}: CustomHorizontalDividerProps) {
	return (
		<div className={twMerge(`flex flex-col`, customStyles)}>
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

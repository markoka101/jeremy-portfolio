export default function MenuCollapseIcon({ className = '', ...props }) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			strokeWidth="3"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
			{...props}
		>
			<rect x="18" y="2" width="4" height="20" fill="none" stroke="white" strokeWidth="2" />

			<polyline points="2 18 13 12 2 6" stroke="white" strokeWidth="3" />
		</svg>
	);
}

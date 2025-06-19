export default function ListItemIcon({ className = '' }) {
	return (
		<svg
			width="35"
			height="24"
			viewBox="0 0 80 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			aria-hidden="true"
			focusable="false"
		>
			{/* Left angle bracket "<" */}
			<polyline
				points="30,2 15,12 30,22"
				stroke="currentColor"
				strokeWidth={2}
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			{/* Diamond "◆" */}
			<polygon points="40,4 52,12 40,20 28,12" fill="currentColor" />
			{/* Right angle bracket ">" */}
			<polyline
				points="50,2 65,12 50,22"
				stroke="currentColor"
				strokeWidth={2}
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

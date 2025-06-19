export default function InstagramIcon({ className = '' }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			focusable="false"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="2.25" y="2.25" width="19.5" height="19.5" rx="5" fill="none" />

			<circle cx="12" cy="12" r="5" fill="none" />

			<circle cx="17" cy="7" r="1.25" fill="currentColor" stroke="none" />
		</svg>
	);
}

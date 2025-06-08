import clsx from 'clsx';

export default function FormStatusModal({ open, onClose, title, message, type }) {
	if (!open) return null;
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
			<div
				className={`modal-fadeIn w-[90vw] max-w-sm rounded-lg bg-amber-50 px-8 py-6 text-center shadow-lg`}
			>
				<h2
					className={clsx(
						'mb-2 text-xl font-bold',
						type === 'success' && 'text-green-600',
						type === 'error' && 'text-red-700',
						type === 'warning' && 'text-yellow-600'
					)}
				>
					{title}
				</h2>
				<p className="mb-6 text-black">{message}</p>
				<button
					className="rounded bg-slate-900 px-4 py-2 font-semibold text-white transition hover:bg-slate-700"
					onClick={onClose}
				>
					Close
				</button>
			</div>
		</div>
	);
}

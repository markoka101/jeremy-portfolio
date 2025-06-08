import clsx from 'clsx';
import { useState } from 'react';
import FormStatusModal from './modals/FormStatusModal';

export default function Booking() {
	const [name, setName] = useState('');
	const [sessionType, setSessionType] = useState('');
	const [message, setMessage] = useState('');
	const [email, setEmail] = useState('');
	const [modal, setModal] = useState({ open: false, title: '', message: '', type: '' });

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!name.trim() || !email.trim() || !sessionType.trim() || !message.trim()) {
			setModal({
				open: true,
				title: 'Incomplete Form',
				message: 'Please fill out all fields before submitting.',
				type: 'warning'
			});
			return;
		}

		setModal({
			open: true,
			title: 'Message Sent!',
			message: "Thank you for booking! I'll be in touch soon.",
			type: 'success'
		});

		// setModal({
		// 	open: true,
		// 	title: 'Something Went Wrong',
		// 	message: 'There was an error sending your message. Please try again later.',
		// 	type: 'error'
		// });
	};

	const fieldStyles = clsx(
		'mb-4 rounded border-[1px] border-gray-800 px-1 py-1.5 text-xs placeholder-slate-700 font-inter'
	);
	const labelStyles = clsx('px-1 py-1 font-semibold');

	return (
		<section id="booking-page" className="flex h-full w-full flex-col items-center pb-10">
			<FormStatusModal
				open={modal.open}
				onClose={() => setModal({ ...modal, open: false })}
				title={modal.title}
				message={modal.message}
				type={modal.type}
			/>

			<header className="mx-auto mt-20 flex w-4/5 flex-col items-center text-white font-inter">
				<h1 className="mb-4 text-7xl font-bold">Booking</h1>

				<p className="text-center">
					Fill out this form to book a session! <br></br>In your message please give me all the
					details to make this the perfect shoot!
				</p>
			</header>

			<form
				onSubmit={handleSubmit}
				className="mt-10 flex w-5/6 flex-col rounded-md bg-amber-100/100 px-10 py-10 shadow-sm sm:mt-20 sm:w-[500px]"
			>
				<label htmlFor="name-input" className={labelStyles}>
					Name
				</label>
				<input
					id="name-input"
					type="text"
					placeholder="First Last"
					required
					className={fieldStyles}
					onChange={(e) => setName(e.target.value)}
				/>

				<label htmlFor="email-input" className={labelStyles}>
					Email
				</label>
				<input
					id="email-input"
					type="email"
					placeholder="youremail@example.com"
					required
					className={fieldStyles}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<label htmlFor="session-type" className={labelStyles}>
					Session Type
				</label>
				<input
					id="session-type"
					type="text"
					placeholder="Event / Proposal / Session / Other"
					required
					className={fieldStyles}
					onChange={(e) => setSessionType(e.target.value)}
				/>

				<label htmlFor="message-input" className={labelStyles}>
					Message
				</label>
				<textarea
					id="message-input"
					placeholder="Ideal times, location, and any other details to make this the perfect shoot!"
					required
					className={fieldStyles}
					rows={6}
					onChange={(e) => setMessage(e.target.value)}
				/>

				<button type="submit" className="mt-6 rounded bg-slate-900 py-2 font-semibold text-white">
					Submit
				</button>
			</form>
		</section>
	);
}

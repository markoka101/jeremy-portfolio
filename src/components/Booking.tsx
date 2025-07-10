import clsx from 'clsx';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { submitBooking } from '../api/booking';
import FormStatusModal from './modals/FormStatusModal';

interface ModalState {
	open: boolean;
	title: string;
	message: string;
	type: 'error' | 'success' | 'warning';
}

export default function Booking() {
	const [name, setName] = useState<string>('');
	const [sessionType, setSessionType] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [modal, setModal] = useState<ModalState>({ open: false, title: '', message: '', type: 'warning' });

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

		try {
			await submitBooking({ name, email, sessionType, message });
			setModal({
				open: true,
				title: 'Message Sent!',
				message: "Thank you for booking! I'll be in touch soon.",
				type: 'success'
			});
		} catch (err) {
			setModal({
				open: true,
				title: 'Something Went Wrong',
				message: 'There was an error sending your message. Please try again later.',
				type: 'error'
			});
			console.error(err);
		}
	};

	const fieldStyles = clsx(
		'mb-4 rounded border-[1px] border-gray-800 px-1 py-1.5 text-xs placeholder-slate-700 font-inter'
	);
	const labelStyles = clsx('px-1 py-1 font-semibold');

	return (
		<>
			<Helmet>
				<title>Book a Session | Jeremy Messina Photography</title>
				<meta
					name="description"
					content="Book a photography session or event with Jeremy Messina. Fill out the booking form to reserve your date for portraits, events, or proposals."
				/>
				<meta property="og:title" content="Book a Session | Jeremy Messina Photography" />
				<meta
					property="og:description"
					content="Reserve your spot for a photo session, event, or proposal with Jeremy Messina, freelance photographer."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://jeremy-photography-portfolio.netlify.app/book-photo-session" />
			</Helmet>
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
					data-netlify="true"
					onSubmit={handleSubmit}
					name="book"
					className="mt-10 flex w-5/6 flex-col rounded-md bg-amber-100/100 px-10 py-10 shadow-2xl sm:mt-20 sm:w-[500px] md:w-[600px]"
				>
					<input type="hidden" name="bot-field" />
					<label htmlFor="name-input" className={labelStyles}>
						Name
					</label>
					<input
						id="name-input"
						name="name"
						type="text"
						placeholder="Full Name"
						required
						aria-required='true'
						className={fieldStyles}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
					/>

					<label htmlFor="email-input" className={labelStyles}>
						Email
					</label>
					<input
						id="email-input"
						type="email"
						name="email"
						placeholder="youremail@example.com"
						required
						aria-required='true'
						className={fieldStyles}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
					/>

					<label htmlFor="session-type" className={labelStyles}>
						Session Type
					</label>
					<input
						id="session-type"
						name="sessionType"
						type="text"
						placeholder="Event / Proposal / Session / Other"
						required
						aria-required='true'
						className={fieldStyles}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setSessionType(e.target.value)}
					/>

					<label htmlFor="message-input" className={labelStyles}>
						Message
					</label>
					<textarea
						id="message-input"
						placeholder="Ideal times, location, and any other details to make this the perfect shoot!"
						name="message"
						required
						aria-required='true'
						className={fieldStyles}
						rows={6}
						onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
					/>

					<button type="submit" className="mt-6 rounded bg-slate-900 py-2 font-semibold text-white hover:bg-slate-900/90 transition-all duration-150 ease-in-out">
						Submit
					</button>
				</form>
			</section>
		</>
	);
}
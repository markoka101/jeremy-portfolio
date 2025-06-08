import React, { useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import About from './components/About';
import Booking from './components/Booking';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<main className="min-w-screen relative flex min-h-screen flex-col">
			<Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

			{isOpen && (
				<button
					type="button"
					className="fixed inset-0 z-30 bg-black bg-opacity-30"
					aria-label="Close menu overlay"
					onClick={() => setIsOpen(false)}
					style={{ outline: 'none', border: 'none', padding: 0, margin: 0 }}
				/>
			)}
			<div className="relative z-10 flex-1">
				<AnimatePresence mode="wait">
					<motion.div
						key={location.pathname}
						initial={{ opacity: 0, position: 'absolute', width: '100%' }}
						animate={{ opacity: 1, position: 'absolute', width: '100%' }}
						exit={{ opacity: 0, position: 'absolute', width: '100%' }}
						transition={{ duration: 0.2, ease: 'easeInOut' }}
						style={{ top: 0, left: 0 }}
					>
						<Routes location={location}>
							<Route path="/" element={<Home />} />
							<Route path="/about-jeremy" element={<About />} />
							<Route path="/portfolio" element={<Portfolio />} />
							<Route path="/book-photo-session" element={<Booking />} />
							<Route path="/session-pricing" element={<Pricing />} />
							<Route path="*" element={<Navigate to="/" replace />} />
						</Routes>
					</motion.div>
				</AnimatePresence>
			</div>
			<Footer />
		</main>
	);
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Booking from "./components/Booking";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <main>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="about-me" element={<About />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="book-photo-session" element={<Booking />} />
                    <Route path="pricing" element={<Pricing />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </main>
    );
}

export default App;

import React from 'react';
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import Admin from './components/Admin/Admin';
import Experience from './components/Experience/Experience';
import Restaurant from './components/Restaurant/Restaurant';
import Recreational from './components/Recreational/Recreational';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/booking" element={<Booking />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/reviews" element={<Reviews />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/admin" element={<Admin />} />
                <Route exact path="/experience" element={<Experience />} />
                <Route exact path="/restaurant" element={<Restaurant />} />
                <Route exact path="/recreational" element={<Recreational />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
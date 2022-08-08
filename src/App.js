import React from 'react';
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
// import Admin from './components/Admin/Admin';
import Experience from './components/Experience/Experience';
import Restaurant from './components/Restaurant/Restaurant';
import Recreational from './components/Recreational/Recreational';
import BookingForm from './components/BookingForm/BookingForm'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/booking" element={<Booking />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                {/* <Route exact path="/admin" element={<Admin />} /> */}
                <Route exact path="/experience" element={<Experience />} />
                <Route exact path="/restaurant" element={<Restaurant />} />
                <Route exact path="/recreational" element={<Recreational />} />
                <Route exact path="/bookingform" element={<BookingForm />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
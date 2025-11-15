//src/App.jsx
import React from 'react';
import { Router, Route } from './utils/Router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import DoctorsPage from './pages/DoctorsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import WhatsAppButton from './components/WhatsAppButton';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Router>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/services">
          <ServicesPage />
        </Route>
        <Route path="/doctors">
          <DoctorsPage />
        </Route>
        <Route path="/gallery">
          <GalleryPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Router>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
      <PageTransition />
    </div>
  );
}

export default App;
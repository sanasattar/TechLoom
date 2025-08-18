import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import WebDevelopment from '../pages/WebDevelopment';
import DigitalMarketing from '../pages/DigitalMarketing';
import GraphicDesign from '../pages/GraphicDesign';
import VideoProduction from '../pages/VideoProduction';
import DataAnalytics from '../pages/DataAnalytics';
import WebScraping from '../pages/WebScraping';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main App Route with Navigation */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="web-development" element={<WebDevelopment />} />
          <Route path="digital-marketing" element={<DigitalMarketing />} />
          <Route path="graphic-design" element={<GraphicDesign />} />
          <Route path="video-production" element={<VideoProduction />} />
          <Route path="data-analytics" element={<DataAnalytics />} />
          <Route path="web-scraping" element={<WebScraping />} />
        </Route>
        
        {/* Auth Pages - Direct Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
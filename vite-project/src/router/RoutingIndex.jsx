import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import About from '../pages/About';
import React from 'react';
import DataAnalysis from '../pages/DataAnalysis';
import DigitalMarketing from '../pages/DigitalMarketing';
import GraphicDesigning from '../pages/GraphicDesigning';
import VideoEditing from '../pages/VideoEditing';
import WebScraping from '../pages/WebScraping';
import WebsiteDevelopment from '../pages/WebsiteDevelopment';
import SerivceDataAnalysis from "../offerPages/SerivceDataAnalysis";
import SerivceVideoEditing from "../offerPages/SerivceVideoEditing";
import SerivceWebScraping from "../offerPages/SerivceWebScraping";
import SerivceWebsiteDevelopment from '../offerPages/SerivceWebsiteDevelopment';
import SerivceGraphicDesigning from '../offerPages/SerivceGraphicDesigning';
import SerivceDigitalMarketing from '../offerPages/SerivceDigitalMarketing';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="services/dataanalysis" element={<DataAnalysis />} />
          <Route path="services/digitalmarketing" element={<DigitalMarketing />} /> 
          <Route path="services/graphicdesigning" element={<GraphicDesigning />} />
          <Route path="services/videoediting" element={<VideoEditing />} />
          <Route path="services/webscraping" element={<WebScraping />} />
          <Route path="services/websitedevelopment" element={<WebsiteDevelopment />} />
          {/* offer page routing */}
          <Route path="services/dataanalysis/serivcedataanalysis" element={<SerivceDataAnalysis />} />
          <Route path="service/videoediting/serivcevideoediting" element={<SerivceVideoEditing />} />
          <Route path="service/webscraping/serivcewebscraping" element={<SerivceWebScraping />} />
          <Route path="service/websitedevelopment/servicewebsitedevelopment" element={<SerivceWebsiteDevelopment />} />
          <Route path="service/services/servicegraphicdesigning" element={<SerivceGraphicDesigning />} />
          <Route path="service/services/servicedigitalmarketing" element={<SerivceDigitalMarketing />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
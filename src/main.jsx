import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx';
import Skating from './pages/Skating.jsx';
import Blog from './pages/Blog.jsx';
import TitleUpdater from './components/TitleUpdater.jsx';
import NavigationMenu from "./components/NavigationMenu";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TitleUpdater />
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skating" element={<Skating />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)

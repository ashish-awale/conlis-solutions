// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import About from './pages/about/About';
import WhyConlis from './pages/whyConlis/WhyConlis';
import Career from './pages/career/Career';
import ContactUs from './pages/contactUs/ContactUs';
import Products from './pages/products/Products';
import ScrollToTop from './components/ScrollToTop';
import Services from './pages/services/Services';
import Company from './pages/company/Company';
import Home from './pages/home/Home';


function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        {/* <Footer /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/company" element={<Company />} />
          <Route path="/about" element={<About />} />
          <Route path="/whyConlis" element={<WhyConlis />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

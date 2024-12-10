import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductFeatures from "./components/ProductFeatures"
import ServicesDetails from './components/ServicesDetails';
import ServicesList from './components/ServicesList';
import { services } from './components/ServicesData'; // Import services from ServicesData
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/features" element={<ProductFeatures />} />
          <Route path="/services" element={<ServicesList services={services} />} />
          <Route path="/services/:id" element={<ServicesDetails services={services} />} />
          <Route path="/dashboard" element={<Dashboard />} />


        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

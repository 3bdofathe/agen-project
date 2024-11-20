// eslint-disable-next-line no-unused-vars

import './app.css';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/home/home';
import Services from './pages/services/services';
import Blog from './pages/blog/blog';
import PricingSection from './pages/pricing/pricingSection';
import AboutAgent from './pages/about/aboutAgent';
import FAQ from './pages/FAQ\'S/FAQ';
import ContactUs from './pages/contact/contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route Component={Home} path='/'/>
        <Route Component={Services} path='/Services'></Route>
        <Route Component={Blog} path='/Blog'></Route>
        <Route Component={PricingSection} path='/Pricing'></Route>
        <Route Component={AboutAgent} path='/About'></Route>
        <Route Component={FAQ} path='/FAQ'></Route>
        <Route Component={ContactUs} path='/Contact'></Route>
      </Routes>
    </Router>
  );
}

export default App;

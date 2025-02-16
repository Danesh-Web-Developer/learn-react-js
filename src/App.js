// import logo from './logo.svg';
// import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import'./style/Root.css'
import Navbar1 from './compounts/Navbar';
import Hero from './compounts/Hero';
import About from './compounts/About';
import Service from './compounts/Service';
import Works from './compounts/Works';
import Dummy from './compounts/People';
import According from './compounts/According';
import Contact from './compounts/Contact';
import Footer from './compounts/Footer';
function App() {
  return (
    <div className="App">
      <Navbar1/>
      <Hero/>
      <About/>
      <Service/>
      <Works/>
      <Dummy/>
      <According/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

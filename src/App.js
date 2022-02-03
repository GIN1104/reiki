import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Contact from "./components/Contact";
import SomeText from "./components/SomeText";
import Footer from './components/Footer';

import CarouselImg from './components/CarouselImg/CarouselImg'
import FotoContainer from './components/FotoContainer/FotoContainer';


function App() {
  return (
    <div className="App">
       <Navbar />
       <FotoContainer/>
       <SomeText/>
       <CarouselImg/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;

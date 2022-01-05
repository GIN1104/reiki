import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Contact from "./components/Contact";
import SomeText from "./components/SomeText";
import Footer from './components/Footer';
import FotoContainer from './components/FotoContainer';
import CarouselImg from './components/CarouselImg/CarouselImg'


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

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Contact from "./components/Contact";
import SomeText from "./components/SomeText";
import Footer from './components/Footer';
import FotoContainer from './components/FotoContainer';


function App() {
  return (
    <div className="App">
       <Navbar />
       <FotoContainer/>
       <SomeText/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;

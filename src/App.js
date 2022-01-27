import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // to route to different pages 
                                                                          // to make sure we route 1 page at a time we are using Routes

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/React_frenzy/" element={<Home />} />   
          <Route path="/React_frenzy/menu" element={<Menu />} />
          <Route path="/React_frenzy/about" element={<About />} />
          <Route path="/React_frenzy/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      

    </div>
  );
}

export default App;

// for each page we need to create new routess

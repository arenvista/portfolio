import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/navbar.js';
import { Skills } from './components/skills.js';
import { Banner } from './components/banner.js';
import { Projects } from './components/projects.js';
import { Contact } from './components/contact.js';
import { Footer } from './components/footer.js';
import { Resume } from './resume.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        
        {/* OPTION 1: Home Page (Includes NavBar + Footer) */}
        <Route path="/" element={
          <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        } />

        {/* OPTION 2: Resume Page (Stand-alone, NO NavBar/Footer) */}
        <Route path="/resume" element={<Resume />} />
 
      </Routes>
    </Router>
  );
}

export default App;

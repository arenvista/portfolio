import './App.css';
import { NavBar } from './components/navbar.js';
import { Skills } from './components/skills.js';
import { Banner } from './components/banner.js';
import { Projects } from './components/projects.js';
import { Contact } from './components/contact.js';
import  'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
    </div>
  );
}

export default App;

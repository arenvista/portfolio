import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar.js';
import { Skills } from './components/skills.js';
import { Banner } from './components/banner.js';
import  'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
            <NavBar />
            <Banner />
            <Skills />
    </div>
  );
}

export default App;

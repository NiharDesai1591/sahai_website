import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectHRP from './pages/ProjectHRP';

function App() {
  return (
    <HashRouter>
      <div className="bg-background min-h-screen">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/hrp-copilot" element={<ProjectHRP />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;

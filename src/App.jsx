import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LeapfrogThesis from './components/LeapfrogThesis';
import AgentFramework from './components/AgentFramework';
import DayInTheLife from './components/DayInTheLife';
import ProjectGallery from './components/ProjectGallery';
import TechnicalArchitecture from './components/TechnicalArchitecture';
import TeamSection from './components/TeamSection';
import PartnersRecognition from './components/PartnersRecognition';
import GeographicFootprint from './components/GeographicFootprint';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-ink min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <LeapfrogThesis />
        <AgentFramework />
        <DayInTheLife />
        <ProjectGallery />
        <TechnicalArchitecture />
        <TeamSection />
        <PartnersRecognition />
        <GeographicFootprint />
        <Footer />
      </main>
    </div>
  );
}

export default App;

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProblemOpportunity from './components/ProblemOpportunity';
import AgentPersonas from './components/AgentPersonas';
import DayInLife from './components/DayInLife';
import WhyUsHowWeWork from './components/WhyUsHowWeWork';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ProblemOpportunity />
        <AgentPersonas />
        <DayInLife />
        <WhyUsHowWeWork />
        <Footer />
      </main>
    </div>
  );
}

export default App;

import './App.css';
import Header from '@components/Header';
import Hero from '@components/Hero';
import OurHistory from './components/OurHistory';
import RSVP from './components/RSVP';

function App() {
  return (
    <div className="pb-8">
      <Header />
      <Hero />
      <OurHistory />
      <RSVP />
    </div>
  );
}

export default App;

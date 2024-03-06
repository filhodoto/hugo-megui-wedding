import Header from '@components/Header';
import Hero from '@components/Hero';
import OurHistory from '@components/OurHistory';
import RSVP from '@components/RSVP';
import Day from '@components/Day';
import OtherInfo from '@components/OtherInfo';
import Footer from '@components/Footer';

function App() {
  return (
    <div className="pb-8">
      <Header />
      <Hero />
      <OurHistory />
      <Day />
      <RSVP />
      <OtherInfo />
      <Footer />
    </div>
  );
}

export default App;

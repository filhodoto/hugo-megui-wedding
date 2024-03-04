import './App.css';
import Header from '@components/Header';
import Hero from '@components/Hero';
import Form from '@components/Form';
import OurHistory from './components/OurHistory';

function App() {
  return (
    <div className="pb-8">
      <Header />
      <Hero />
      <OurHistory />
      <Form />
    </div>
  );
}

export default App;

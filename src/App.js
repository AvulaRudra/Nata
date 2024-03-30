import Home from './components/Home';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';

const App = () => {


  return (
    <div style={{ backgroundColor: '#171B41' }}>
      <Navbar style={{ position:'fixed', top: 0, left: 0, right: 0, zIndex: 1 }} />
      <div style={{ position: 'relative', zIndex: 0 }}>
        <Home />
        <Results />
        <Testimonials />
      </div>
    </div>
  );
};

export default App;

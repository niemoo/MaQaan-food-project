import './App.css';
import Hero from './pages/Hero';
import About from './pages/About';
import Navbar from './pages/Navbar';
import Menu from './pages/Menu';
import Review from './pages/Review';
import Order from './pages/Order';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Review />
      <Order />
    </>
  );
}

export default App;

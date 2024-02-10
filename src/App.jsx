
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {


  return (
    <>
      <div className="main_wrapper min-h-screen min-w-screen">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  )
}

export default App

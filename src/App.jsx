import Navbar from './section/Navbar';
import Hero from './section/Hero';
import About from './section/About.jsx';
import Work from './section/Work.jsx';
import Contact from './section/Contact.jsx';
import Footer from './section/Footer.jsx'
const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </main>
  );
};

export default App;
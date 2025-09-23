import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Projects from '../components/portfolio/Projects';
import Experience from '../components/portfolio/Experience';
import Contact from '../components/portfolio/Contact';
import AnimatedBackground from '../components/shared/AnimatedBackground';

const Home = () => {
  return (
    <>
      <AnimatedBackground />
      
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
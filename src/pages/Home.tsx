import { Helmet } from 'react-helmet-async';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Skills from '../components/portfolio/Skills';
import Projects from '../components/portfolio/Projects';
import Experience from '../components/portfolio/Experience';
import Contact from '../components/portfolio/Contact';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer Victor Jaepyo Jo Portfolio Blog" />
        <meta property="og:title" content="Full Stack Developer" />
        <meta property="og:description" content="풀스택 개발자 조재표 포트폴리오 블로그" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
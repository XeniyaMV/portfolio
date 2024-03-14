import AboutMe from '../../components/AboutMe';
import Contact from '../../components/Contact';
import Header from '../../components/Header';
import Projects from '../../components/Projects';
import StartScreen from '../../components/StartScreen';

const MainPage = (): JSX.Element => (
  <>
    <Header />
    <main>
      <StartScreen />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  </>
);

export default MainPage;

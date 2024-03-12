import AboutMe from '../../components/AboutMe';
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
    </main>
  </>
);

export default MainPage;

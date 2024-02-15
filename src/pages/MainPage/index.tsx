import AboutMe from '../../components/AboutMe';
import Header from '../../components/Header';
import StartScreen from '../../components/StartScreen';

const MainPage = (): JSX.Element => (
  <>
    <Header />
    <main>
      <StartScreen />
      <AboutMe />
    </main>
  </>
);

export default MainPage;

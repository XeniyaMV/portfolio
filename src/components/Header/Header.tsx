import ContainerLayout from '../ContainerLayout';
import NAV_MENU_LINKS from '../../constants/NAV_MENU_LINKS';
import Nav from './components/Nav';

const Header = (): JSX.Element => (
  <header className="header">
    <ContainerLayout className="header__content">
      <>
        <h1 className="header__logo">
          <a href="#">Hi!</a>
        </h1>
        <Nav className="header__nav" items={NAV_MENU_LINKS} />
      </>
    </ContainerLayout>
  </header>
);

export default Header;

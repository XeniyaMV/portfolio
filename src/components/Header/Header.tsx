import ContainerLayout from '../ContainerLayout';
import NAV_MENU_LINKS from '../../constants/NAV_MENU_LINKS';
import Nav from './components/Nav';
import StickyLayout from '../StickyLayout';

const Header = (): JSX.Element => (
  <StickyLayout tagName="header" unstuckClassName="header" stuckClassName="header header_stuck">
    <ContainerLayout className="header__content">
      <>
        <h1 className="header__logo">
          <a href="#">Hi!</a>
        </h1>
        <Nav className="header__nav" items={NAV_MENU_LINKS} />
      </>
    </ContainerLayout>
  </StickyLayout>
);

export default Header;

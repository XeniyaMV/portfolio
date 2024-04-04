import Nav from '../Nav';
import closeIcon from '../../../../assets/close-icon.svg';
import NAV_MENU_LINKS from '../../../../constants/NAV_MENU_LINKS';
import { useEffect, useState } from 'react';

const Burger = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const setBurger = (option: 'close' | 'open'): void => {
    switch (option) {
      case 'close':
        setIsOpen(false);
        document.body.classList.remove('noscroll');
        break;
      case 'open':
        setIsOpen(true);
        document.body.classList.add('noscroll');
        break;
      default:
        setIsOpen(false);
        document.body.classList.remove('noscroll');
    }
  };

  useEffect(() => {
    const handleResize = (): void => setBurger('close');

    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <article className="burger-menu">
      <div
        className={`burger-icon burger-menu__burger${isOpen ? ' burger-menu__burger_hidden' : ''}`}
        onClick={(): void => setBurger('open')}
      >
        <div className="burger-icon__line" />
        <div className="burger-icon__line" />
        <div className="burger-icon__line" />
      </div>
      <div
        className={`burger-menu__overlay${isOpen ? ' burger-menu__overlay_visible' : ''}`}
        onClick={(): void => setBurger('close')}
      />
      <div className={`burger-menu__content${isOpen ? ' burger-menu__content_open' : ''}`}>
        <button className="burger-menu__close-button" onClick={(): void => setBurger('close')}>
          <img src={closeIcon} alt="close icon" />
        </button>
        <Nav className="burger-menu__nav" items={NAV_MENU_LINKS} onItemClick={(): void => setBurger('close')} />
      </div>
    </article>
  );
};

export default Burger;

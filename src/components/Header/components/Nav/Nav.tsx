import { NavItem } from '../../../../types';
import getFullClassName from '../../../../utils/getFullClassName';

interface Props {
  items: NavItem[];
  className?: string;
}

const Nav = ({ items, className }: Props): JSX.Element => {
  const fullClassName = getFullClassName('nav', className);

  return (
    <nav className={fullClassName}>
      <ul className="nav__list">
        {items.map((item) => (
          <li key={item.title} className="nav__item">
            <a href={item.url}> {item.title} </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

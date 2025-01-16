import { nanoid } from 'nanoid';
import { NavLinkItem } from './NavLinkItem';

function NavLinkList() {
  const navLinks = [
    { name: 'Introduction', to: 'Introduction' },
    { name: 'Experience', to: 'Experience' },
    { name: 'Projects', to: 'Projects' },
    { name: 'Contact', to: 'Contact' },
  ];
  return (
    <ul className="navbar-nav align-items-center">
      {navLinks.map((link, index) => (
        <NavLinkItem
          key={nanoid()}
          index={index}
          link={link}
        />
      ))}
    </ul>
  );
}

export default NavLinkList;

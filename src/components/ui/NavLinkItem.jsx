import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useSection } from '../../context/SectionContext';
import { RiArrowRightDoubleFill } from 'react-icons/ri';
export function NavLinkItem({ link, index }) {
  const { onContact, onIntro, handleSetActive } = useSection();
  const [focusedLink, setFocusedLink] = useState(null);

  return (
    <li
      id="offcanvas-list"
      className="nav-item"
      onFocus={() => setFocusedLink(link.name)}
      onBlur={() => setFocusedLink(null)}
      key={index}>
      <Link
        activeClass="active"
        className={`nav-link ${onContact === 'true' ? 'light' : ''} ${
          onIntro === 'true' ? 'dark' : ''
        }`}
        onSetActive={handleSetActive}
        to={link.to}
        href={`#${link.to}`}
        spy={true}
        smooth={true}
        duration={500}
        aria-label={`Go to ${link.name} section`}
        activeStyle={{
          fontWeight: '600',
        }}>
        <div className="d-flex align-items-center justify-content-center">
          {link.name}
          {focusedLink === link.name && (
            <RiArrowRightDoubleFill
              className="focus-arrow"
              size={30}
            />
          )}
        </div>
      </Link>
    </li>
  );
}

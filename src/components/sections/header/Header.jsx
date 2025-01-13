import { useEffect, useState } from 'react';
import { IoMdColorPalette } from 'react-icons/io';
import { LiaWindowCloseSolid } from 'react-icons/lia';
import { RiArrowRightDoubleFill } from 'react-icons/ri';
import { Link, scrollSpy } from 'react-scroll';
import { useSection } from '../../../context/SectionContext';
import { useColorPicker } from '../../../context/ColorPickerContext';
import NavTogglerIcon from '../../ui/icons/NavTogglerIcon';

function Header() {
  const { onContact, onIntro, handleSetActive } = useSection();
  const { handlePalletLinkClick } = useColorPicker();
  const [focusedLink, setFocusedLink] = useState(null);

  const navLinks = [
    { name: 'Introduction', to: 'Introduction' },
    { name: 'Experience', to: 'Experience' },
    { name: 'Projects', to: 'Projects' },
    { name: 'Contact', to: 'Contact' },
  ];

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <header className="header">
      <nav className="navbar navbar-expand-md fixed-top navbar-light me-blur px-1 px-md-3 px-lg-5">
        <div className="container-fluid">
          <Link
            to="Introduction"
            href="#Introduction"
            className="navbar-brand d-flex align-items-center">
            <img
              src="/logo.svg"
              alt="logo"
              width="48"
              height="48"
            />
          </Link>

          <button
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            id="navbar-toggler"
            className="navbar-toggler"
            tabIndex="0"
            type="button">
            <NavTogglerIcon />
          </button>

          <div
            className="offcanvas offcanvas-start me-bg-orange-50"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            data-bs-backdrop="static">
            <div className="offcanvas-header">
              <button
                type="button"
                className="text-reset ms-auto me-btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close">
                <LiaWindowCloseSolid
                  className="close-icon me-text-primary"
                  size={30}
                />
              </button>
            </div>
            <div className="offcanvas-body ms-md-auto">
              <ul className="navbar-nav align-items-center">
                <li
                  className="nav-item color-picker order-sm-1 order-md-last"
                  data-bs-dismiss="offcanvas"
                  onClick={handlePalletLinkClick}>
                  {' '}
                  <IoMdColorPalette size={25} />
                </li>
                {navLinks.map((link, index) => (
                  <li
                    id="offcanvas-list"
                    className="nav-item"
                    onFocus={() => setFocusedLink(link.name)}
                    onBlur={() => setFocusedLink(null)}
                    key={index}>
                    <Link
                      activeClass="active"
                      className={`nav-link ${
                        onContact === 'true' ? 'light' : ''
                      } ${onIntro === 'true' ? 'dark' : ''}`}
                      onSetActive={handleSetActive}
                      to={link.to}
                      href={`#${link.to}`}
                      spy={true}
                      smooth={true}
                      duration={500}
                      activeStyle={{ fontWeight: '600' }}>
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
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import { useEffect, useState } from 'react';
import { LiaWindowCloseSolid } from 'react-icons/lia';
import { Link, scrollSpy } from 'react-scroll';
import { useSection } from '../context/useSection';
import NavTogglerIcon from '../ui/NavTogglerIcon';
import { RiArrowRightDoubleFill } from 'react-icons/ri';

function Header() {
  const { onContact, onIntro, handleSetActive } = useSection();
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
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button
                id="offcanvas-close"
                type="button"
                className="text-reset ms-auto"
                data-bs-dismiss="offcanvas"
                aria-label="Close">
                <LiaWindowCloseSolid
                  className="close-icon text-orange-500"
                  size={30}
                />
              </button>
            </div>
            <div className="offcanvas-body ms-md-auto">
              <ul className="navbar-nav align-items-center">
                {navLinks.map((link, index) => (
                  <li
                    tabIndex={0}
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
                      duration={200}
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

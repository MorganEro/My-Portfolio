import { useEffect } from 'react';
import { Link, scrollSpy } from 'react-scroll';
import ColorPickerButton from '../../ui/buttons/ColorPickerButton';
import CloseButton from '../../ui/CloseButton';
import NavTogglerIcon from '../../ui/icons/NavTogglerIcon';
import NavLinkList from '../../ui/NavLinkList';

function Header() {
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
            className="navbar-brand d-flex align-items-center"
            aria-label='Go to "Introduction" section'>
            <img
              src="/logo.svg"
              alt="website logo"
              className="navbar-logo"
              width="48"
              height="48"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="navbar-toggler">
            <NavTogglerIcon />
          </button>

          <div
            className="offcanvas offcanvas-start me-bg-orange-50"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            data-bs-backdrop="static">
            <div className="offcanvas-header">
              <CloseButton
                className="ms-auto"
                target="offcanvas"
              />
            </div>
            <div className="offcanvas-body ms-md-auto ">
              <div className="navbar-items d-flex gap-2">
                <NavLinkList />
                <ColorPickerButton />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import { useSection } from '../../../context/SectionContext';

function NavTogglerIcon() {
  const { onContact } = useSection();

  return (
    <div className="navbar-toggler__container ">
      <div
        className={`navbar-toggler__icon ${
          onContact === 'true' ? 'light' : ''
        }`}>
        <span className="line-1"></span>
        <span className="line-2"></span>
        <span className="line-3"></span>
        <span className="line-4"></span>
      </div>
    </div>
  );
}

export default NavTogglerIcon;

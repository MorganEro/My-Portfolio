import { IoMdColorPalette } from 'react-icons/io';
import { useColorPicker } from '../../../context/ColorPickerContext';
import { useSection } from '../../../context/SectionContext';

function ColorPickerButton() {
  const { handlePalletLinkClick } = useColorPicker();
  const { onContact, onIntro } = useSection();

  return (
    <button
      className={`nav-item me-btn-color-picker order-sm-1 order-md-last ${
        onContact === 'true' ? 'light' : ''
      } ${onIntro === 'true' ? 'dark' : ''}`}
      data-bs-dismiss="offcanvas"
      aria-label="Change color theme"
      onClick={handlePalletLinkClick}>
      {' '}
      <IoMdColorPalette size={25} />
    </button>
  );
}

export default ColorPickerButton;

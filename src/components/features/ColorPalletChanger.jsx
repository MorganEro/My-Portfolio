import { useColorPicker } from '../../context/ColorPickerContext';
import ColorList from '../ui/ColorList';

export const ColorPalletChanger = () => {
  const { primaryColor, applyPalette, handleColorChange, handleReset } =
    useColorPicker();

  return (
    <div className="color-pallet-changer container px-0">
      <form
        className="color-pallet-changer-form d-flex mb-2 justify-content-between"
        onSubmit={applyPalette}>
        <input
          type="color"
          id="color-picker"
          className="color-picker p-0"
          value={primaryColor}
          onChange={e => handleColorChange(e.target.value)}
        />
        <button
          type="submit"
          className="me-btn-color-change"
          style={{ backgroundColor: primaryColor }}>
          Accept
        </button>
        <button
          type="button"
          className="me-btn-color-change"
          style={{ backgroundColor: '#fd7e14' }}
          onClick={handleReset}>
          Reset
        </button>
      </form>

      <ColorList />
    </div>
  );
};

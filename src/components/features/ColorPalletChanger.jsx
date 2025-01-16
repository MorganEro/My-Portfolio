import { useColorPicker } from '../../context/ColorPickerContext';
import { BorderedButton } from '../ui/buttons/BorderedButton';
import { NoBorderButton } from '../ui/buttons/NoBorderButton';
import ColorList from '../ui/ColorList';

export const ColorPalletChanger = () => {
  const { primaryColor, applyPalette, handleColorChange, handleReset } =
    useColorPicker();

  return (
    <div className="color-pallet-changer container px-0 d-flex flex-column gap-2">
      <form
        className="color-pallet-changer-form d-flex mb-2 justify-content-between align-items-center"
        onSubmit={applyPalette}>
        <div className="input-container d-flex justify-content-between align-items-center">
          <label
            htmlFor="color-picker"
            className="me-label-color-picker pe-2 text-dark-700">
            Choose color:
          </label>
          <input
            type="color"
            id="color-picker"
            className="color-picker p-0"
            value={primaryColor}
            onChange={e => handleColorChange(e.target.value)}
            aria-label="Choose color"
          />
        </div>

        <BorderedButton
          className="dark"
          aria-label="Accept color change"
          style={{ color: primaryColor, borderColor: primaryColor }}>
          Accept
        </BorderedButton>
      </form>

      <ColorList />
      <NoBorderButton
        className="align-self-center"
        style={{ color: '#fd7e14' }}
        aria-label="Reset to default color"
        onClick={handleReset}>
        Reset to default
      </NoBorderButton>
    </div>
  );
};

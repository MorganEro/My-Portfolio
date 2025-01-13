import { nanoid } from 'nanoid';
import SingleColor from './SingleColor';
import { useColorPicker } from '../../context/ColorPickerContext';

function ColorList() {
  const { colors } = useColorPicker();
  return (
    <div className="container">
      <div className="row">
        {colors.slice(1, -1).map((color, index) => (
          <SingleColor
            key={nanoid()}
            color={color}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorList;

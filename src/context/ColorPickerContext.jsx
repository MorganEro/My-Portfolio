import React, { createContext, useContext, useState } from 'react';
import Values from 'values.js';
import { useModal } from './ModalContext';

const ColorPickerContext = createContext();

export const ColorPickerProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState('#fd7e14');
  const [colors, setColors] = useState(new Values('#fd7e14').all(10));
  const { openModal, isModalOpen, closeModal } = useModal();

  const handleColorChange = color => {
    const newColors = new Values(color).all(10);
    setPrimaryColor(color);
    setColors(newColors);
    updateCssVariables(newColors);
    saveColorSettings(newColors, color);
  };

  const rgbToRgba = (rgbArray, alpha) => {
    return `rgba(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]}, ${alpha})`;
  };

  const updateCssVariables = colors => {
    colors.forEach((color, index) => {
      if (!color.hex || !color.rgb) {
        console.warn(`Invalid color structure at index ${index}`, color);
        return;
      }

      const hexColor = `#${color.hex}`;
      const rgbaColor = rgbToRgba(
        color.rgb,
        index === 1 || index === 4 ? 0.9 : index === 18 ? 0.8 : 1
      );

      switch (true) {
        case index === 10:
          // Base color
          document.documentElement.style.setProperty(`--color-base`, hexColor);
          break;

        case index < 10:
          // Light colors
          document.documentElement.style.setProperty(
            `--color-light-${index * 100}`,
            hexColor
          );

          // Special cases for RGBA
          if (index === 1 || index === 4) {
            document.documentElement.style.setProperty(
              `--color-light-${index * 100}-rgba`,
              rgbaColor
            );
          }
          break;

        case index === 18:
          // Dark 700 RGBA
          document.documentElement.style.setProperty(
            `--color-dark-800-rgba`,
            rgbaColor
          );
          document.documentElement.style.setProperty(
            `--color-dark-800`,
            hexColor
          );
          break;

        case index === 19:
          // Dark 900 RGB
          document.documentElement.style.setProperty(
            `--color-dark-900-rgb`,
            rgbaColor
          );
          document.documentElement.style.setProperty(
            `--color-dark-900`,
            hexColor
          );
          break;

        case index > 10:
          // Dark colors
          const darkIndex = (index - 10) * 100;
          document.documentElement.style.setProperty(
            `--color-dark-${darkIndex}`,
            hexColor
          );
          break;

        default:
          break;
      }
    });
  };

  const saveColorSettings = (colors, primaryColor) => {
    const simplifiedColors = colors.map(color => ({
      hex: color.hex,
      rgb: color.rgb,
    }));
    localStorage.setItem('colors', JSON.stringify(simplifiedColors));
    localStorage.setItem('primaryColor', JSON.stringify(primaryColor));
  };

  const loadColorSettings = () => {
    const savedColors = localStorage.getItem('colors');
    const savedPrimaryColor = localStorage.getItem('primaryColor');

    if (savedColors && savedPrimaryColor) {
      try {
        const primaryColor = JSON.parse(savedPrimaryColor);
        const colors = JSON.parse(savedColors);
        const isValid = colors.every(color => color.hex && color.rgb);

        if (isValid) {
          setPrimaryColor(primaryColor);
          updateCssVariables(colors);
          setColors(colors);
        } else {
          handleReset();
          console.error(
            `Invalid color structure in storage. Resetting colors.`
          );
        }
      } catch (error) {
        console.error(`Error parsing colors from localStorage`, error);
      }
    }
  };

  const applyPalette = e => {
    e.preventDefault();
    updateCssVariables(colors);
    setColors(colors);
    saveColorSettings(colors, primaryColor);
  };

  const handlePalletLinkClick = () => {
    if (isModalOpen) {
      closeModal();
    } else {
      openModal();
    }
  };

  const handleReset = () => {
    setPrimaryColor('#fd7e14');
    setColors(new Values('#fd7e14').all(10));
    updateCssVariables(colors);
    localStorage.removeItem('colors');
    window.location.reload();
  };

  return (
    <ColorPickerContext.Provider
      value={{
        handlePalletLinkClick,
        primaryColor,
        setPrimaryColor,
        handleColorChange,
        colors,
        setColors,
        applyPalette,
        handleReset,
        loadColorSettings,
      }}>
      {children}
    </ColorPickerContext.Provider>
  );
};

export const useColorPicker = () => {
  const context = useContext(ColorPickerContext);
  if (!context) {
    throw new Error(
      'useColorPickerContext must be used within a ColorPickerProvider'
    );
  }
  return context;
};

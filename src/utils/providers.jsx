import { ColorPickerProvider } from '../context/ColorPickerContext';
import { LocationProvider } from '../context/LocationContext';
import { ModalProvider } from '../context/ModalContext';
import { SectionProvider } from '../context/SectionContext';

const composeProviders =
  (...providers) =>
  ({ children }) =>
    providers.reduceRight(
      (acc, Provider) => <Provider>{acc}</Provider>,
      children
    );

export const AppProviders = composeProviders(
  ModalProvider,
  ColorPickerProvider,
  SectionProvider,
  LocationProvider
);

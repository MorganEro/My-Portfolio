import { useContext } from 'react';
import { LocationContext } from './LocationProvider';

function useFormLocation() {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}

export { useFormLocation };

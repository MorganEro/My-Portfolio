import { createContext, useContext, useState } from 'react';

const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
  const [onContact, setOnContact] = useState('false');
  const [onIntro, setOnIntro] = useState('false');

  const handleSetActive = to => {
    if (to === 'Contact') {
      setOnContact('true');
    } else if (to === 'Introduction') {
      setOnIntro('true');
    } else {
      setOnContact('false');
      setOnIntro('false');
    }
  };
  return (
    <SectionContext.Provider value={{ onContact, onIntro, handleSetActive }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
};

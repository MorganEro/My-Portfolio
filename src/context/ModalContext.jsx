import { createContext, useContext, useState, useEffect, useRef } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dialogRef = useRef();
  const closeButtonRef = useRef();
  const triggerElement = useRef(null);

  const openModal = () => {
    triggerElement.current = document.activeElement;

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (triggerElement.current) {
      triggerElement.current.focus();
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === dialogRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    if (isModalOpen) {
      body.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
      closeButtonRef.current.focus();
    } else {
      body.style.overflow = 'auto';
      html.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        closeModal,
        openModal,
        dialogRef,
        closeButtonRef,
        handleKeyDown,
        handleBackdropClick,
      }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};

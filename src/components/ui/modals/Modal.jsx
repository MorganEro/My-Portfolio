import { FocusTrap } from 'focus-trap-react';
import { useModal } from '../../../context/ModalContext';
import { ColorPalletChanger } from '../../features/ColorPalletChanger';
import CloseButton from '../CloseButton';

function Modal() {
  const {
    closeModal,
    isModalOpen,
    dialogRef,
    closeButtonRef,
    handleKeyDown,
    handleBackdropClick,
  } = useModal();

  if (!isModalOpen) return null;

  return (
    <div
      className={`modal-overlay ${isModalOpen ? ' show-modal' : ''}`}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      ref={dialogRef}
      tabIndex="-1">
      <FocusTrap>
        <div className="modal-container p-4">
          <div className="position-relative">
            <CloseButton
              className=" position-absolute top-0 start-100 translate-middle"
              onClick={closeModal}
              reference={closeButtonRef}
            />

            <h5
              className="modal-title mb-3"
              id="modal-title">
              Edit Website Color Pallet
            </h5>
            <p
              id="modal-description"
              className="sr-only">
              Use the color picker below to change the color palette of the
              website.
            </p>

            <div className="">
              <ColorPalletChanger />
            </div>
          </div>
        </div>
      </FocusTrap>
    </div>
  );
}

export default Modal;

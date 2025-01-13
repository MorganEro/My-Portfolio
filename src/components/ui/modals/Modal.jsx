import { LiaWindowCloseSolid } from 'react-icons/lia';
import { useModal } from '../../../context/ModalContext';
import { ColorPalletChanger } from '../../features/ColorPalletChanger';

function Modal() {
  const { closeModal, isModalOpen } = useModal();

  return (
    <div className={`modal-overlay ${isModalOpen ? ' show-modal' : ''}`}>
      <div className="modal-container p-4">
        <div className="position-relative">
          <button
            type="button"
            className="me-btn-close position-absolute top-0 start-100 translate-middle"
            onClick={closeModal}
            aria-label="Close">
            <LiaWindowCloseSolid
              className="close-icon me-text-primary"
              size={30}
            />
          </button>
          <h5 className="modal-title mb-3">Edit Website Color Pallet</h5>

          <div className="">
            <ColorPalletChanger />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

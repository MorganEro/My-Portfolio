import { LiaWindowCloseSolid } from 'react-icons/lia';

function CloseButton({ reference, className, onClick, target }) {
  return (
    <button
      type="button"
      className={`me-btn-close ${className}`}
      onClick={onClick}
      aria-label="Close"
      data-bs-dismiss={target}
      ref={reference}>
      <LiaWindowCloseSolid
        className="close-icon me-text-primary"
        size={30}
      />
    </button>
  );
}

export default CloseButton;

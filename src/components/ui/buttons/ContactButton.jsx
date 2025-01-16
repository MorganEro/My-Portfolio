import { Link } from 'react-scroll';

function ContactButton({ className }) {
  return (
    <div className={className}>
      <Link
        tabIndex={0}
        to="Contact"
        smooth={true}
        duration={500}
        aria-label="Contact me"
        className="me-btn-contact"
        role="button">
        Contact me
      </Link>
    </div>
  );
}

export default ContactButton;

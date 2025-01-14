import { Link } from 'react-scroll';

function ContactButton({ className }) {
  return (
    <Link
      tabIndex={0}
      to="Contact"
      smooth={true}
      duration={500}
      className={`${className} btn border-0`}
      role="button">
      {' '}
      <div className="me-btn-primary">Contact me</div>
    </Link>
  );
}

export default ContactButton;

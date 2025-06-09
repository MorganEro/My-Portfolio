import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useSection } from '../../../context/SectionContext';
import { SiFrontendmentor } from 'react-icons/si';

function Footer() {
  const { onContact } = useSection();
  const socialMediaIcons = [
    {
      name: 'Frontend Mentor',
      icon: SiFrontendmentor,
      url: 'https://www.frontendmentor.io/profile/MorganEro',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/MorganEro',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/morgan-ero/',
    },
  ];
  return (
    <footer className="footer fixed-bottom">
      <ul className="list-unstyled d-flex flex-column align-items-start justify-content-center gap-4 ms-3">
        {socialMediaIcons.map((link, index) => (
          <li
            className="nav-item"
            key={index}>
            <a
              href={link.url}
              role="button"
              aria-label={link.name}
              className="icon-link"
              target="_blank"
              rel="noreferrer">
              <link.icon
                aria-label="social media icon"
                id="socialMediaIcons"
                className={`${onContact === 'true' ? 'light' : ''} `}
                size={25}
              />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;

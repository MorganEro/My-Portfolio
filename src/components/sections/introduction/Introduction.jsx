import { Link } from 'react-scroll';
import ContactButton from '../../ui/buttons/ContactButton';

function Introduction() {
  return (
    <section
      id="Introduction"
      className="section-introduction d-flex flex-column align-items-center justify-content-center text-center px-4 gap-2 pt-5 px-1 px-md-3 px-lg-5 py-5">
      <div className="container section-introduction__container">
        <h1 className="section-introduction__heading1 display-3 text-light-300">
          Hello! <span className="heading1-span">I'm</span>
        </h1>
        <h1 className="section-introduction__heading2 me-text-primary ">
          <Link
            to="Contact"
            smooth={true}
            duration={500}
            aria-label="Contact me">
            <span className="heading2-span"> I'm</span>
            <span className="first-name px-1">Morgan</span>
            <span className="last-name  px-1">Ero</span>
          </Link>
        </h1>
        <h1
          className="section-introduction__heading3 display-3 text-light-300"
          id="intro-title">
          Welcome to my Portfolio!
        </h1>

        <p
          className="section-introduction__description text-lg text-light-300"
          id="intro-description">
          I'm a Frontend Developer with a passion for creating responsive and
          functional web applications. I am constantly striving to grow my
          skills and stay updated with the latest industry trends.
        </p>
      </div>
    </section>
  );
}

export default Introduction;

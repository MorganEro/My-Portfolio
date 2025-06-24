import ContactButton from '../../ui/buttons/ContactButton';

function Introduction() {
  return (
    <section
      id="Introduction"
      className="section-introduction d-flex flex-column align-items-center justify-content-center text-center px-4 gap-2 pt-5 px-1 px-md-3 px-lg-5 py-5">
      <div className="container section-introduction__container">
        <h1
          className="section-introduction__heading display-1 text-light-100"
          id="intro-title">
          Nice to meet you! I'm{' '}
          <span className="text-dark-300">Morgan&nbsp;Ero</span>
        </h1>
        <p
          className="section-introduction__description text-lg text-light-100"
          id="intro-description">
          I'm a <strong className="text-dark-300">Frontend Developer</strong>{' '}
          with a passion for creating beautiful and functional web applications.
          I love turning complex problems into simple, elegant solutions while
          <em className="text-dark-300">
            {' '}
            continuously striving to grow my skills
          </em>{' '}
          and stay updated with the latest industry trends. Let's build
          something amazing together!
        </p>
        <ContactButton className="animated-container" />
      </div>
    </section>
  );
}

export default Introduction;

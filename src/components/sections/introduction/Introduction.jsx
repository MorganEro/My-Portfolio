import ContactButton from '../../ui/buttons/ContactButton';

function Introduction() {
  return (
    <section
      id="Introduction"
      className="section-introduction d-flex flex-column align-items-center justify-content-center text-center px-4 gap-2 pt-5 px-1 px-md-3 px-lg-5 py-5">
      <div className="container">
        <h1
          className="section-introduction__heading display-1 pb-4 text-dark-700"
          id="intro-title">
          Nice to meet you! I'm{' '}
          <span className="text-dark-300">Morgan&nbsp;Ero</span>
        </h1>
        <p
          className="section-introduction__description text-lg text-dark-700"
          id="intro-description">
          I'm a front-end developer with a passion for creating beautiful and
          functional web applications. I love turning complex problems into
          simple, elegant solutions and continuously strive to improve my skills
          and stay updated with the latest industry trends. Let's build
          something amazing together!
        </p>
        <ContactButton className="animated-container mt-5" />
      </div>
    </section>
  );
}

export default Introduction;

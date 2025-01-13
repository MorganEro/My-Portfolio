function ExperienceCard({ experience }) {
  return (
    <div className="experience-card d-flex flex-column justify-content-center align-items-center">
      <experience.icon
        size={60}
        className="experience__icon me-text-primary "
      />
      <h3 className="experience__title text-uppercase fw-bold mb-0 text-dark-500">
        {experience.title}
      </h3>
      <p className="experience__years text-dark-500">
        <span className="fs-2"> {experience.years}</span> Years of experience
      </p>
    </div>
  );
}

export default ExperienceCard;

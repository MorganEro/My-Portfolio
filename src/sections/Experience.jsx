import experienceData from '../data/experienceData';
import ExperienceCard from '../ui/ExperienceCard';

function Experience() {
  return (
    <section
      id="Experience"
      className="section-experience text-center px-1 px-md-3 px-lg-5">
      <div className="container py-2 py-md-5">
        <h2 className="section-experience__heading display-2 py-4 text-md-start pb-3 pb-md-5">
          Experience
        </h2>
        {/* <p className="section__subtitle">My journey so far</p> */}

        <div className="experience__container row g-2">
          {experienceData.map((experience, index) => (
            <div
              key={experience.title + index}
              className="experience__content col-6 col-md-4 col-lg-3 d-flex justify-content-center">
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

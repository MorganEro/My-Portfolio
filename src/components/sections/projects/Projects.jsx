import projectsData from '../../../data/projectsData';
import ContactButton from '../../ui/buttons/ContactButton';
import ProjectCard from '../../ui/ProjectCard';

function Projects() {
  return (
    <section
      id="Projects"
      className="section-projects px-1 px-md-3 px-lg-5 pb-5">
      <hr className="section-projects__divider pb-4 mt-0 " />
      <div className="container py-2 py-md-5 ">
        <div className="d-flex justify-content-center justify-content-md-start align-items-center pb-3 pb-md-5">
          <h2 className="section-projects__heading display-2 text-dark-500">
            Projects{' '}
          </h2>
          <span className="section-projects__cta d-none d-md-block ms-auto">
            <ContactButton />
          </span>
        </div>
        <div className="projects-container row g-5 justify-content-around">
          {projectsData.map(project => (
            <div
              className="col-12 col-md-6 col-lg-4 "
              key={project.id}>
              <ProjectCard
                title={project.title}
                techList={project.techList}
                viewProjectLink={project.viewProjectLink}
                viewCodeLink={project.viewCodeLink}
                imageUrl={project.imageURL}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

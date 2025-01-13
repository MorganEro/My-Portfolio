import { urlEndpoint } from '../../services/imagekitConfig';

import { IKImage } from 'imagekitio-react';
import { useMediaQuery } from 'react-responsive';
import ProjectButton from './buttons/ProjectButton';

function ProjectCard({
  title,
  techList,
  viewProjectLink,
  viewCodeLink,
  imageUrl,
}) {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <div className="project-card d-flex flex-column gap-2 align-items-center">
      <h3 className="project-card__heading mb-1 fw-bold text-dark-500">
        {title}
      </h3>

      <div
        className="project-card__overlay-container order-md-first mb-2"
        aria-label={`Project: ${title}`}
        tabIndex={isLargeScreen ? 0 : -1}>
        <IKImage
          className="project-card__overlay-img img"
          role="img"
          alt={`Project: ${title}`}
          height={254}
          width={346}
          urlEndpoint={urlEndpoint}
          path={imageUrl}
          lqip={{ active: true, quality: 20 }}
          loading="lazy"
          transformation={[{ height: 254, width: 346, format: 'webp' }]}
          tabIndex={-1}
        />

        <div className="project-card__overlay-btn-container gap-3 ">
          <ProjectButton
            title="View project"
            link={viewProjectLink}
          />
          <ProjectButton
            title="View code"
            link={viewCodeLink}
          />
        </div>
      </div>

      <ul className="project-card__tech-list list-unstyled d-flex gap-2 mb-0 text-xs ">
        {techList.map((tech, index) => (
          <li
            key={index}
            className="project-card__tech-item text-uppercase">
            <small>{tech}</small>
          </li>
        ))}
      </ul>

      <div className="project-card__btn-container">
        <ProjectButton
          title="View project"
          link={viewProjectLink}
        />
        <ProjectButton
          title="View code"
          link={viewCodeLink}
        />
      </div>
    </div>
  );
}

export default ProjectCard;

function ProjectButton({ title, link, tabIndex, ariaLabel }) {
  return (
    <a
      href={link}
      tabIndex={tabIndex}
      target="_blank"
      rel="noreferrer"
      className="project-btn btn border-0 py-0"
      aria-label={ariaLabel}
      role="button">
      {' '}
      <div className="me-project-btn">{title}</div>
    </a>
  );
}

export default ProjectButton;

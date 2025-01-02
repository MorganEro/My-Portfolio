function ProjectButton({ title, link, tabIndex }) {
  return (
    <a
      href={link}
      tabIndex={tabIndex}
      target="_blank"
      rel="noreferrer"
      className="project-btn btn border-0 py-0"
      role="button">
      {' '}
      <div className="me-project-btn">{title}</div>
    </a>
  );
}

export default ProjectButton;

function SingleColor({ color, index }) {
  const { hex, weight } = color;

  return (
    <div
      className={`${
        index > 10 ? 'text-light-100' : ''
      } single-color col-3 col-md-3 col-lg-2 text-xs d-flex flex-column align-items-center justify-content-center p-1`}
      style={{ backgroundColor: `#${hex}` }}>
      <p className="percent">{weight}%</p>
      <p className="hex">#{hex}</p>
    </div>
  );
}

export default SingleColor;

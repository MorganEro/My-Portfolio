import { GiGrowth } from "react-icons/gi";

function RisingArrows() {

  const steps = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const arrows = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: Math.random() * 100 + '%',
    delay: (2 + Math.random() * 3).toFixed(2) + 's',
    duration: (10 + Math.random() * 5).toFixed(2) + 's',
    size: 16 + Math.random() * 10 + 'px',
    colorClass: `var(--color-light-${steps[Math.floor(Math.random() * steps.length)]})`

  }));
  return (
    <div className="rising-arrows">
      {arrows.map(arrow => (
        <GiGrowth
          key={arrow.id}
          className="arrow"
          style={{
            left: arrow.left,
            animationDelay: arrow.delay,
            animationDuration: arrow.duration,
            fontSize: arrow.size,
            color: arrow.colorClass,
          }}
        />
      ))}
    </div>
  );
}

export default RisingArrows;


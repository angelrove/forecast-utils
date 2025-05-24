/**
 * SVG arrow indicating wind direction.
 *
 * @component JSX
 * @param {Object} props - Component props.
 * @param {number} props.deg - Wind direction in degrees (0 = North, 90 = East, etc.).
 * @param {string} [props.size] - Tailwind CSS size class (e.g., 'size-10')
 * @param {number} [props.strokeWidth] - Stroke width of the arrow (range: 1–6).
 * @param {string} [props.className] - Additional CSS classes.
 * @returns {React.ReactElement}
 * @memberof module:Utils
 */
export function WindArrow({
  deg,
  size = "size-5",
  strokeWidth = 1.9,
  className = "",
}) {
  if (deg == null) {
    // console.warn("WindArrow: deg is undefined");
    /* @ts-ignore */
    return <div>deg?</div>;
  }

  // Render arrow ---
  return (
    /* @ts-ignore */
    <svg
      className={`${size} ${className}`}
      style={{ transform: `rotate(${deg}deg)` }}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* @ts-ignore */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
      />
      {/* @ts-ignore */}
    </svg>
  );
}

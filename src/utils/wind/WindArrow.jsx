/**
 * @module utils:WindArrow
 */

/**
 * @typedef {Object} WindArrowProps
 * @property {number} props.deg - Wind direction in degrees
 * @property {string} [props.size] - Size of the arrow (Tailwind CSS size: 'size-10')
 * @property {number} [props.strokeWidth] - Stroke width of the arrow (1 to 6)
 * @property {string} [props.className]
 */

/**
 * Wind direction arrow component (svg image).
 *
 * @component
 * @param {WindArrowProps} props
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

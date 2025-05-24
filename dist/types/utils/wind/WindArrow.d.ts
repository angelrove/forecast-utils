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
export function WindArrow({ deg, size, strokeWidth, className, }: {
    deg: number;
    size?: string | undefined;
    strokeWidth?: number | undefined;
    className?: string | undefined;
}): React.ReactElement;

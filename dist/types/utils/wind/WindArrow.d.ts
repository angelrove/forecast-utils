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
export function WindArrow({ deg, size, strokeWidth, className, }: WindArrowProps): any;
export type WindArrowProps = {
    /**
     * - Wind direction in degrees
     */
    deg: number;
    /**
     * - Size of the arrow (Tailwind CSS size: 'size-10')
     */
    size?: string;
    /**
     * - Stroke width of the arrow (1 to 6)
     */
    strokeWidth?: number;
    className?: string;
};

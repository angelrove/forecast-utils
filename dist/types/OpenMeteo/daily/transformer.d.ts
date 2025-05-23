/**
 * Transforms the OpenMeteo API data into a more usable format.
 *
 * @param {{daily: any}} data - The data object to transform.
 * @returns {Object|null} - The transformed data object or null if the input is invalid.
 */
export default function transformer(data: {
    daily: any;
}): Object | null;

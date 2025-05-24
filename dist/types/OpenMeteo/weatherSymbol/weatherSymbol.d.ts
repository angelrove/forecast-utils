/**
 * Get weather symbol and description based on the weather code.
 *
 * @param {any} code
 * @param {number} [precipitation]
 * @param {boolean} night
 * @param {boolean} dark
 * @returns {{ icon: string, description: string }}
 * { icon: string, description: string }
 * @memberof module:OpenMeteo
 */
export function weatherSymbol(code: any, precipitation?: number, night?: boolean, dark?: boolean): {
    icon: string;
    description: string;
};

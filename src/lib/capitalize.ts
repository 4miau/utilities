/**
 * @description Capitalizes a string so that it will start with a capital letter.
 * @param str String to capitalize
 *
 * @returns The string with a capital letter as the first letter
 */

export function capitalize(str: string): string {
    return str.replace(str[0], str[0].toUpperCase())
}
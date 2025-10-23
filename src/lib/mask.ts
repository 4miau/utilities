/**
 * @description Replaces the first `num` amount of characters with a provided mask to hide the inputted characters
 * @param str The string being operated on
 * @param num The number of characters to not replace with the mask
 * @param mask The character used to replace all the other characters
 *
 * @returns A new masked string
 */

export function mask(str: string, num: number, mask: string = '*'): string {
    return str.slice(num).padStart(str.length, mask)
}
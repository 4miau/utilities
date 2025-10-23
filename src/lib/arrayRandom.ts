import { randomRange } from './randomRange'

/**
 * @description Returns a random array element.
 * @param arr The array
 *
 * @returns An array element
 */

export function arrayRandom<T>(arr: T[]): T {
    return arr[randomRange(0, arr.length)]
}
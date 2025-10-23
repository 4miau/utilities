/**
 * @description Returns a value from an array by randomly selecting an element with probabilities
 * @param arr The array being operated on
 * @param weights An array of probabilities of each array element
 * @example
 * ```
 * randomWeighted(['apple', 'pear', 'orange'], [0.5, 0.3, 0.2])
 * ```
 *
 * @returns A value from the array
 */

export function randomWeighted<T>(arr: T[], weights: number[]): T {
    if (arr.length !== weights.length) throw new RangeError('Weights must be provided for every element')

    const roll = Math.random()
    return arr[
        weights
            .reduce((acc, val, i) => (i === 0 ? [val] : [...acc, acc[i - 1] + val]), [])
            .findIndex((val, i, arr) => roll >= (i === 0 ? 0 : arr[i - 1]) && roll < val)
    ]
}
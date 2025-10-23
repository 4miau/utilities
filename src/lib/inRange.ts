/**
 * @description Returns if the number is in the range of a minimum and max number
 * @param num The number being operated on
 * @param min The minimum number of the two for testing the range
 * @param max The maximum number of the two for testing the range
 *
 * @returns True if the number is in the range of the minimum (inclusive) and maximum (inclusive)
 */

export function inRange(num: number, min: number, max: number) {
    if (min > max) {
        const temp = min
        min = max
        max = temp
    }

    if (num >= min && num <= max) return true
    else return false
}
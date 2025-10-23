/**
 * @description Retrieves a random number between 2 provided numbers
 * @param min The minimum value
 * @param max The maximum value
 *
 * @returns a random number between the min (inclusive) and max (inclusive)
 */

export function randomRange<T>(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * ((max - min) + 1)) + min
}
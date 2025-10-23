/**
 * @description Determines whether an object/array has no values or is empty
 * @param obj The object that will be searched
 *
 * @returns True if the array is empty or has no inputs inside, false otherwise
 */

export function isObjectEmpty<T>(obj: T): boolean {
    return (!obj || !(Object.keys(obj)) || Object.keys(obj).length === 0)
}
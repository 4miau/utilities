/**
 * @description Checks if the given object is a plain object (excludes arrays)
 * @param obj The object that will be searched
 * 
 * @returns True if the input's native type is an object, else false
 */

export function isObject(obj: unknown): boolean {
    return (typeof obj === 'object' && obj !== null && obj !== undefined && !Array.isArray(obj))
}
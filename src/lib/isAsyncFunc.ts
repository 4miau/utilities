/**
 * @description Checks if the given object is an asynchronous function
 * @param obj The object that will be searched
 *
 * @returns True if the object is an asynchronous function
 */

export function isAsyncFunc(obj: unknown): boolean {
    return Object.prototype.toString.call(obj) === '[object AsyncFunction]'
}
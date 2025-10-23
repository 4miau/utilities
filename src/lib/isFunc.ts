import { Constructor } from './types'

/**
 * @description Checks if the given object is a function
 * @param obj The object that will be searched
 * 
 * @returns True if the object is a function, else false
 */

export function isFunc(obj: unknown): boolean {
    return typeof obj === 'function'
}
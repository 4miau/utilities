/**
 * @description Gets the constructor type of a variable/object
 * @param obj The object being operated on
 *
 * @returns The native type of the variable/object
 */

export function getType<T extends {}>(obj: T): string {
    return (obj === undefined ? 'undefined' : obj === null ? 'null' : obj.constructor.name)
}
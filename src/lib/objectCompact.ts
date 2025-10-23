/**
 * @description Mutates an object to remove all falsy values.
 * @param obj The object to mutate
 *
 * @returns Object with all falsy values removed
 */

export function objectCompact<T extends {}>(obj: T): Object {
    const data = Array.isArray(obj) ? obj.filter(Boolean) : obj
    return Object.keys(data).reduce((acc, key) => {
        const value = data[key]
        if (value) acc[key] = typeof value === 'object' ? objectCompact(value) : value
        return acc
    }, Array.isArray(obj) ? [] : {})
}
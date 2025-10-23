/**
 * @description Takes in an object and returns all the methods and properties attached to that object's type
 * @param obj The object being operated on
 *
 * @returns All the properties and methods of the object
 */

export function getMethods<T extends {}>(obj: T) {
    const props = new Set<string>()

    do {
        Object.getOwnPropertyNames(obj).map(i => props.add(i))
    } while (
        obj = Object.getPrototypeOf(obj)
    )

    return [...props.keys()].filter((i, _, a) => typeof a[i] === 'function' && !i.includes('_') && i !== 'constructor')
}
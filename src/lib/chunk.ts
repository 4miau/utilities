/**
 * @description Returns a new array that splits an array into multiple arrays of a fixed size
 * @param arr The original array being split
 * @param size The size before splitting into a new array
 *
 * @returns The split array that has been chunked
 */

export function chunk<T>(arr: T[], size: number): T[] {
    const newArr = []
    for (let i = 0; i < arr.length; i+= size) {
        newArr.push(arr.slice(i, i + size))
    }

    return newArr
}
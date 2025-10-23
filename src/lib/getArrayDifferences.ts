/**
 * @description Omits duplicate entries between both arrays and returns an mutated array with both values A & B for entries with differences
 * @param arr1 The first array being operated on
 * @param arr2 The second array being operated on
 * @example
 * ```
 * getArrayDifferences(['a', 'b', 'c'], ['a', 'b', 'd']) => ['c', 'd']
 * ```
 * @returns The array excluding duplicate entries and containing the differences
 */

export function getArrayDifferences<T>(arr1: T[], arr2: T[]): T[] {
    const combinedDifferences  = []

    arr1.filter((val: T, i: number) => {
        if (!arr2[i]) combinedDifferences.push(val)
        if (arr2[i] && val !== arr2[i]) combinedDifferences.push(val, arr2[i])
    })

    arr2.filter((val: T, i: number) => {
        if (combinedDifferences.includes(val)) return
        else if (!arr1[i]) combinedDifferences.push(val)
        else if (arr1[i] && val !== arr1[i]) combinedDifferences.push(val, arr1[i])
    })


    return combinedDifferences
}
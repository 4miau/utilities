import { arrayEmpty } from './arrayEmpty'

/**
 * @description Cuts an array into pages and returns both data of an inputted page and the max pages it accepts.
 * @param arr The array being operated on
 * @param page The page being queried, if 0 then this refers to all pages
 * @param perPage The amount of data that should be on each page of data
 *
 * @returns An array consisting of 2 elements: The page of data from the original array and the max number of pages.
 */

export function paginate<T>(arr: T[], page: number, limit: number): [T[], number] {
    const max = Math.ceil(arr.length / limit)
    page = !arrayEmpty(arr) ? page || 1 : 1

    const end = page * limit
    const start = end - limit

    return [arr.slice(start, end), max || null]
}
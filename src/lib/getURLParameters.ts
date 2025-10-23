/**
 * @description Returns a string array containing all the query parameters from a URL
 * @param str The string being operated on
 * @example
 * ```
 * getURLParameters('https://site.com/searchparameters/query=test&type=gif') => ['test', 'gif']
 * ```
 * @returns A string array of the parameters
 */

export function getURLParameters<T>(str: string): T[] {
    return (str.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((acc, val) => ((acc[val.slice(0, val.indexOf('='))] = val.slice(val.indexOf('=') + 1)), acc), [])
}
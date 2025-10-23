/**
 * @description Retrieves the time taken to run a function
 * @param fn The callback function to run
 * @param args The arguments necessary to run the original function, if multiple use an array
 *
 * @returns The time taken to run the callback function.
 */

export function timeTaken<T>(fn: (...args: any[]) => T, ...args: any[]) {
    const start = performance.now()
    fn(...args)
    return performance.now() - start
}
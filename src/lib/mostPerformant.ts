/**
 * @description Will iterate through multiple functions and return an index of the highest performing function
 * @param fns The functions to iterate through
 * @param iters The number of iterations that will be ran on the functions
 *
 * @returns The index of the quickest performing function over a certain amount of iterations
 */

export async function mostPerformant<T extends (...args: any[]) => any>(fns: T[], iters: number): Promise<number> {
    const timings: number[] = []

    for (const fn of fns) {
        const start = performance.now()
        for (let i = 0; i < iters; i++) {
            try {
                const res = fn()
                if (res && typeof (res as Promise<any>).then === 'function') {
                    await res
                }
            } catch {
            }
        }
        timings.push(performance.now() - start)
    }

    const min = Math.min(...timings)
    return timings.indexOf(min)
}
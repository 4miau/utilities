/**
 * @description Retries a synchronous function a specified number of times before throwing the last error encountered.
 * @param fn The function to retry.
 * @param retries The number of times to retry the function.
 *
 * @returns The result of the function if successful, or throws the last error encountered.
 */

export function retrySync<T>(fn: () => T, retries: number) {
        if (retries < 0) throw new RangeError('Reries must be at least 1')
    if (retries === 0) return fn()

    let lastError: any
    for (let i = 0; i < retries; ++i) {
        try { return fn() }
        catch (error) { lastError = error }
    }

    throw lastError
}
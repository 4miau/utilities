export type ThrottleFn<T extends (...args: any[]) => any> = T & { flush: () => void }

/**
 * @description Creates a throttled function that only invokes `func` at most once
 * every `wait` milliseconds. The throttled function comes with a `flush` method to
 * reset the last time the throttled function was invoked.
 *
 * @param func The function to throttle.
 * @param wait The number of milliseconds to throttle invocations to.
 *
 * @returns Returns the new throttled function.
 */

export function throttle<T extends (...args: any[]) => any>(fn: T, wait: number): ThrottleFn<T> {
    let prev = 0
    let prevValue: ReturnType<T>

    return Object.assign(
        (...args: Parameters<T>) => {
            const now = Date.now()
            if (now - prev > wait) {
                prev = now
                return (prevValue = fn(...args))
            }

            return prevValue
        },
        {
            flush() { prev = 0 }
        }
    ) as ThrottleFn<T>
}
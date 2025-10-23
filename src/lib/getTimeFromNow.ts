/**
 * @description Will retrieve a date representing the time at a point from now
 * @param time An amount of time to get before now
 * @example
 * ```
 * const fiveMinsAgo = ms('5m')
 * getTimeFromNow(fiveMinsAgo)
 * ```
 *
 * @returns The date prior by the specific amount of time from now
 */

export function getTimeFromNow(time: number): Date {
    return new Date(Date.now() - time)
}
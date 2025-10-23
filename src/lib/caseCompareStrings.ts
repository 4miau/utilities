/**
 * @description Checks if all of the argument string(s) are the same despite the case it is in
 * @param str The first string to compare on
 * @param str2 The second string to compare with
 * @example
 * ```
 * caseCompare('hello', 'Hello', 'HELLO') => true
 * caseCompare('hi', 'HI', 'hello', 'henlo') => false
 * casecompare('hi', ['hI', 'heyo']) => false
 * caseCompare('hi', 'hip', 'hello', 'huh') => false
 * ```
 * @returns True if any of the the argument(s) are the same in any case
 */

export function caseCompareStrings(...str: string[]): boolean {
    return str.every(s => s.toLowerCase() === str[0].toLowerCase() || s === str[0])
}
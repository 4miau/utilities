/**
 * @description Checks if an argument string is the same despite the case it is in
 * @param str The first string being compared on
 * @param str2 The second string to be compared with
 * @example
 * ```
 * caseCompare('hi', 'HI') => true
 * casecompare('hi', 'hI') => true
 * caseCompare('hi', 'hip') => false
 * ```
 * @returns True if the str is the same in any case
 */

export function caseCompareString(str: string, str2: string): boolean {
    return str2.toLowerCase() === str.toLowerCase() || str.toLowerCase() === str2.toLowerCase() || str === str2
}
/**
 * @description Checks whether a provided number is a prime number or not
 * @param num The number being checked against
 * 
 * @returns True if the value is a prime number
 */

export function isPrime(num: number): boolean {
    const boundary = Math.floor(Math.sqrt(num))
    for (let i = 2; i <= boundary; i++) if (num % i === 0) return false
    return num >= 2
}
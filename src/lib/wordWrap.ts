
/**
 * @description Produces a new string where there is a new line escape character after every `max` characters
 * @param str The string to word wrap
 * @param max The max number of characters before a new line is added
 * @param breakln The break used after every max chars
 *
 * @returns A string with a new break after every fixed characters
 */

export function wordWrap(str: string, max: number, breakln: string = '\n') {
    if (!str || max <= 0) return str

    const paragraphs = str.split(/\r?\n/)
    const wrapped = paragraphs.map(paragraph => {
        let remaining = paragraph
        const parts: string[] = []

        while (remaining.length > max) {
            // Try to break at the last space within the first `max` characters
            const breakAt = remaining.lastIndexOf(' ', max)
            if (breakAt > -1) {
                parts.push(remaining.slice(0, breakAt))
                // Remove the piece plus the space
                remaining = remaining.slice(breakAt + 1)
            } else {
                // No space found — force break at max
                parts.push(remaining.slice(0, max))
                remaining = remaining.slice(max)
            }
        }

        if (remaining.length > 0) parts.push(remaining)
        return parts.join(breakln)
    })

    return wrapped.join(breakln)
}
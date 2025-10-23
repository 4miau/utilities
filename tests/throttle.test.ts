import { throttle } from '../src/lib/throttle'

const throttled = throttle(() => { console.log('throttled') }, 5000)

throttled() // will log 'throttled'

throttled() // will NOT log anything

throttled() // will NOT log anything

setTimeout(() => { throttled() }, 5000)

throttled.flush() // will reset the throttle timer immediately

throttled() // will log 'throttled'
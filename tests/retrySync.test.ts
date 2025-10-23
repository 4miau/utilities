import { retrySync } from '../src/lib/retrySync'

console.log(retrySync(() => {
    if (Math.random() < 0.7) {
        throw new Error('Failed attempt')
    }
    return 'Success'
}, 5)) // Example output: 'Success' or throws an error after 5 failed attempts
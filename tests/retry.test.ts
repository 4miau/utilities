import { retry } from '../src/lib/retry'

retry(async () => {
  if (Math.random() < 0.7) {
    throw new Error('Failed attempt')
  }
  return 'Success'
}, 5).then(res => console.log(res)) // Example output: 'Success' or throws an error after 5 failed attempts
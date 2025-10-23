import { mostPerformant } from '../src/lib/mostPerformant'

console.log(
    mostPerformant([
        function test() {
            for (let i = 0; i < 10; i++) {
                console.log('HELLO!!!!')
            }
        },
        function test2() {
            console.log('HELLO!')
        }
    ], 2) // 1 / Promise { 1 }
)
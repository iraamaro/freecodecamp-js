const comment = require('../src/1.basic.1.js')
let response = comment()
describe('check comment with 5 maximum letters', () => {
    test('check key commentA', () => {
        expect(response.commentA.length).toBe(5)
    })
    test('check key commentB', () => {
        expect(response.commentB.length).toBe(5)
    })
})

const variable = require('../src/1.basic.2.js')
describe('check if var myName has key the myName', () => {
    test('myName has the key myName', () => {
        expect(variable().hasOwnProperty('myName')).toBe(true)
    })

    test('myName == null', () => {
        expect(variable()['myName']).toBeNull()
    })
})
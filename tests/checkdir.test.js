const CheckDir = require('../aux/checkdir')

test('Returns false if the given directory does not exist', () => {
  expect(CheckDir('./posts/teste')).toBe(false)
})

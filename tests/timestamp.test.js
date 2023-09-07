const TimeStamp = require('../aux/timestamps')

const fixedTime = new Date('2023-09-07T10:20:00')
jest.useFakeTimers({ now: fixedTime })

test('TimeStamp.createDate', () => {
  expect(TimeStamp.createDate()).toBe('2023-09-07')
})

test('TimeStamp.createTime', () => {
  expect(TimeStamp.createTime()).toBe('10-20')
})

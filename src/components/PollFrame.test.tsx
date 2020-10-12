import { formatAskedTime } from './PollFrame'

describe('format poll asked time', () => {
  it('would display "x days" when it is asked more than 2 days before', () => {
    expect(formatAskedTime(1598949030000, 1599132630000)).toEqual('2 days')
  })

  it('would display "1 day" when it is asked more than 1 day before but less than 2 days', () => {
    expect(formatAskedTime(1599035430000, 1599132630000)).toEqual('1 day')
  })

  it('would display "23 hours" when it is asked 23h59m59s before', () => {
    expect(formatAskedTime(1599046231000, 1599132630000)).toEqual('23 hours')
  })

  it('would display "x hours" when it is asked more than 2 hours before', () => {
    expect(formatAskedTime(1599118200000, 1599132630000)).toEqual('4 hours')
  })

  it('would display "1 hour" when it is asked more than 1 hour before but less than 2 hours', () => {
    expect(formatAskedTime(1599129029000, 1599132630000)).toEqual('1 hour')
  })

  it('would display "59 minutes" when it is asked 59m59s before', () => {
    expect(formatAskedTime(1599129031000, 1599132630000)).toEqual('59 minutes')
  })

  it('would display "x mintues" when it is asked more than 2 minutes before', () => {
    expect(formatAskedTime(1599132315000, 1599132630000)).toEqual('5 minutes')
  })

  it('would display "1 mintue" when it is asked more than 1 minute before but less than 2 minutes', () => {
    expect(formatAskedTime(1599132555000, 1599132630000)).toEqual('1 minute')
  })

  it('would display "1 mintue" when it is asked less than 1 minute before', () => {
    expect(formatAskedTime(1599132615000, 1599132630000)).toEqual('1 minute')
  })
})
import React from 'react'
import { RouteComponentProps, Router, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { formatAskedTime } from './PollFrame'
import ConnectedPoll, { mapStateToProps } from './Poll'
import RootState from '../types/RootState'
import { render } from '../utils/test-utils'

describe('component ConnectedPoll', () => {
  test('map state to props', () => {
    const initState: RootState = {
      userAuth: {
        isAuthenticated: true,
        id: 'rick',
        token: 'hsizwofk0xd97lm1vdipb9'
      },
      users: {
        isLoading: false,
        timestamp: 1599132615000,
        data: {
          daniel: {
            id: 'daniel',
            name: 'Daniel Andrew',
            avatarURL: '/assets/avatar1.png',
            answers: {
              "ujnbb303o0bp70d271hdro": 'optionOne',
              "vuyiukktowkysm1wqyhw5": 'optionTwo',
              "g0rl4v8nd9samb69ats69": 'optionTwo',
              "jcv7i4toq35y7oy5svyc3": 'optionOne',
              "s15kpcslmnjd672bfktpn5": 'optionOne'
            },
            questions: ['c4rlabls6hki97folgyb1i', 'g0rl4v8nd9samb69ats69']
          }
        }
      },
      questions: {
        isLoading: false,
        timestamp: 1599132615000,
        data: {
          "3g9hevwba0z591sworoyob": {
            id: '3g9hevwba0z591sworoyob',
            author: 'daniel',
            timestamp: 1598347824000,
            optionOne: {
              votes: ['rick', 'mark'],
              text: 'have dinner at home',
            },
            optionTwo: {
              votes: ['paul', 'daniel'],
              text: 'have dinner at restaurant'
            }
          }
        }
      }
    }
    interface QueryString {
      qid: string
    }
    const ownProps: RouteComponentProps<QueryString> = { 
      match: { 
        params: { qid: '3g9hevwba0z591sworoyob' },
        isExact: true,
        path: 'string',
        url: 'string'
      },
      history: createMemoryHistory(),
      location: {
        pathname: 'Pathname',
        search: 'Search',
        state: {},
        hash: 'Hash'
      }
    }
    const expectedProps = {
      isAnswered: true,
      authedUser: 'rick',
      question: initState.questions.data['3g9hevwba0z591sworoyob'],
      qid: '3g9hevwba0z591sworoyob',
      displayedAuthor: 'Daniel Andrew',
      avatarURL: '/assets/avatar1.png',
      askedTime: formatAskedTime(initState.questions.data['3g9hevwba0z591sworoyob'].timestamp)
    }
    expect(mapStateToProps(initState, ownProps)).toEqual(expectedProps)
  })

  it('should get the query params', () => {
    const initialState: RootState = {
      userAuth: {
        isAuthenticated: true,
        id: 'daniel',
        token: 'hsizwofk0xd97lm1vdipb9'
      },
      users: {
        isLoading: false,
        timestamp: 1599132615000,
        data: {
          daniel: {
            id: 'daniel',
            name: 'Daniel Andrew',
            avatarURL: '/assets/avatar1.png',
            answers: {
              "ujnbb303o0bp70d271hdro": 'optionOne',
              "3g9hevwba0z591sworoyob": 'optionTwo',
              "g0rl4v8nd9samb69ats69": 'optionTwo',
              "jcv7i4toq35y7oy5svyc3": 'optionOne',
              "s15kpcslmnjd672bfktpn5": 'optionOne'
            },
            questions: ['c4rlabls6hki97folgyb1i', 'g0rl4v8nd9samb69ats69']
          }
        }
      },
      questions: {
        isLoading: false,
        timestamp: 1599132615000,
        data: {
          "3g9hevwba0z591sworoyob": {
            id: '3g9hevwba0z591sworoyob',
            author: 'daniel',
            timestamp: 1598347824000,
            optionOne: {
              votes: ['rick', 'mark'],
              text: 'have dinner at home',
            },
            optionTwo: {
              votes: ['paul', 'daniel'],
              text: 'have dinner at restaurant'
            }
          }
        }
      }
    }
    const history = createMemoryHistory()
    const route = '/poll/3g9hevwba0z591sworoyob'
    history.push(route)
    render(
      <Router history={history}>
        {/* <ConnectedPoll /> */}
        <Route path="/poll/:qid" exact><ConnectedPoll /></Route>
      </Router>, 
      { initialState }
    )

  })
})
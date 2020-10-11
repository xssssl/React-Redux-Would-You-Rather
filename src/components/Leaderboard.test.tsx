// import React from 'react'
import '@testing-library/jest-dom/extend-expect'
// import { render, screen } from '@testing-library/react'
import { 
  sortUserByScores, 
  formatRanking, 
  mapStateToProps, 
  MapStateToPropsType 
} from './Leaderboard'
import { Medal } from './Ranking'
import RootState from '../types/RootState'

describe('sort users by total scores in descending order', () => {
  test('when there is only one user', () => {
    const users = {
      daniel: {
        id: 'daniel',
        name: 'Daniel Andrew',
        avatarURL: 'http://sample.avatar/1.jpg',
        answers: {
          "ujnbb303o0bp70d271hdro": 'optionOne',
          "vuyiukktowkysm1wqyhw5": 'optionTwo',
          "c4rlabls6hki97folgyb1i": 'optionTwo',
          "jcv7i4toq35y7oy5svyc3": 'optionOne'
        },
        questions: ['c4rlabls6hki97folgyb1i', 'zkwy82vcj0davbfiqcs9xp']
      }
    }
    const sortedUserList = [
      {
        id: 'daniel',
        name: 'Daniel Andrew',
        avatarURL: 'http://sample.avatar/1.jpg',
        answers: {
          "ujnbb303o0bp70d271hdro": 'optionOne',
          "vuyiukktowkysm1wqyhw5": 'optionTwo',
          "c4rlabls6hki97folgyb1i": 'optionTwo',
          "jcv7i4toq35y7oy5svyc3": 'optionOne'
        },
        questions: ['c4rlabls6hki97folgyb1i', 'zkwy82vcj0davbfiqcs9xp']
      }
    ]
    expect(sortUserByScores(users)).toEqual(sortedUserList)
  })

  test('when there are two users', () => {
    const users = {
      rick: {
        id: 'rick',
        name: 'Rick Novak',
        avatarURL: 'http://sample.avatar/2.jpg',
        answers: {
          "xgdmjpi5apdm48pqkgjphh": 'optionOne',
          "td74276e5yjztyjvgvwhl": 'optionTwo',
        },
        questions: ['xgdmjpi5apdm48pqkgjphh', 'ujnbb303o0bp70d271hdro']
      },
      daniel: {
        id: 'daniel',
        name: 'Daniel Andrew',
        avatarURL: 'http://sample.avatar/1.jpg',
        answers: {
          "ujnbb303o0bp70d271hdro": 'optionOne',
          "vuyiukktowkysm1wqyhw5": 'optionTwo',
          "c4rlabls6hki97folgyb1i": 'optionTwo',
          "jcv7i4toq35y7oy5svyc3": 'optionOne'
        },
        questions: ['c4rlabls6hki97folgyb1i', 'zkwy82vcj0davbfiqcs9xp']
      }
    }
    const sortedUserList = [
      {
        id: 'daniel',
        name: 'Daniel Andrew',
        avatarURL: 'http://sample.avatar/1.jpg',
        answers: {
          "ujnbb303o0bp70d271hdro": 'optionOne',
          "vuyiukktowkysm1wqyhw5": 'optionTwo',
          "c4rlabls6hki97folgyb1i": 'optionTwo',
          "jcv7i4toq35y7oy5svyc3": 'optionOne'
        },
        questions: ['c4rlabls6hki97folgyb1i', 'zkwy82vcj0davbfiqcs9xp']
      },
      {
        id: 'rick',
        name: 'Rick Novak',
        avatarURL: 'http://sample.avatar/2.jpg',
        answers: {
          "xgdmjpi5apdm48pqkgjphh": 'optionOne',
          "td74276e5yjztyjvgvwhl": 'optionTwo',
        },
        questions: ['xgdmjpi5apdm48pqkgjphh', 'ujnbb303o0bp70d271hdro']
      }
    ]
    expect(sortUserByScores(users)).toEqual(sortedUserList)
  })

  test('when there are three users', () => {
    const users = {
      daniel: {
        id: 'daniel',
        name: 'Daniel Andrew',
        avatarURL: '/assets/avatar1.png',
        answers: {
          "ujnbb303o0bp70d271hdro": 'optionOne',
          "vuyiukktowkysm1wqyhw5": 'optionTwo',
          "g0rl4v8nd9samb69ats69": 'optionTwo',
          "s15kpcslmnjd672bfktpn5": 'optionOne'
        },
        questions: ['c4rlabls6hki97folgyb1i', 'g0rl4v8nd9samb69ats69']
      },
      rick: {
        id: 'rick',
        name: 'Rick Novak',
        avatarURL: '/assets/avatar2.png',
        answers: {
          "3g9hevwba0z591sworoyob": 'optionOne'
        },
        questions: ['3g9hevwba0z591sworoyob', 'ujnbb303o0bp70d271hdro', 's15kpcslmnjd672bfktpn5']
      },
      paul: {
        id: 'paul',
        name: 'Paul Geogre',
        avatarURL: '/assets/avatar5.png',
        answers: {
          "vthrdm985a262al8qx3do": 'optionOne',
          "xj352vofupe1dqz9emx13r": 'optionTwo',
          "3g9hevwba0z591sworoyob": 'optionTwo',
          "9d5lbnxjivtsr8cdqx7ip": 'optionOne',
          "s15kpcslmnjd672bfktpn5": 'optionOne'
        },
        questions: ['vthrdm985a262al8qx3do', '9d5lbnxjivtsr8cdqx7ip'],
      },
    }
    const sortedUserList = [
      {
        id: 'paul',
        name: 'Paul Geogre',
        avatarURL: '/assets/avatar5.png',
        answers: {
          "vthrdm985a262al8qx3do": 'optionOne',
          "xj352vofupe1dqz9emx13r": 'optionTwo',
          "3g9hevwba0z591sworoyob": 'optionTwo',
          "9d5lbnxjivtsr8cdqx7ip": 'optionOne',
          "s15kpcslmnjd672bfktpn5": 'optionOne'
        },
        questions: ['vthrdm985a262al8qx3do', '9d5lbnxjivtsr8cdqx7ip'],
      },
      {
        id: 'daniel',
        name: 'Daniel Andrew',
        avatarURL: '/assets/avatar1.png',
        answers: {
          "ujnbb303o0bp70d271hdro": 'optionOne',
          "vuyiukktowkysm1wqyhw5": 'optionTwo',
          "g0rl4v8nd9samb69ats69": 'optionTwo',
          "s15kpcslmnjd672bfktpn5": 'optionOne'
        },
        questions: ['c4rlabls6hki97folgyb1i', 'g0rl4v8nd9samb69ats69']
      },
      {
        id: 'rick',
        name: 'Rick Novak',
        avatarURL: '/assets/avatar2.png',
        answers: {
          "3g9hevwba0z591sworoyob": 'optionOne'
        },
        questions: ['3g9hevwba0z591sworoyob', 'ujnbb303o0bp70d271hdro', 's15kpcslmnjd672bfktpn5']
      }
    ]
    expect(sortUserByScores(users)).toEqual(sortedUserList)
  })
})

describe('format data for component Ranking', () => {
  test('when it is the authedUser', () => {
    const user = {
        id: 'daniel',
        name: 'Daniel Andrew',
        avatarURL: 'http://sample.avatar/1.jpg',
        answers: {
          "ujnbb303o0bp70d271hdro": 'optionOne',
          "vuyiukktowkysm1wqyhw5": 'optionTwo',
          "c4rlabls6hki97folgyb1i": 'optionTwo',
          "jcv7i4toq35y7oy5svyc3": 'optionOne'
        },
        questions: ['c4rlabls6hki97folgyb1i', 'zkwy82vcj0davbfiqcs9xp']
    }
    const authedUser = 'daniel'
    const index = 0
    const formatedRanking = {
      displayedAuthor: 'You',
      avatarURL: 'http://sample.avatar/1.jpg',
      ranking: Medal[0],
      answeredQuestions: 4,
      createdQuestions: 2
    }
    expect(formatRanking(user, authedUser, index)).toEqual(formatedRanking)
  })

  test('when it is not the authedUser', () => {
    const user = {
        id: 'paul',
        name: 'Paul Gorge',
        avatarURL: 'http://sample.avatar/1.jpg',
        answers: {
          "ujnbb303o0bp70d271hdro": 'optionOne',
          "vuyiukktowkysm1wqyhw5": 'optionTwo',
          "c4rlabls6hki97folgyb1i": 'optionTwo',
          "jcv7i4toq35y7oy5svyc3": 'optionOne'
        },
        questions: ['ujnbb303o0bp70d271hdro', 'c4rlabls6hki97folgyb1i', 'zkwy82vcj0davbfiqcs9xp']
    }
    const authedUser = 'daniel'
    const index = 2
    const formatedRanking = {
      displayedAuthor: 'Paul Gorge',
      avatarURL: 'http://sample.avatar/1.jpg',
      ranking: Medal[2],
      answeredQuestions: 4,
      createdQuestions: 3
    }
    expect(formatRanking(user, authedUser, index)).toEqual(formatedRanking)
  })
})

describe('map state to props', () => {
  it('should return the top three users in descending order', () => {
    const initState: RootState = {
      userAuth: {
        id: 'rick',
        isAuthenticated: true,
        token: 'fopq2c1sox5bi3pukuc3ar'
      },
      users: {
        isLoading: false,
        timestamp: 1591415301000,
        data: {
          daniel: {
            id: 'daniel',
            name: 'Daniel Andrew',
            avatarURL: '/assets/avatar1.png',
            answers: {
              "ujnbb303o0bp70d271hdro": 'optionOne',
              "vuyiukktowkysm1wqyhw5": 'optionTwo',
              "g0rl4v8nd9samb69ats69": 'optionTwo',
              "s15kpcslmnjd672bfktpn5": 'optionOne'
            },
            questions: ['c4rlabls6hki97folgyb1i', 'g0rl4v8nd9samb69ats69']
          },
          rick: {
            id: 'rick',
            name: 'Rick Novak',
            avatarURL: '/assets/avatar2.png',
            answers: {
              "3g9hevwba0z591sworoyob": 'optionOne'
            },
            questions: ['3g9hevwba0z591sworoyob', 'ujnbb303o0bp70d271hdro', 's15kpcslmnjd672bfktpn5']
          },
          paul: {
            id: 'paul',
            name: 'Paul Geogre',
            avatarURL: '/assets/avatar5.png',
            answers: {
              "vthrdm985a262al8qx3do": 'optionOne',
              "xj352vofupe1dqz9emx13r": 'optionTwo',
              "3g9hevwba0z591sworoyob": 'optionTwo',
              "9d5lbnxjivtsr8cdqx7ip": 'optionOne',
              "s15kpcslmnjd672bfktpn5": 'optionOne'
            },
            questions: ['vthrdm985a262al8qx3do', '9d5lbnxjivtsr8cdqx7ip'],
          },
          michale: {
            id: 'michale',
            name: 'michale Jackson',
            avatarURL: '/assets/avatar2.png',
            answers: {
              "9d5lbnxjivtsr8cdqx7ip": 'optionTwo',
              "s15kpcslmnjd672bfktpn5": 'optionOne'
            },
            questions: ['vthrdm985a262al8qx3do'],
          }
        }
      },
      questions: {
        isLoading: false,
        timestamp: 1591415301000,
        data: {}
      }
    }
    const formatedRankingList: MapStateToPropsType = {
      ranking: [
        {
          displayedAuthor: 'Paul Geogre',
          avatarURL: '/assets/avatar5.png',
          ranking: Medal[0],
          answeredQuestions: 5,
          createdQuestions: 2
        },
        {
          displayedAuthor: 'Daniel Andrew',
          avatarURL: '/assets/avatar1.png',
          ranking: Medal[1],
          answeredQuestions: 4,
          createdQuestions: 2
        },
        {
          displayedAuthor: 'You',
          avatarURL: '/assets/avatar2.png',
          ranking: Medal[2],
          answeredQuestions: 1,
          createdQuestions: 3
        }
      ]
    }
    expect(mapStateToProps(initState)).toEqual(formatedRankingList)
  })
})
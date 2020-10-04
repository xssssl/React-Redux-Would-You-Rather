import React from 'react'
import ConnectedPollList ,{ 
  formatAskedTime, 
  formatPollProps, 
  sortByTimestampDesc,
  mapStateToProps
} from './PollList'
import { Question, Users } from '../services/types'
import RootState from '../types/RootState'
import { mapStateToPropsType } from './PollList'
import { render, screen } from '../utils/test-utils'

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

describe('sort questions list by timestamp, latest first', () => {
  test('questions list with 3 element and latter two need to be swaped', () => {
    const unsortedQuestionList: Array<Question> = [
      {
        id: '3g9hevwba0z591sworoyob',
        author: 'rick',
        timestamp: 1598347824000,
        optionOne: {
          votes: ['rick', 'mark'],
          text: 'have dinner at home',
        },
        optionTwo: {
          votes: ['Paul'],
          text: 'have dinner at restaurant'
        }
      },
      {
        id: 'g0rl4v8nd9samb69ats69',
        author: 'daniel',
        timestamp: 1598346784000,
        optionOne: {
          votes: [],
          text: 'become a superhero',
        },
        optionTwo: {
          votes: ['daniel', 'johndoe', 'mark'],
          text: 'become a supervillain'
        }
      },
      {
        id: '9d5lbnxjivtsr8cdqx7ip',
        author: 'paul',
        timestamp: 1598346947000,
        optionOne: {
          votes: ['paul'],
          text: 'see a firework display',
        },
        optionTwo: {
          votes: ['johndoe', 'mark'],
          text: 'see a circus performance'
        }
      }
    ]
    const sortedQuestionList: Array<Question> = [
      {
        id: '3g9hevwba0z591sworoyob',
        author: 'rick',
        timestamp: 1598347824000,
        optionOne: {
          votes: ['rick', 'mark'],
          text: 'have dinner at home',
        },
        optionTwo: {
          votes: ['Paul'],
          text: 'have dinner at restaurant'
        }
      },
      {
        id: '9d5lbnxjivtsr8cdqx7ip',
        author: 'paul',
        timestamp: 1598346947000,
        optionOne: {
          votes: ['paul'],
          text: 'see a firework display',
        },
        optionTwo: {
          votes: ['johndoe', 'mark'],
          text: 'see a circus performance'
        }
      },
      {
        id: 'g0rl4v8nd9samb69ats69',
        author: 'daniel',
        timestamp: 1598346784000,
        optionOne: {
          votes: [],
          text: 'become a superhero',
        },
        optionTwo: {
          votes: ['daniel', 'johndoe', 'mark'],
          text: 'become a supervillain'
        }
      }
    ]
    expect(sortByTimestampDesc(unsortedQuestionList)).toEqual(sortedQuestionList)
  })

  test('questions list with 3 element in ascending timestamp order', () => {
    const unsortedQuestionList: Array<Question> = [
      {
        id: '9d5lbnxjivtsr8cdqx7ip',
        author: 'paul',
        timestamp: 1598346947000,
        optionOne: {
          votes: ['paul'],
          text: 'see a firework display',
        },
        optionTwo: {
          votes: ['johndoe', 'mark'],
          text: 'see a circus performance'
        }
      },
      {
        id: 'g0rl4v8nd9samb69ats69',
        author: 'daniel',
        timestamp: 1598346784000,
        optionOne: {
          votes: [],
          text: 'become a superhero',
        },
        optionTwo: {
          votes: ['daniel', 'johndoe', 'mark'],
          text: 'become a supervillain'
        }
      },
      {
        id: '3g9hevwba0z591sworoyob',
        author: 'rick',
        timestamp: 1598347824000,
        optionOne: {
          votes: ['rick', 'mark'],
          text: 'have dinner at home',
        },
        optionTwo: {
          votes: ['Paul'],
          text: 'have dinner at restaurant'
        }
      },
    ]
    const sortedQuestionList: Array<Question> = [
      {
        id: '3g9hevwba0z591sworoyob',
        author: 'rick',
        timestamp: 1598347824000,
        optionOne: {
          votes: ['rick', 'mark'],
          text: 'have dinner at home',
        },
        optionTwo: {
          votes: ['Paul'],
          text: 'have dinner at restaurant'
        }
      },
      {
        id: '9d5lbnxjivtsr8cdqx7ip',
        author: 'paul',
        timestamp: 1598346947000,
        optionOne: {
          votes: ['paul'],
          text: 'see a firework display',
        },
        optionTwo: {
          votes: ['johndoe', 'mark'],
          text: 'see a circus performance'
        }
      },
      {
        id: 'g0rl4v8nd9samb69ats69',
        author: 'daniel',
        timestamp: 1598346784000,
        optionOne: {
          votes: [],
          text: 'become a superhero',
        },
        optionTwo: {
          votes: ['daniel', 'johndoe', 'mark'],
          text: 'become a supervillain'
        }
      }
    ]
    expect(sortByTimestampDesc(unsortedQuestionList)).toEqual(sortedQuestionList)
  })
})

describe('format component Poll props', () => {
  it('should format a question to Poll props with displayedAuthor "You"', () => {
    const question: Question = {
      id: '3g9hevwba0z591sworoyob',
      author: 'rick',
      timestamp: 1598347824000,
      optionOne: {
        votes: ['rick', 'mark'],
        text: 'have dinner at home',
      },
      optionTwo: {
        votes: ['Paul'],
        text: 'have dinner at restaurant'
      }
    }
    const users: Users = {
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
      },
      rick: {
        id: 'rick',
        name: 'Rick Novak',
        avatarURL: 'http://sample.avatar/2.jpg',
        answers: {
          "xgdmjpi5apdm48pqkgjphh": 'optionOne',
          "td74276e5yjztyjvgvwhl": 'optionTwo',
        },
        questions: ['xgdmjpi5apdm48pqkgjphh', 'ujnbb303o0bp70d271hdro']
      }
    }
    const authorizedUserId = 'rick'
    const formatedPollProps = {
      displayedAuthor: 'You',
      avatarURL: 'http://sample.avatar/2.jpg',
      askedTime: formatAskedTime(question.timestamp),
      questionId: '3g9hevwba0z591sworoyob',
      optionOneText: 'have dinner at home',
      optionTwoText: 'have dinner at restaurant'
    }
    expect(formatPollProps(authorizedUserId, question, users)).toEqual(formatedPollProps)
  })

  it('should format a question which is not posted by the authorized user to Poll props', () => {
    const question: Question = {
      id: 'g0rl4v8nd9samb69ats69',
      author: 'daniel',
      timestamp: 1598346784000,
      optionOne: {
        votes: [],
        text: 'become a superhero',
      },
      optionTwo: {
        votes: ['daniel', 'johndoe', 'mark'],
        text: 'become a supervillain'
      }
    }
    const users: Users = {
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
      },
      rick: {
        id: 'rick',
        name: 'Rick Novak',
        avatarURL: 'http://sample.avatar/2.jpg',
        answers: {
          "xgdmjpi5apdm48pqkgjphh": 'optionOne',
          "td74276e5yjztyjvgvwhl": 'optionTwo',
        },
        questions: ['xgdmjpi5apdm48pqkgjphh', 'ujnbb303o0bp70d271hdro']
      }
    }
    const authorizedUserId = 'rick'
    const formatedPollProps = {
      displayedAuthor: 'Daniel Andrew',
      avatarURL: 'http://sample.avatar/1.jpg',
      askedTime: formatAskedTime(question.timestamp),
      questionId: 'g0rl4v8nd9samb69ats69',
      optionOneText: 'become a superhero',
      optionTwoText: 'become a supervillain'
    }
    expect(formatPollProps(authorizedUserId, question, users)).toEqual(formatedPollProps)
  })
})

describe('component ConnectedPollList', () => {
  it('should map state to props and return a list of PollProps', () => {
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
          },
          rick: {
            id: 'rick',
            name: 'Rick Novak',
            avatarURL: '/assets/avatar2.png',
            answers: {
              "xgdmjpi5apdm48pqkgjphh": 'optionOne',
              "td74276e5yjztyjvgvwhl": 'optionTwo',
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
      },
      questions: {
        isLoading: false,
        timestamp: 1599132615000,
        data: {
          "3g9hevwba0z591sworoyob": {
            id: '3g9hevwba0z591sworoyob',
            author: 'rick',
            timestamp: 1598347824000,
            optionOne: {
              votes: ['rick', 'mark'],
              text: 'have dinner at home',
            },
            optionTwo: {
              votes: ['paul'],
              text: 'have dinner at restaurant'
            }
          },
          "g0rl4v8nd9samb69ats69": {
            id: 'g0rl4v8nd9samb69ats69',
            author: 'daniel',
            timestamp: 1598346947000,
            optionOne: {
              votes: [],
              text: 'become a superhero',
            },
            optionTwo: {
              votes: ['daniel', 'johndoe', 'mark'],
              text: 'become a supervillain'
            }
          },
          "9d5lbnxjivtsr8cdqx7ip": {
            id: '9d5lbnxjivtsr8cdqx7ip',
            author: 'paul',
            timestamp: 1598356947000,
            optionOne: {
              votes: ['paul'],
              text: 'see a firework display',
            },
            optionTwo: {
              votes: ['johndoe', 'mark'],
              text: 'see a circus performance'
            }
          },
          "s15kpcslmnjd672bfktpn5": {
            id: 's15kpcslmnjd672bfktpn5',
            author: 'rick',
            timestamp: 1598366947000,
            optionOne: {
              votes: ['paul', 'daniel'],
              text: 'fly a kite',
            },
            optionTwo: {
              votes: ['mark'],
              text: 'ride a scooter'
            }
          }
        }
      }
    }
    const isAnswered = false
    const pollPropsList: mapStateToPropsType = {
      polls: [
        { // qid: s15kpcslmnjd672bfktpn5
          displayedAuthor: 'You',
          avatarURL: '/assets/avatar2.png',
          askedTime: formatAskedTime(1598366947000),
          questionId: 's15kpcslmnjd672bfktpn5',
          optionOneText: 'fly a kite',
          optionTwoText: 'ride a scooter'
        },
        { // qid: 9d5lbnxjivtsr8cdqx7ip
          displayedAuthor: 'Paul Geogre',
          avatarURL: '/assets/avatar5.png',
          askedTime: formatAskedTime(1598356947000),
          questionId: '9d5lbnxjivtsr8cdqx7ip',
          optionOneText: 'see a firework display',
          optionTwoText: 'see a circus performance'
        },
        { // qid: g0rl4v8nd9samb69ats69
          displayedAuthor: 'Daniel Andrew',
          avatarURL: '/assets/avatar1.png',
          askedTime: formatAskedTime(1598346947000),
          questionId: 'g0rl4v8nd9samb69ats69',
          optionOneText: 'become a superhero',
          optionTwoText: 'become a supervillain'
        }
      ]
    }
    expect(mapStateToProps(initState, { isAnswered })).toEqual(pollPropsList)
  })

  it('should render the component at unanswered tab with props that are from redux store', () => {
    const initialState: RootState = {
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
          },
          rick: {
            id: 'rick',
            name: 'Rick Novak',
            avatarURL: '/assets/avatar2.png',
            answers: {
              "xgdmjpi5apdm48pqkgjphh": 'optionOne',
              "td74276e5yjztyjvgvwhl": 'optionTwo',
              "3g9hevwba0z591sworoyob": 'optionOne'
            },
            questions: ['3g9hevwba0z591sworoyob', 'ujnbb303o0bp70d271hdro', 's15kpcslmnjd672bfktpn5']
          },
        }
      },
      questions: {
        isLoading: false,
        timestamp: 1599132615000,
        data: {
          "3g9hevwba0z591sworoyob": {
            id: '3g9hevwba0z591sworoyob',
            author: 'rick',
            timestamp: 1598347824000,
            optionOne: {
              votes: ['rick', 'mark'],
              text: 'have dinner at home',
            },
            optionTwo: {
              votes: ['paul'],
              text: 'have dinner at restaurant'
            }
          },
          "g0rl4v8nd9samb69ats69": {
            id: 'g0rl4v8nd9samb69ats69',
            author: 'daniel',
            timestamp: 1598346947000,
            optionOne: {
              votes: [],
              text: 'become a superhero',
            },
            optionTwo: {
              votes: ['daniel', 'johndoe', 'mark'],
              text: 'become a supervillain'
            }
          }
        }
      }
    }
    render(
      <ConnectedPollList isAnswered={false} />,
      { initialState }
    )
    const displayedAuthor = screen.getByTestId('displayed-author')
    const optionOneText = screen.getByText(/become a superhero/i)
    const optionTwoText = screen.getByText(/become a supervillain/i)
    const answerBtn = screen.getByText(/Answer Now/i)
    expect(displayedAuthor).toBeTruthy()
    expect(optionOneText).toBeTruthy()
    expect(optionTwoText).toBeTruthy()
    expect(answerBtn).toBeTruthy()
  })

  it('should render the component at answered tab with props that are from redux store', () => {
    const initialState: RootState = {
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
          },
          rick: {
            id: 'rick',
            name: 'Rick Novak',
            avatarURL: '/assets/avatar2.png',
            answers: {
              "xgdmjpi5apdm48pqkgjphh": 'optionOne',
              "td74276e5yjztyjvgvwhl": 'optionTwo',
              "3g9hevwba0z591sworoyob": 'optionOne'
            },
            questions: ['3g9hevwba0z591sworoyob', 'ujnbb303o0bp70d271hdro', 's15kpcslmnjd672bfktpn5']
          },
        }
      },
      questions: {
        isLoading: false,
        timestamp: 1599132615000,
        data: {
          "3g9hevwba0z591sworoyob": {
            id: '3g9hevwba0z591sworoyob',
            author: 'rick',
            timestamp: 1598347824000,
            optionOne: {
              votes: ['rick', 'mark'],
              text: 'have dinner at home',
            },
            optionTwo: {
              votes: ['paul'],
              text: 'have dinner at restaurant'
            }
          },
          "g0rl4v8nd9samb69ats69": {
            id: 'g0rl4v8nd9samb69ats69',
            author: 'daniel',
            timestamp: 1598346947000,
            optionOne: {
              votes: [],
              text: 'become a superhero',
            },
            optionTwo: {
              votes: ['daniel', 'johndoe', 'mark'],
              text: 'become a supervillain'
            }
          }
        }
      }
    }
    render(
      <ConnectedPollList isAnswered={true} />,
      { initialState }
    )
    const displayedAuthor = screen.getByTestId('displayed-author')
    const optionOneText = screen.getByText(/have dinner at home/i)
    const optionTwoText = screen.getByText(/have dinner at restaurant/i)
    const answerBtn = screen.getByText(/View Details/i)
    expect(displayedAuthor).toBeTruthy()
    expect(optionOneText).toBeTruthy()
    expect(optionTwoText).toBeTruthy()
    expect(answerBtn).toBeTruthy()
  })

})
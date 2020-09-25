import users from './users'
import { 
  addAnswerToUser,
  addQuestionToUser,
  fetchUsersData,
  fetchUsersDataSuccess,
  fetchUsersDataFail
} from '../actions/users'
import { UserState } from '../types/UsersTypes'

describe('users reducer', () => {
  it('should add the given answer', () => {
    expect(users(initState, addAnswerToUser({
      authedUser: 'rick',
      qid: 'y157katmn6myw0hur40qg',
      answer: 'optionOne'
    }))).toEqual(stateAfterAddAnswer)
  })

  it('should add the given question', () => {
    expect(users(initState, addQuestionToUser({
      authedUser: 'rick',
      qid: 'yn9j5qmuwjahfr4al6hda7'
    }))).toEqual(stateAfterAddQuestion)
  })
  
  it('should begin to fetch the users data', () => {
    expect(users(initState, fetchUsersData())).toEqual(stateAfterFetch)
  })

  it('should fetch the users data successful and add data to state', () => {
    expect(users(stateAfterFetch, fetchUsersDataSuccess({
      data: stateAfterFetchSuccess.data,
      timestamp: 1598959830000
    }))).toEqual(stateAfterFetchSuccess)
  })

  it('should fetch the users data failed and reset the isLoading', () => {
    expect(users(stateAfterFetch, fetchUsersDataFail())).toEqual(stateAfterFetchFail)
  })

  it('should return the initial state', () => {
    expect(users(initState, { type: 'UNKNOWN_ACTION' })).toEqual(initState)
  })
})

const initState: UserState = {
  isLoading: false,
  timestamp: 1598956230000,
  data: {
    susan: {
      id: 'susan',
      name: 'Susan Connor',
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
}

const stateAfterAddAnswer: UserState = {
  isLoading: false,
  timestamp: 1598956230000,
  data: {
    susan: {
      id: 'susan',
      name: 'Susan Connor',
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
        "y157katmn6myw0hur40qg": 'optionOne'
      },
      questions: ['xgdmjpi5apdm48pqkgjphh', 'ujnbb303o0bp70d271hdro']
    }
  }
}

const stateAfterAddQuestion: UserState = {
  isLoading: false,
  timestamp: 1598956230000,
  data: {
    susan: {
      id: 'susan',
      name: 'Susan Connor',
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
      questions: ['xgdmjpi5apdm48pqkgjphh', 'ujnbb303o0bp70d271hdro', 'yn9j5qmuwjahfr4al6hda7']
    }
  }
}

const stateAfterFetch: UserState = {
  isLoading: true,
  timestamp: 1598956230000,
  data: {
    susan: {
      id: 'susan',
      name: 'Susan Connor',
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
}

const stateAfterFetchSuccess: UserState = {
  isLoading: false,
  timestamp: 1598959830000,
  data: {
    susan: {
      id: 'susan',
      name: 'Susan Connor',
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
    },
    roger: {
      id: 'roger',
      name: 'Roger Lum',
      avatarURL: 'http://sample.avatar/3.jpg',
      answers: {
        "e6zhibfzy5qg0w4p425e": 'optionOne'
      },
      questions: ['e6zhibfzy5qg0w4p425e']
    }
  }
}

const stateAfterFetchFail: UserState = {
  ...stateAfterFetch,
  isLoading: false
}
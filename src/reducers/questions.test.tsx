import questions from './questions'
import { 
  addVote,
  addQuestion,
  fetchQuestionsData,
  fetchQuestionsDataSuccess,
  fetchQuestionsDataFail
} from '../actions/questions'
import { QuestionState } from '../types/QuestionsTypes'

describe('questions reducer', () => {
  it('should add the given vote', () => {
    expect(questions(initState, addVote({
      authedUser: 'rick',
      qid: 'g0rl4v8nd9samb69ats69',
      answer: 'optionOne'
    }))).toEqual(stateAfterAddVote)
  })

  it('should add the given question', () => {
    expect(questions(initState, addQuestion({
      id: '9d5lbnxjivtsr8cdqx7ip',
      author: 'paul',
      timestamp: 1598346784000,
      optionOne: {
        votes: ['paul'],
        text: 'see a firework display',
      },
      optionTwo: {
        votes: ['johndoe', 'mark'],
        text: 'see a circus performance'
      }
    }))).toEqual(stateAfterAddQuestion)
  })
  
  it('should begin to fetch questions data', () => {
    expect(questions(initState, fetchQuestionsData())).toEqual(stateAfterFetch)
  })

  it('should fetch questions data successful and add data to state', () => {
    expect(questions(stateAfterFetch, fetchQuestionsDataSuccess({
      data: stateAfterFetchSuccess.data,
      timestamp: 1600906462000
    }))).toEqual(stateAfterFetchSuccess)
  })

  it('should fetch questions data failed and reset isLoading', () => {
    expect(questions(stateAfterFetch, fetchQuestionsDataFail())).toEqual(stateAfterFetchFail)
  })

  it('should return the initial state', () => {
    expect(questions(initState, { type: 'UNKNOWN_ACTION' })).toEqual(initState)
  })
})

const initState: QuestionState = {
  isLoading: false,
  timestamp: 1598956230000,
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
        votes: ['Paul'],
        text: 'have dinner at resta'
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

const stateAfterAddVote: QuestionState = {
  isLoading: false,
  timestamp: 1598956230000,
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
        votes: ['Paul'],
        text: 'have dinner at resta'
      }
    },
    "g0rl4v8nd9samb69ats69": {
      id: 'g0rl4v8nd9samb69ats69',
      author: 'daniel',
      timestamp: 1598346947000,
      optionOne: {
        votes: ['rick'],
        text: 'become a superhero',
      },
      optionTwo: {
        votes: ['daniel', 'johndoe', 'mark'],
        text: 'become a supervillain'
      }
    }
  }
}

const stateAfterAddQuestion: QuestionState = {
  isLoading: false,
  timestamp: 1598956230000,
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
        votes: ['Paul'],
        text: 'have dinner at resta'
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
      timestamp: 1598346784000,
      optionOne: {
        votes: ['paul'],
        text: 'see a firework display',
      },
      optionTwo: {
        votes: ['johndoe', 'mark'],
        text: 'see a circus performance'
      }
    },
  }
}

const stateAfterFetch: QuestionState = {
  isLoading: true,
  timestamp: 1598956230000,
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
        votes: ['Paul'],
        text: 'have dinner at resta'
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

const stateAfterFetchSuccess: QuestionState = {
  isLoading: false,
  timestamp: 1600906462000,
  data: {
    "3g9hevwba0z591sworoyob": {
      id: '3g9hevwba0z591sworoyob',
      author: 'rick',
      timestamp: 1598347824000,
      optionOne: {
        votes: ['rick'],
        text: 'have dinner at home',
      },
      optionTwo: {
        votes: ['Paul', 'rick'],
        text: 'have dinner at resta'
      }
    },
    "g0rl4v8nd9samb69ats69": {
      id: 'g0rl4v8nd9samb69ats69',
      author: 'daniel',
      timestamp: 1598346947000,
      optionOne: {
        votes: [],
        text: 'become a dancer',
      },
      optionTwo: {
        votes: ['daniel', 'johndoe', 'mark'],
        text: 'become a singer'
      }
    }
  }
}

const stateAfterFetchFail: QuestionState = {
  ...stateAfterFetch,
  isLoading: false
}
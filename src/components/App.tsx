import React from 'react';
import Nav from './Nav'
import Question from './Question'
import Ranking from './Ranking'
import NewPoll from './NewPoll'
import Poll from './Poll'
import PollList from './PollList'
import PollFrame from './PollFrame'
import PollResult from './PollResult'
import ProgressBar from './ProgressBar'
import OptionResult from './OptionResult'
import Login from './Login'
import Home from './Home'
import Leaderboard from './Leaderboard'
import '../styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      {/* <NewPoll /> */}
      {/* <OptionResult /> */}
      {/* <Login /> */}
      {/* <Poll /> */}
      {/* <PollList /> */}
      {/* <Home /> */}
      {/* <PollResult /> */}
      <Leaderboard />
      {/* <Ranking /> */}
    </div>
  );
}

export default App;

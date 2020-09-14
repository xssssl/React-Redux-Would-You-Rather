import React from 'react';
import { Route, Switch } from 'react-router-dom'
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
import NoMatch from './NoMatch'
import '../styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/newpoll" exact><NewPoll /></Route>
        <Route path="/leaderboard" exact><Leaderboard /></Route>
        <Route path="/login" exact><Login /></Route>
        <Route><NoMatch /></Route>
      </Switch>
      {/* <Login /> */}
      {/* <Nav /> */}
      {/* <Home /> */}
      {/* <Poll /> */}
      {/* <NewPoll /> */}
      {/* <Leaderboard /> */}
      {/* <OptionResult /> */}
      {/* <PollList /> */}
      {/* <PollResult /> */}
      {/* <Ranking /> */}
    </div>
  );
}

export default App;

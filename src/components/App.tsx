import React from 'react';
import { 
  BrowserRouter as Router,
  Route, 
  Switch
 } from 'react-router-dom'
import ConnectedNav from './Nav'
import ConnectedNewPoll from './NewPoll'
import ConnectedLogin from './Login'
import Home from './Home'
import Leaderboard from './Leaderboard'
import NoMatch from './NoMatch'
import ConnectedPrivateRoute from './PrivateRoute'
import ConnectedPoll from './Poll'
import '../styles/App.scss';

interface QueryString {
  qid: string
}

const App: React.FC = (props: any) => {
  return (
    <Router>
      <div className="App">
        <ConnectedPrivateRoute defaultHomePath="/" authPath="/login"> 
          <ConnectedNav />
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/newpoll" exact><ConnectedNewPoll /></Route>
            <Route path="/leaderboard" exact><Leaderboard /></Route>
            <Route path="/poll/:qid" exact><ConnectedPoll /></Route>
            <Route><NoMatch /></Route>
          </Switch>
        </ConnectedPrivateRoute>
        <Switch>
          <Route path="/login" exact><ConnectedLogin /></Route>
          {/* <Route path="/login" exact><NewPoll /></Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App
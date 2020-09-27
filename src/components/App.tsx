import React from 'react';
import { 
  BrowserRouter as Router,
  Route, 
  Switch
 } from 'react-router-dom'
import ConnectedNav from './Nav'
import NewPoll from './NewPoll'
import ConnectedLogin from './Login'
import Home from './Home'
import Leaderboard from './Leaderboard'
import NoMatch from './NoMatch'
import ConnectedPrivateRoute from './PrivateRoute'
import '../styles/App.scss';

const App: React.FC = (props: any) => {
  return (
    <Router>
      <div className="App">
        <ConnectedPrivateRoute defaultHomePath="/" authPath="/login"> 
          <ConnectedNav />
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/newpoll" exact><NewPoll /></Route>
            <Route path="/leaderboard" exact><Leaderboard /></Route>
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
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import NewPoll from './NewPoll'
import ConnectedLogin from './Login'
import Home from './Home'
import Leaderboard from './Leaderboard'
import NoMatch from './NoMatch'
import ConnectedPrivateRoute from './PrivateRoute'
import '../styles/App.scss';

const App: React.FC = (props: any) => {
  return (
    <div className="App">
      <ConnectedPrivateRoute redirectPath="/login"> 
        <Nav />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/newpoll" exact><NewPoll /></Route>
          <Route path="/leaderboard" exact><Leaderboard /></Route>
          <Route><NoMatch /></Route>
        </Switch>
      </ConnectedPrivateRoute>
      <Switch>
        {console.log('You are here')}
        <Route path="/login" exact><ConnectedLogin /></Route>
      </Switch>
    </div>
  );
}

export default App
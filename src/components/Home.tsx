import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ConnectedPollList from './PollList'
import 'react-tabs/style/react-tabs.scss';
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap'

const Home: React.FC = (props: any) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 offset-sm-3 mt-3">
          {/* <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" role="tab" href="#answered-polls">Unanswered</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" role="tab" href="#unanswered-polls">Answered</a>
            </li>
          </ul> */}
          <Tabs>
            <TabList>
              <Tab>Unanswered</Tab>
              <Tab>Answered</Tab>
            </TabList>
            <TabPanel>
              <ConnectedPollList isAnswered={false} />
            </TabPanel>
            <TabPanel>
              <ConnectedPollList isAnswered={true} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Home
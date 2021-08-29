import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Current from './components/Current';
import PriceHistory from './components/PriceHistory';
import HistoryResult from './components/HistoryResult';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Current />
        </Route>
        <Route path="/current" exact>
          <Current />
        </Route>
        <Route path="/history/select" exact>
          <PriceHistory/>
        </Route>
        <Route path='/history/result'>
          <HistoryResult/>
        </Route>
        <Route path="/about" exact>
          {/* template for about me */}
          <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>About me</p>
            <p className='text-xl'>Tongrak Ruento 630610730</p>
          </div>
        </Route>
      </Switch>

    </Router >
  );
}

export default App;

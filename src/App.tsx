import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Current from './components/Current';

function App() {
  return (
    <Router>
      <Navbar />

      <br />

      <Switch>
        <Route path='/' exact>
          <Current />
        </Route>
        <Route path="/current">
          <Current />
        </Route>
        <Route path="/history/select" exact>
          {/* template for /history/select */}
          <div className='text-center space-y-3 space-x-3'>
            <p className='text-2xl font-semibold'>Select historical range</p>
            <span>From date</span>
            <input type='date' onChange={e => console.log(e.target.value)}></input>
            <span>To date</span>
            <input type='date' onChange={e => console.log(e.target.value)}></input>
            <br />
            <br />
            <Link to='/history/result' >
              <button>
                Get data
              </button>
            </Link>
          </div>
        </Route>
        <Route path='/history/result' exact>
          {/* template for /history/result */}
          <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>Historical price</p>
            <p className='text-2xl'>Loading ...</p>
            <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
            <p className='text-xl font-semibold'> ( From 2021-01-01 To 2021-01-02)</p>
            <ul>
              <li className='text-xl'>2021-01-01 - {(1000000).toLocaleString()} THB</li>
              <li className='text-xl'>2021-01-02 - {(2000000).toLocaleString()} THB</li>
              <li className='text-xl'>2021-01-03 - {(3000000).toLocaleString()} THB</li>
            </ul>
          </div>
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
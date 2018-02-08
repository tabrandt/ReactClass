import React, { Component } from 'react';

//custom css imports
import './ui-toolkit/css/nm-cx/main.css';
import './custom.css';

//package imports
import { 
  BrowserRouter,
  Route
  } from 'react-router-dom';

//App imports
import { Home } from './components/home';
import { NavigationBar } from './components/navBar';
import MineCoins from './containers/mineCoins';
import BuyCoins from './containers/buyCoins';
import SellCoins from './containers/sellCoins';
import Ledger from './containers/ledger';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="bg-off-white padding-medium">
          <NavigationBar />
          <div className="card padding-none">
            <div className="row padding-horiz-medium">
            <Route exact path='/' component={ Home } />
            <Route path='/mineCoins' component={ MineCoins } />
            <Route path='/buyCoins' component={ BuyCoins } />
            <Route path='/sellCoins' component={ SellCoins } />
            <Route path='/ledger' component={ Ledger } />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

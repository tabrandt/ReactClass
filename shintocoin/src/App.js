import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

// import '../custom.css'
import {Home} from './components/home'
import {NavigationBar} from './components/navBar'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="bg-off-white padding-medium">
      <NavigationBar />
        <div className="card padding-none">
            <div className="row horiz-medium">
                {/* <Home /> */}
                <Route exact path='/' component={Home} />
            </div>
          </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

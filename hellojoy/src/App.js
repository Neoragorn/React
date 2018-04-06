import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Hello.css';
import Joy from './JoyrideComponent';
import HelloWorld from './HelloWorld';

import '../node_modules/react-joyride/lib/react-joyride-compiled.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> 
        <HelloWorld classname="App-hello1" message="i'm the first component" />
        <HelloWorld classname="App-hello2" message="i'm the second component" />
        <HelloWorld classname="App-hello3" message="i'm the third component" />
        <HelloWorld classname="App-hello4" message="i'm the fourth component" />
        <Joy />

      </div>
    );
  }
}

export default App;

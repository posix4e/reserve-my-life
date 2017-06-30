import React, { Component } from 'react';
import './App.css';

const Promise = require('promise-polyfill');
const setAsap = require('setasap');
Promise._immediateFn = setAsap;
const getObjects = require("./Fake").getObjects;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    Promise.resolve(getObjects()).then((objects) => {
        this.setState({"objects": objects});
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro"> Rent my life </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
/*eslint-disable import/no-unassigned-import */
import './App.css';

function getReservables() {
  if (window.location.hostname === "localhost") {
    if (window.location.port === '3000') {
      return 'http://35.188.144.93/api/reservables';
    }
  } 
  return window.location.toString().concat('api/reservables');
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      items: {}
    };
    fetch(getReservables())
        .then(result=>result.json())
        .then(items=> {
          this.setState({items});
          this.setState({loading:false});
        })
        /* eslint-disable no-console */
        .catch(err => console.error('Error ', err.toString()));
   }

  render() {
    if (!this.state.loading) {
        return ( <ul> {
            this.state.items.map(function(item) {
              return <li key={item.name}><h3>{item.name}</h3><h5>{item.description}</h5></li>
            })
          } </ul>)
    }
    return(<h1>Loading</h1>);
  }
}

export default App;

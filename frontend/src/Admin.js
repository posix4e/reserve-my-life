import React, { Component } from 'react';
import { Admin, Resource } from 'admin-on-rest';
import {ReservableList} from './reservables.js';
import postgrestClient from './aor-pg.js';

function getAPI() {
  // We are connecting with yarn
  if (window.location.hostname === "localhost") {
    if (window.location.port === '3000') {
      return 'http://35.188.144.93/api';
    }
  }
  // Return embedded api server
  return window.location.origin.concat('/api');
}

class AdminPage extends Component {
  constructor() {
    super();
    this.state = { restClient: null };
  }

  render() {

    return (
      <Admin restClient={postgrestClient(getAPI())}>
        <Resource name="reservables" list={ReservableList} />
      </Admin>
    );
  }
}

export default AdminPage;

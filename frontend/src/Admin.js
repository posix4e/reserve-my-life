import React, { Component } from 'react';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { buildApolloClient} from 'aor-simple-graphql-client';
import { Admin, Resource } from 'admin-on-rest';
import {ReservableList} from './reservables.js';


function getAPI() {
  // We are connecting with yarn
  if (window.location.hostname === "localhost") {
    if (window.location.port === '3000') {
      return 'http://35.188.144.93/graphql';
    }
  }
  // Return embedded api server
  return window.location.origin.concat('/graphql');
}

class AdminPage extends Component {
  constructor() {
    super();
    this.state = { restClient: null };
  }

  componentWillMount() {
    const api_endpoint = getAPI();
    const networkInterface = createNetworkInterface({ uri: api_endpoint});

   /* networkInterface.use([ {
      applyMiddleware(req, next) {
        if (!req.options.headers) {
          req.options.headers = {}; // Create the header object if needed.
        }
        // get the authentication token from local storage if it exists
        const idToken = localStorage.getItem('id_token');
        if (idToken) {
          req.options.headers.authorization = `Bearer ${idToken}`;
        }
        next();
      },
    }, ]);*/

    const client = new ApolloClient({ networkInterface: networkInterface });
    buildApolloClient({ client }).then(restClient => this.setState({ restClient }));
  }

  render() {
    const { restClient } = this.state;

    if (!restClient) {
      return <div>Loading</div>;
    }

    return (
      <Admin restClient={restClient}>
        <Resource name="api" list={ReservableList}/>
      </Admin>
    );
  }
}

export default AdminPage;

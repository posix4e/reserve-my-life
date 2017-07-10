// src/routes.js

import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import history from './history';
import Auth from './Auth/Auth';
import Home from './Home/Home';
import App from './App';
import AdminPage from './Admin';
import Callback from './Callback/Callback';


export const makeMainRoutes = () => {
 
  const auth = new Auth();

  const handleAuthentication = (nextState) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      auth.handleAuthentication();
    }
  }

 
  return (
    <BrowserRouter history={history} component={App}>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/admin" render={(props) => <AdminPage auth={auth} {...props} />} />
        <Route
          path="/callback"
          render={(props) => { 
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}
        />


      </div>
    </BrowserRouter>
  );
}

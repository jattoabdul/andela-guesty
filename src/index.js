import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    // Redirect,
    Switch
    } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import './index.scss';
import { Login } from './components/Auth';
import { Dashboard } from './components/Dashboard';
import registerServiceWorker from './registerServiceWorker';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const app = document.getElementById('root');
const history = createBrowserHistory();

render(
    <Router history={history}>
      <Switch>
        <Route
            exact
            path="/"
            component={Login}
        />
        <Route
            path="/dashboard"
            component={Dashboard}
        />
      </Switch>
    </Router>, app);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  HashRouter,
  Route,
//   Link
} from 'react-router-dom';

ReactDOM.render((
   <HashRouter>
      <div>
        <Route exact path="/" component={App} />
        {/* <Route path="dashboard" component={Dashboard} />
        <Route path="users" component={Users} /> */}
      </div>
   </HashRouter >
), document.getElementById( 'root' ) )
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

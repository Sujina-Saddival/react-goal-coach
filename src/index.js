import React from 'react';
// react- dom throghs react code on ReactJSto the browser
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import App from './components/App.js'
import Signup from './components/signup.js'
import Signin from './components/signin.js'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route path="/sign_in" component={Signin}></Route>
      <Route path="/sign_up" component={Signup}></Route>
    </Switch>
  </BrowserRouter>, document.getElementById("root")
	)

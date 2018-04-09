import React from 'react';
// react- dom throghs react code on ReactJSto the browser
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router';
import App from './App.js'
import Order from './components/order.js'
import Signup from './components/signup.js'
import Signin from './components/signin.js'
import {read_cookie} from 'sfcookies'

function requireAuth(nextState, replace) {
  const token = read_cookie('authentication_token');
  if(!token){
    console.log("session exists");
    replace({
      pathname: '/'
    })
  }
}

ReactDOM.render(
  <Router path="/" history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/sign_in" component={Signin} />
    <Route path="/sign_up" component={Signup}/>
    <Route path="/order" component={Order} onEnter={requireAuth}/>
  </Router>, document.getElementById("root")
	)

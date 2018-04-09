import React, {Component} from 'react';
import {signIn, signInWithGoogle} from '../api/signin'
import {bake_cookie} from 'sfcookies'
import {GoogleLogin} from 'react-google-login';
import { Router} from 'react-router';
import Order from './order.js'

// google clinet ID = 338642092590-p1l3l8g50ju3n0oun9las0letnta12td.apps.googleusercontent.com

// google secrete ID = CuDxa1MoE27Qz61mFK932Jsu

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  signin(){
    var signin_params = {
      'user': {
        'email': this.state.email,
        'password': this.state.password,
        'logging_in_from': 'web',
        'login_id': "asdfghjklqpowieuryt"
      }
    }
    console.log(signin_params,'signin_params');
    signIn(signin_params)
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.status === 200) {
        this.setState({message: responseJson.message});
        bake_cookie('authentication_token', responseJson.user.authentication_token);
      } else {
        this.setState({error: responseJson.error});
      }
    })
    .catch((error) => {
      alert(error)
    });
  }

  responseGoogle(response) {
  var sign_in_with_google_params = {
    'token': response.getAuthResponse().id_token
  };
  console.log(sign_in_with_google_params);
    signInWithGoogle(sign_in_with_google_params)
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.status === 200) {
        setTimeout(() => {
          this.setState({message: responseJson.message});
        }, 3000);
        bake_cookie('authentication_token', responseJson.user.authentication_token);
        return (<Router path="/order" component={Order}  />)
      } else {
        this.setState({error: responseJson.error})
      }
    })
    .catch((error) => {
      alert(error)
    });
  }


  render(){
    return(
      <div style={{ width: '30%'}}>
        <h1>Sign in</h1>
      <input type="text" className="form-control" placeholder="Email" onChange={ event => this.setState({email: event.target.value})}/>
        <input type="password" className="form-control"   placeholder="Password" onChange={ event => this.setState({password: event.target.value})}/>
      <button className="btn btn-success" onClick={() => this.signin()}>Sign In</button>
      <div>{this.state.error}</div>
      <a href='#/sign_up'>Sign Up instead</a>
        <GoogleLogin clientId="338642092590-f7g5lkis0vim549ls358qvrdr8eb7g0j.apps.googleusercontent.com" buttonText="Login" onSuccess={this.responseGoogle} onFailure={this.responseGoogle}/>
      </div>
    )
  }
}

export default SignIn;

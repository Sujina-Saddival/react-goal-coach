import React, {Component} from 'react';
import {signUp} from '../api/signup'

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  signup(){
    var signup_params = {
      'email': this.state.email,
      'password': this.state.password,
      'password_confimation': this.state.password_confirmation,
      'first_name': this.state.first_name,
      'last_name': this.state.last_name,
      'contact_number': this.state.contact_number,
      'role': 'user'
    }
    signUp(signup_params)
    .then((response) => response.json())
    .then((responseJson) => {
      debugger
      if(responseJson.status === 200){
        setTimeout(() => {
          this.setState({message: responseJson.message});
        }, 3000);
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
      <div className="container">
        <h1>Signup</h1>
      <div className="row">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="First Name" onChange={ event => this.setState({first_name: event.target.value})}/>
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Last Name" onChange={ event => this.setState({last_name: event.target.value})}/>
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Email" onChange={ event => this.setState({email: event.target.value})}/>
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Contact Number" onChange={ event => this.setState({contact_number: event.target.value})}/>
        </div>
        <div className="col-md-6">
          <input type="password" className="form-control"   placeholder="Password" onChange={ event => this.setState({password: event.target.value})}/>
        </div>
        <div className="col-md-6">
          <input type="password" className="form-control"   placeholder="Password Confirmation" onChange={ event => this.setState({password_confirmation: event.target.value})}/>
        </div>
      </div>
        <button className="btn btn-success" onClick={() => this.signup()}>Sign Up</button>
        <div>{this.state.error}</div>
        <div>{this.state.message}</div>
        <a href='#/sign_in'>Sign In instead</a>
      </div>
    )
  }
}

export default Signup;

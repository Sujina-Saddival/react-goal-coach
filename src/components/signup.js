import React, {Component} from 'react';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  signup(){
    const URL = "http://localhost:3001/api/v1/accounts"
    var signup_params = {
      'user': {
          'email': this.state.email,
          'password': this.state.password,
          'password_confirmation':this.state.password,
          'first_name': "Sujina",
          'last_name': "Saddival",
          'contact_number': "292-202-2020",
          'community_id': 1,
          'company_id': 1,
          'type': 'resident',
          'moved_in': '12/12/2019'
        }
     }
    console.log(URL,'url');
    console.log(signup_params,'signup_params');
    fetch(URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signup_params)
    }).then(function(response) {
      debugger
      return response.json();
    }).then(function(data) {
    debugger
    });
  }


  render(){
    return(
      <div>
        <h1>Signup</h1>
      <input type="text" className="form-control" placeholder="Email" onChange={ event => this.setState({email: event.target.value})}/>
        <input type="password" className="form-control"   placeholder="Password" onChange={ event => this.setState({password: event.target.value})}/>
        <button className="btn btn-success" onClick={() => this.signup()}>Sign Up</button>
      </div>
    )
  }
}

export default Signup;

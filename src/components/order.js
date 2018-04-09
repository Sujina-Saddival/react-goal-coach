import React, {Component} from 'react';
import{bake_cookie} from 'sfcookies'

class Order extends Component {
  logout(){
    debugger
    bake_cookie('authentication_token', null);
  }
  render(){
    return(
      <div><button className="btn btn-danger" onClick={() => this.logout()}>SignOut</button></div>
    )
  }
}

export default Order;

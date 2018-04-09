import {URL} from '../constants'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

function signIn(signin_params){
  debugger
  return(
    fetch(URL + 'accounts/sign_in', {
      method: 'POST',
      headers,
      body: JSON.stringify(signin_params)
    })
  )
}

function signInWithGoogle(signin_wit_google_params){
  debugger
  return(
    fetch(URL + 'sign_in_with_google', {
      method: 'POST',
      headers,
      body: JSON.stringify(signin_wit_google_params)
    })
  )
}

export {
  signIn,
  signInWithGoogle
}

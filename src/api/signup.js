import {URL} from '../constants'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

function signUp(signup_params){
  return(
    fetch(URL + 'register', {
      method: 'POST',
      headers,
      body: JSON.stringify(signup_params)
    })
  )
}

export {
  signUp
}

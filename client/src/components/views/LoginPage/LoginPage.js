import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom'

function LoginPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (evt) => {
    setEmail(evt.currentTarget.value)
  }

  const onPasswordHandler = (evt) => {
    setPassword(evt.currentTarget.value)
  }

  const onSubmitHandler = (evt) => {
    evt.preventDefault();

    let body = {
      email: Email,
      password: Password
    }

    dispatch(loginUser(body))

      .then(response => {
        console.log('response => ')
        console.log(response)
        if (response.payload.loginSuccess) {
          props.history.push('/')
        } else {
          console.log('err')
        }
      })

  }


  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <form style={{
        display: 'flex', flexDirection: 'column'
      }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button>
          Login
        </button>
      </form>
    </div>
  )
}

export default withRouter(LoginPage)


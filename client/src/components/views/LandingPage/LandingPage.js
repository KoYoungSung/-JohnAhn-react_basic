import React, { useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

function LandingPage(props) {

  const onCLickHandler = () => {
    axios.get('/api/users/logout')
      .then(response => {
        if (response.data.success) {
          props.history.push('/login')
        } else {
          alert('로그아웃 하는데 실패')
        }
      })
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <h2>시작페이지</h2>

      <div>
        <button onClick={onCLickHandler}>
          로그아웃
        </button>
      </div>
    </div>
  )
}

export default withRouter(LandingPage)

import React from 'react'

function User(props) {
  return (
    <>
     <h3>User Componet</h3>
     <button onClick={props.data}>call data function</button>
    </>
  )
}

export default User
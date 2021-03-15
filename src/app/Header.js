import React from 'react'

export default function Header( { userName, firstName } ) {
  console.log(firstName)
  return (
    <>
    <header>{ firstName ? `Welcome, ${firstName}!` : 'Welcome!' }</header>
      {/* { userName.length > 2 && <header>Welcome, { userName }!</header>}
      { userName.length < 2 && <header>Welcome!</header> } */}
    </>
  )
}

import React from 'react'
import VerticalSpace from './VerticalSpace'

export default function Form ( { setUserName, onSuccess } ) {

  const onSubmit = (e) => {
    e.preventDefault()
    const firstName = e.target[0].value

    onSuccess({
      firstName,
      lastName: e.target[1].value,
      age: e.target[2].value
    })

    console.log(firstName)
    
    setUserName(e.target[0].value + ' ' + e.target[1].value)
   
  }

  return (
    <>
      <h1>Fill in with some data</h1>
      <form onSubmit={onSubmit}>
        <div className="form-item">
          <label htmlFor="firstName">First Name</label>
          <VerticalSpace height={5} />
          <input id="firstName" type="text" placeholder="Type in your first name" />
        </div>

        <VerticalSpace height={5} />

        <div className="form-item">
          <label htmlFor="lastName">Last Name</label>
          <VerticalSpace height={5} />
          <input id="lastName" type="text" placeholder="Type in your last name" />
        </div>

        <VerticalSpace height={5} />

        <div className="form-item">
          <label htmlFor="age">Age</label>
          <VerticalSpace height={5} />
          <input id="age" type="number" placeholder="Type in your age" />
        </div>

        <VerticalSpace height={10} />

        <input type="submit" value="Save!" />
      </form>
    </>
  )
}

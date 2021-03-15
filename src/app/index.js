import React, { useState } from 'react'

import './App.css'
import Card from './Card'
import Cards from './Cards';
import Form from './Form'
import Header from './Header';
import Profile from './Profile';

function App() {

  const [ userName, setUserName ] = useState('')
  const [ userData, setUserData ] = useState({})

  // this gives you more control over your data if you are eg working in a team where different ppl 
  const onSuccess = (data) => {
    setUserData(data)
  }

  return (
    <>
      <Header userName={userName} firstName={userData.firstName} />
      <Cards>
        <Card>
          <Form setUserName={setUserName} onSuccess={onSuccess} /> 
        </Card>

        <Card>
          <Profile />
        </Card>
      </Cards>
    </>
  );
}

export default App;

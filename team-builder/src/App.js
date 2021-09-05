import './App.css';
import Team from './components/Team'
import Form from './components/Form'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}



function App() {
  const [teamMembers, setTeamMembers] = useState([])

  const [formData, setFormData] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormData({
      ...formData,
      [inputName]: inputValue
    })
  }

  const submitForm = () => {
    const {name, email, role} = formData
    const newMember = {
      ...formData,
      name: name.trim(),
      email: email.trim(),
    }
    if(name && email && role) {
      setTeamMembers([...teamMembers, newMember])
      setFormData(initialFormValues)
    //   axios.post('fakeapi.com', newMember)
    //   .then (res => {
    //     setTeamMembers([...teamMembers, res.data])
    //     setFormData(initialFormValues)
    //   })
    //   .catch(err => console.log(err))
    }
  }

  // useEffect(() => {
  //   axios.get('fakeapi.com').then(res => setTeamMembers(res.data))
  // }, [])

  return (
    <div className="App">
      <Form
      values={formData}
      update={updateForm}
      submit={submitForm}
      />
      {
        teamMembers.map(member => {
          return(
            <Team key={member.name} details={member}/>
          )
        })
      }

    </div>
  );
}

export default App;
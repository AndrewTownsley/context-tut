import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

const About = () => {
    const { user, setUser } = useContext(UserContext)

  return (
    <div>
        <p>{JSON.stringify(user, null, 2)}</p>    
    </div>
  )
}

export default About
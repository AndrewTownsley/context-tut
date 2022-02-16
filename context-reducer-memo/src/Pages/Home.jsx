import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { login } from '../utils/login'

const Home = () => {
    const { user, setUser } = useContext(UserContext)

  return (
    <div>
        <h1>Home</h1>
        <p>{JSON.stringify(user, null, 2)}</p>
       { user ? <button onClick={() => setUser(null)}>logout</button>
            :       
            <button 
                onClick={async () => {
                const user = await login();
                setUser(user);
                }}
            >
                login
            </button>}
    </div>
  )
}

export default Home
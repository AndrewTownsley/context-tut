import './App.css';
import React, { useState, useEffect } from 'react';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([])

  useEffect(() => {

    const fetchUserData = () => {
      fetch(`https://randomuser.me/api`)
        .then(response => response.json())
        .then(data => setUsers(data))
    }
    fetchUserData();
  }, [])
  console.log("Users:", users);

  return (
    <div>
      <h1>Fetch Data from the Random User APi...</h1>
      <section className="users">
        {
          users.results.map((user) => (
            <article key={user.name}>
              <h4>{user.name}</h4>
            </article>
          ))
        }
        <p>hello......</p>
      </section>
  
      <h2>Counter</h2>
        <h3>{count}</h3>
      <Button 
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

export default App;

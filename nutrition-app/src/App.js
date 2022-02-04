import './App.css';
import React, { useState, useEffect } from 'react';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([])
  let amount = 5;

  useEffect(() => {
    const fetchUserData = () => {
      fetch(`https://randomuser.me/api/?results=${amount}`)
        .then(response => response.json())
        .then(data => setUsers(data.results))
        
    }
    fetchUserData();
  }, [amount])
  console.log("Users:", users);

  return (
    <div>
      <h1>Fetch Data from the Random User APi...</h1>
      <section className="users">
        {
          users.map((user, index) => (
            <article className='user-card' key={index}>
              <img src={user.picture.thumbnail} alt={user.name.first} />
              <div className="user-card-info">
                  <p>{user.gender}</p>
                  <p>{user.name.first}</p>
                  <p>{user.location.city}</p>
                  <p>{user.email}</p>
              </div>
            </article>
       
          ))
          
        }
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

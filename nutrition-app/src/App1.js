import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import Button from './components/Button';
// import User from './components/User';
// import Pagination from './components/Pagination';
// import { USERS_PER_PAGE } from './Constants';

function App() {
  // const [count, setCount] = useState(0);
  // const [users, setUsers] = useState([])
  // const [pageNumber, setPageNumber] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);

  // useEffect(() => {
  //   const fetchUserData = () => {
  //   axios
  //     .get(`https://randomuser.me/api/?page=1&results=50
  //     `)
  //     .then(response => {
  //       const result = response.data.results;
  //       setUsers([...users, ...result]);
  //       setTotalPages(Math.ceil(result.length / USERS_PER_PAGE));
  //     })
  //   }
  //   fetchUserData();
  // }, [pageNumber])
  // console.log("Users:", users);

  // const handlePageClick = (number) => {
  //   setPageNumber(number)
  // }

  return (
    <div>
      {/* <h1>Fetch Data from the Random User APi...</h1>
      <button onClick={() => setPageNumber((pageNumber) => pageNumber + 1)}>Load More</button>
      <section className="users">
        {
          users.map((user, index) => (
            <User
              user={user}
              index={index}
              key={user.login.uuid}
            />
       
          ))
          
        }
      </section>
      <Pagination
        totalPages={totalPages}
        pageNumber={pageNumber}
        handlePageClick={handlePageClick}
      />
      <h2>Counter</h2>
        <h3>{count}</h3>
      <Button 
        count={count}
        setCount={setCount}
      /> */}
    </div>
  );
}

export default App;

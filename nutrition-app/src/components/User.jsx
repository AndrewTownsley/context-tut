import React from 'react';

const User = ({ user, index }) => {
  return (
    <article className='user-card' key={index}>
    <img src={user.picture.thumbnail} alt={user.name.first} />
    <div className="user-card-info">
        <p>{user.gender}</p>
        <p>{user.name.first}</p>
        <p>{user.location.city}</p>
        <p>{user.email}</p>
    </div>
  </article>
  );
};

export default User;

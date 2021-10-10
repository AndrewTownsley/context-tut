import React, { useState, useEffect } from 'react';
import './App.css'
import { db } from './firebase-config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'


const App = () => {
    const [users, setUsers] = useState([]);
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState(0);
    const usersCollectionRef = collection(db, 'notes')

    const createUser = async (e) => {
        e.preventDefault();
        await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) })
    }

    const deleteUser = async (id) => {
        const userDoc = doc(db, 'notes', id)
        await deleteDoc(userDoc);
    }

    const editUserAge = async (id, age) => {
        console.log('Edit Age!!');
        const userDoc = doc(db, 'notes', id)
        const newFields = {age: Number(age + 1)};
        await updateDoc(userDoc, newFields)
    }

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getDocs(usersCollectionRef);
                console.log(data);
                setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        fetchUsers();
    }, [])

    return (
        <div>
            <h1>Create User Account</h1>
            <form action="submit">
                <label htmlFor="name">
                    Enter User Name
                    <input onChange={(e) =>{setNewName(e.target.value)}} type="text" placeholder="Name..." />
                </label>
                <label htmlFor="age">
                    Enter User Age
                    <input onChange={(e) =>{setNewAge(e.target.value)}} type="number" placeholder="Age..." />
                </label>
                <button onClick={createUser}>Submit</button>
            </form>
            <div className="user-list">
                {
                    users.map((user, index) => 
                        <div className="user-card" key={index}>
                            <h3>Name: {user.name}</h3>
                            <h4>Age: {user.age}</h4>
                            <button onClick={() => {editUserAge(user.id, user.age)}}>Edit Age</button>
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default App

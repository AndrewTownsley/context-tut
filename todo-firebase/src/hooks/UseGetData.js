import React, { useState, useEffect} from 'react'
import firebase from  'firebase';


const UseGetData = () => {
    const [documents, setDocuments] = useState([]);
    const db = firebase.firestore();

    useEffect(() => {
        db.colllection('values').get()
        .then((querySnapshot) => {
            let arr = [];
            querySnapshot.docs.map((doc) => arr.push({ id: doc.id, value: doc.data() } ))
            setDocuments(arr)
        })
    }, [db])

    return (
       [documents]
    )
}

export default UseGetData

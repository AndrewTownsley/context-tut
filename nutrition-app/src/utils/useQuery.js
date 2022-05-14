import react, { useState, useEffect } from 'react';
import axios from 'axios';

const useQuery = (request) => {
    const [response, setResponse] = useState([]);
    const url = (`https://api.hatchways.io/assessment/sentences/4`)

    useEffect(() => {
        request.then((fetchResponse) => {
            setResponse(fetchResponse.data.data.sentence)
        })
    }, [])
    return { response }
}

export default useQuery;

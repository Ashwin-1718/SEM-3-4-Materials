import React, { useEffect, useState } from 'react'

const Api = () => {
    const [data, setData] = useState([]); 

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error('Error fetching data:', error));
    }, [])

    return (
        <div>
            <h1>API Data</h1>
            {data.length > 0 ? (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    )
}

export default Api
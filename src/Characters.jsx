import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

const Characters = ({ url }) => {

    const [location, setLocation] = useState({});

    useEffect(() => {
        axios.get(url)
            .then(res => setLocation(res.data))
    }, [])

    console.log(location);
    return (
        <div className='resident-info'>
            <li>
                <div className='resident-card'>
                    <img src={location.image} alt="" />
                    <h2>{location.name}</h2>
                    <h3>Status:</h3>
                    <p>{location.status}</p>
                    <h3>Origin:</h3>                    
                    <p>{location.origin?.name}</p>
                    <h3>Appearance in episodes:</h3>
                    <p>{location.episode?.length}</p>
                </div>
            </li>
        </div>

    );
};

export default Characters;
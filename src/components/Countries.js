import React, { useEffect} from 'react';
import { useState } from 'react'
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    const [data,setData] = useState([]);
   
    useEffect(() => {
       axios.get("https://restcountries.com/v3.1/all")
       .then(res => {
        console.log(res.data)
        setData(res.data)
        })
        .catch(error => {
            console.error(error)
            // Toujours Use le .catch pour affiché l'erreur avec le .then !!!!! 
        })

      
    
    }, []);
   
     
    return (
        <div className="countries">
            <ul className ="countries-list">
               {data.map((country) => (
                //    <li key={country.name.common}>{country.name.common} </li>
                <Card country ={country} key={country.name}/>
        ))} 
            </ul>
        </div>
    );
};

export default Countries;
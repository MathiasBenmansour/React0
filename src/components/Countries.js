import React from 'react';
import { useState } from 'react'

const Countries = () => {
    const [data,setData] = useState(['Hello']);
    const sayGoodbye = () => {
        setData("Goodbye")
    }
    return (
        <div>
        {data} 
        <button onClick={sayGoodbye}>Dire adios</button>
        </div>
    );
};

export default Countries;
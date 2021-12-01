import React from 'react';

const Card = (props) => {
    const {country} = props;
    
    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");  
        //  X Retourne le country.population tu le met en string et ensuite tu le remplace par un espace vide tout les 3 caractères !
    }


    return (
        <li className="card">
            <img src ={country.flags.png} alt ="flag"/>
            
            {/* // c'est comme si je fesais props.country.flags.png */}
            <div className="data-container">
                <ul>
                <li key={country.name.common}>{country.name.common} </li>
                <li key={numberFormat (country.population)}>Pop : {numberFormat (country.population)} </li>
                <li key= {country.capital}>{country.capital} </li>


                    

                </ul>
            </div>
        </li>
    );
};

export default Card;
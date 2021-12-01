import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
          <nav> 
            <Link to ="/" className="nav-active">Accueil</Link>
             <Link to  ="a-propos" className="nav-active">À propos</Link>
             
          </nav>    
        </div>
    );
};

export default Navigation;
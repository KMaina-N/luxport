// Yacht.js
import React from 'react';

function Yacht({ name, image }) {
    return (
        
        <div className="yacht">
            <img src={image} alt={name} />
            <p className='yacht-name'>{name}</p>
            <div className="branding-line"></div>
            <div className="yacht-specs">
                <p className="yacht-spec">Length: </p>
                <p className="yacht-spec-value"> 250m </p>
            </div>
            <div className="yacht-specs">
                <p className="yacht-spec">Shipyard: </p>
                <p className="yacht-spec-value"> Dubrovnik </p>
            </div>
            <div className="yacht-specs">
                <p className="yacht-spec">Year: </p>
                <p className="yacht-spec-value"> 2020 </p>
            </div>
            <div className="yacht-specs">
                <p className="yacht-spec">Price: </p>
                <p className="yacht-spec-value"> € 100,000,000 </p>
            </div>
        </div>
    )
}

export default Yacht;

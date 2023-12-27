// YachtGrid.js
import React from 'react';
import Yacht from './Yacht';
import dummyYachts from '../data/dummy_data.js';

import MainFilter from './MainFilter.jsx';


function YachtGrid() {
    return (
        <div className="yatchs">
            <p className='subtitle'>Yachts for sale</p>
            <MainFilter />
            <div className="yacht-grid">
                {dummyYachts.map((yacht, index) => (
                    <Yacht key={index} name={yacht.name} image={yacht.image} />
                ))}
            </div>
        </div>
    )
}

export default YachtGrid;

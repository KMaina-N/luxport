import React from 'react'

function MainFilter() {
    return (
        <div className="filter-yachts">
            <div className="columns">
                <div className="column">
                    <div className="sort-by">
                        <p>SORT BY: </p>
                        <div class="select">
                            <select>
                                <option>Price</option>
                                <option>Length</option>
                                <option>Year</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="sort-by">
                        <p> DISPLAY IN: </p>
                        <div class="select">
                            <select>
                                <option>USD</option>
                                <option>EUR</option>
                                <option>GBP</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="sort-by">
                        <p>TYPE OF YACHT: </p>
                        {/* checkboxes */}
                        <div className="select">
                            <select>
                                <option>Motor</option>
                                <option>Sail</option>
                                <option>Gulet</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFilter
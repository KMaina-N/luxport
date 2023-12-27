// src/components/Home.js
import React from 'react';
import RangeSlider from '../components/RangeSlider';
import YachtGrid from '../components/YachtsForSale';

const Home = () => {
    return (
        <div>
            <img
                src={require("../assets/images/LadyJorgia.webp")}
                alt="Lady Jorgia"
                className="image-banner"
            />
            <div className="container is-max-widescreen">
                <div className="filter-container">
                    <div class="select">
                        <select>
                            <option>Select Yacht</option>
                            <option>With options</option>
                            <option>Another option</option>
                        </select>
                    </div>
                    <RangeSlider />
                    <div className="search-btn">
                        <button className="button is-primary">Search</button>
                    </div>

                </div>
                <div className="contact">
                    <div className="filter-line"></div>
                    <div className="contact-us">
                        <p>Contact Us</p>
                    </div>
                </div>
                <br></br>
                <div className="description">
                    <nav class="breadcrumb" aria-label="breadcrumbs">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Buy</a></li>
                        </ul>
                    </nav>
                    <div className="summary">
                        <p className="title is-3">Buy a Yacht</p>
                        <div className="branding-line"></div>
                        <br></br>
                        <p className="subtitle is-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="columns">
                            <div className="column is-half">
                                <p className="title is-5">Luxury and Recreational Boats for Sale</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla pellentesque dignissim enim sit amet. Purus viverra accumsan in nisl nisi. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. In massa tempor nec feugiat nisl pretium fusce id. Vitae turpis massa sed elementum tempus. Enim nunc faucibus a pellentesque. Cursus in hac habitasse platea dictumst quisque. Eu lobortis elementum nibh tellus molestie. Tellus mauris a diam maecenas sed. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. In nulla posuere sollicitudin aliquam ultrices. Cursus sit amet dictum sit amet justo. Nunc sed velit dignissim sodales ut eu sem integer. Nisl rhoncus mattis rhoncus urna neque viverra justo. Lectus mauris ultrices eros in cursus turpis massa. Pharetra convallis posuere morbi leo urna molestie at elementum. Phasellus vestibulum lorem sed risus ultricies.
                                </p>
                            </div>
                            <div className="column">
                                <p className="title is-5">Wealth for expertise</p>
                                <p>Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Aliquam sem et tortor consequat id porta nibh venenatis cras. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Nunc sed blandit libero volutpat sed cras ornare arcu. Eget dolor morbi non arcu risus quis varius quam quisque. Sed blandit libero volutpat sed cras ornare arcu dui. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Diam maecenas sed enim ut sem viverra aliquet eget sit. Diam vel quam elementum pulvinar etiam non quam lacus. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senect
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <YachtGrid />
            </div>
        </div>
    );
};

export default Home;


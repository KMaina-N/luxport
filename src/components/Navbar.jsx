// src/components/Navbar.js
import React from 'react';

function Navbar() {
    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    {/* add image */}
                    <img
                        src={require("../assets/images/logo_lux.png")}
                        alt="Logo"
                        className="logo-image" // Custom class for the logo image
                        height="200"
                    />
                </a>

                <a
                    role="button"
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar">
                    {/* <a className="navbar-item" href="#">
            Buy
          </a>

          <a className="navbar-item" href="#">
            Sell
          </a> */}

                    <div className="navbar-item has-dropdown is-hoverable buy-btn">
                        <a className="navbar-link ">
                            Buy
                        </a>

                        <div className="navbar-dropdown custom-dropdown-width">
                            <div class="columns">
                                <div class="column">
                                    <br></br>
                                    <p className="is-title is-6 buy-title">Buy A Yacht</p>
                                    <hr className="navbar-divider" />
                                    <a className="navbar-item" href="#">
                                        Yacths for sale
                                    </a>
                                    <a className="navbar-item" href="#">
                                        New in Market
                                    </a>
                                    <a className="navbar-item" href="#">
                                        Recent Sales
                                    </a>
                                </div>
                                <div class="column">
                                    {/* two images side by side */}

                                    <div className="featured-images">
                                        <div className="featured-image">
                                            <p className="is-title">Featured Yachts</p>
                                            <img src={require("../assets/images/yacht1.jpg")} alt="Featured Yacht" />
                                        </div>
                                        <div className="featured-image">
                                            <p className="is-title">Featured Yachts</p>
                                            <img src={require("../assets/images/yacht2.jpg")} alt="Featured Yacht" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable buy-btn">
                        <a className="navbar-link ">
                            Sell
                        </a>
                        <div className="navbar-dropdown custom-dropdown-width">
                            <div class="columns">
                                <div class="column">
                                    <br></br>
                                    <p className="is-title is-6 buy-title">Buy A Yacht</p>
                                    <hr className="navbar-divider" />
                                    <a className="navbar-item" href="#">
                                        Yacths for sale
                                    </a>
                                    <a className="navbar-item" href="#">
                                        New in Market
                                    </a>
                                    <a className="navbar-item" href="#">
                                        Recent Sales
                                    </a>
                                </div>
                                <div class="column">
                                    {/* two images side by side */}

                                    <div className="featured-images">
                                        <div className="featured-image">
                                            <p className="is-title">Featured Yachts</p>
                                            <img src={require("../assets/images/yacht1.jpg")} alt="Featured Yacht" />
                                        </div>
                                        <div className="featured-image">
                                            <p className="is-title">Featured Yachts</p>
                                            <img src={require("../assets/images/yacht2.jpg")} alt="Featured Yacht" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

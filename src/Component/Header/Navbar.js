import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item ">
                    <a class="nav-link" href="#">Home </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">World</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">U.S</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="#">Politics</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Economy</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Business</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="#">Tech</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Markets</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Opinion</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Life & Arts</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="#">Real Estate</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">WSJ.Magazine</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                 <li class="nav-item search-icon">search <i class="far fa-search ml-3 mr-2"></i></li> 
                </ul>
            </div>
            </nav> 
        </>
    );
};

export default Navbar;
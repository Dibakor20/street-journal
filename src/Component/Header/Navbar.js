import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav class="navbar p-0 navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item ">
                            <a class="nav-link" href="#">Home </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#">World</a>

                            <ul class="dropdown-menu">
                                <li><a href="#">Mission</a></li>
                                <li><a href="#">Vision</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>

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
                    </ul>


                    <a class="search-icon">search

                        <button type="button" data-toggle="modal" data-target="#myModal" class="btn btn-default navbar-btn">
                            <i class="far fa-search ml-3 mr-2"></i>
                        </button>

                        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>

                                    </div>
                                    <div class="modal-body">
                                        <form class="navbar-form " role="search">
                                            <div class="form-group">
                                                <input className="search_input" type="text" class="form-control" placeholder="Enter News,Quotes,Compaines Or Video" />
                                            </div>
                                            <button type="submit" class="btn btn-info">Search</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </nav>


        </>
    );
};

export default Navbar;
import React from 'react';
import './HeadBar.css'
import Navbar from './Navbar'
import Logo from '../../images/logo.png'

const HeadBar = () => {
    return (
        <>
            <div>
                <div className=" head-bar">
                    <img className="header-logo" src={Logo} alt="" />
                    <div className="">
                      <div className="header-subscribe">
                       <a className="subscribe" href="">Subscribe</a>
                       <a className="sign-in" href="">Sign In</a> 
                      </div>
                    </div> 
                    <Navbar></Navbar>

                </div>
            </div>
        </>
    );
};

export default HeadBar;
import React from 'react';
import './HeadBar.css'

const HeadBar = () => {
    return (
        <>
            <div>
                <div className="row head-bar">
                    <div className="col-8">
                        <h1 className="header-title">THE WALL STREET JOURNAL</h1>   
                    </div>
                    <div className="col-4">
                      <div className="header-subscribe">
                       <a className="subscribe" href="">Subscribe</a>
                       <a className="sign-in" href="">Sign In</a> 
                      </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeadBar;
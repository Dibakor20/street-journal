import React from 'react';
import './NewsStatistics.css'
import NewsChart from './NewsChart';

const NewsStatistics = () => {
    return (
        <>
            <div className="all_data">
            <a className="first_data" href="">US</a>
            <a className="data_name" href="">EUROPE</a>
            <a className="data_name" href="">ASIA</a>
            <a className="data_name" href="">FIX</a>
            <a className="data_name" href="">RATES</a>
            <a className="data_name" href="">FUTURES</a>
            </div>
            <div>
                <NewsChart/>
            </div>
            <div>
            <table class="table table-sm">
            <thead>
                <tr class="table-active">
                <th scope="col">DJIA</th>
                <th scope="col">34623.13</th>
                <th class="data_value" scope="col">-7.11</th>
                <th class="data_value" scope="col">-0.02%</th>
                </tr>
            </thead>
            <tbody className="table_List">
                <tr>
                <td>S&P 500</td>
                <td>4237.64</td>
                <td class="data_green">2.05</td>
                <td class="data_green">0.06%</td>
                </tr>
                <tr>
                <td>Nasdaq</td>
                <td>14130.28</td>
                <td class="data_green">45.85</td>
                <td class="data_green">0.33%</td>
                
                </tr>
                <tr>
                <td>Russell 2000</td>
                <td>2329.09</td>
                <td class="data_green">27.63</td>
                <td class="data_green">1.19%</td>
                </tr>
                <tr>
                <td>DJ Total Mkt</td>
                <td>44321.99</td>
                <td class="data_green">91.33</td>
                <td class="data_green">0.21%</td>
                </tr>
                <tr style={{borderBottom:"1px solid lightGray"}}>
                    <td colspan="2"><a href="">View Watchlist</a></td>
                    <td colspan="2"><a  href="">View All Market Data →</a></td>
                </tr>
            </tbody>
            </table>
            </div>

            <div>
                <div className="row">
                    <div className="col-md-10"><p className="opinion_part">OPINION</p></div>
                    <div className="col-md-2"><i style={{color:"#A28C6D"}} class="far fa-arrow-right"></i></div>
                </div>
       
                <div className="opinion_title">
                    <h5>The Power Of Nature Immunity</h5>
                    <p>By Marty Makery | Commentary</p>
                </div>
                <div className="opinion_title">
                    <h5>Why I Stop Hiring Lvy Language</h5>
                    <p>By R.R Reno | Commentary</p>
                </div>
                <div className="opinion_title">
                    <h5>Joe Manchin Playx Political Chess </h5>
                    <p>By The Editorial Board | Review & Outlook</p>
                </div>
            </div>
        
        </>
    );
};

export default NewsStatistics;
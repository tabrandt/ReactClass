import React from 'react';
import '../ui-toolkit/css/nm-cx/main.css';

export const Home = (props) => {

    console.log("Entering Home - props: ", props); //debug

    return (
            <div className="columns small-12 padding-vert-medium">                
                <h1>ShintoCoin</h1>
                <h3>The most wonderful Coin Shinto</h3>
                <p>Welcome to ShintoCoin, ShintoCoins are made by solving unsolvable 
                    problems.  To get coins head over to mine coins and get to the work!</p>
            </div>
    );
}
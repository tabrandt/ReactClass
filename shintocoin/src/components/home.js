import React from 'react'
import '../ui-toolkit/css/nm-cx/main.css'

export const Home = (props) => {
    console.log ('home component')
    return(
        <div className="columns small-12 padding-vert-medium">
            <h1>ShintoCoin</h1>
            <h3>The most wonderful Coint Shinto</h3>
            <p>
                Welcome to ShintoCoidn, ShintoCoins are made by solving unsolvable
                problems.  to get coins head over teh min coins and get to work.
            </p>
        </div>
    )
}
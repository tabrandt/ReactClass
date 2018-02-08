import React, {Compontent} from 'react'

import '../ui-toolkit/css/nm-cx/main.css'
import '../custom.css'

import {OldSchoolMenuLink} from './activeLink'

export const NavigationBar = (props) => {
    return(
        <ul className="heading-nav padding-bottom-medium">
            <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
            <OldSchoolMenuLink to="/mineCoins" label="Mine Coins" />
            <OldSchoolMenuLink to="/buyCoins" label="Buy Coins" />
            <OldSchoolMenuLink to="/sellCoins" label="Sell Coins" />
            <OldSchoolMenuLink to="/browseLedger" label="Browse Ledger" />
        </ul>
    )
}
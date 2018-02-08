import React from 'react';
import '../ui-toolkit/css/nm-cx/main.css';
import { OldSchoolMenuLink } from './activeLinks';

export const NavigationBar = (props) => {
    return (
        <ul className="heading-nav padding-bottom-medium">
          <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
          <OldSchoolMenuLink to="/mineCoins" label="Mine Coins"/>
          <OldSchoolMenuLink to="/buyCoins" label="Buy Coins"/>
          <OldSchoolMenuLink to="/sellCoins" label="Sell Coins"/>
          <OldSchoolMenuLink to="/ledger" label="Browse Ledger"/>
      </ul>
    );
}
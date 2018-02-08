import React, { Component } from 'react';
import '../ui-toolkit/css/nm-cx/main.css';

//package imports
import { connect } from "react-redux";
import { 
    Route,
    Link
  } from 'react-router-dom';
import LedgerItem from './ledgerItem';

//App Imports


class Ledger extends Component {
    constructor(props) {
        super(props);

        this.mapLedgerObjectForDisplay = this.mapLedgerObjectForDisplay.bind(this);
    }

    mapLedgerObjectForDisplay = (ledgerObject, arrayIndex) => {
        let localPath = this.props.match.path;

        return (
            <tr className="actionable" key={"shintoLedgerRow" + arrayIndex} id={"shintoLedgerRow" + arrayIndex}>
                <td key={"shintoLedgerAction" + arrayIndex} id={"shintoLedgerAction" + arrayIndex}>{ledgerObject.tranType}</td>
                <td className="text-center" key={"shintoLedgerAmount" + arrayIndex} id={"shintoLedgerAmount" + arrayIndex}>{ledgerObject.tranAmount}</td>
                <td className="text-center" key={"shintoLedgerValue" + arrayIndex} id={"shintoLedgerValue" + arrayIndex}>{ledgerObject.currentValue}</td>
                <td key={"shintoLedgerDetailsLink" + arrayIndex} id={"shintoLedgerDetailsLink" + arrayIndex}><Link to={localPath + "/" + ledgerObject.sequenceNumber}>Details</Link></td>
            </tr>
  
        );

        //saving original map for future reference (in case of oops)
        //<li className="filter-nav-entry" key={"userListItem" + arrayIndex}><button key={"userButtonItem" + arrayIndex}>{user}</button></li>
        //save:           <ShowActiveSideBarListLink to={localPath + "/" + user} label={user} arrayIndex={arrayIndex} key={"sideBarLinkKey" + arrayIndex} />
    }

    render() {

        //console.log("Entering Users - props: ", props); //debug
        console.log("Ledger Users Props: ", this.props);
        let localPath = this.props.match.path;
        console.log(localPath);

        return (
            <div>
                <div className="row">
                    <h2>Some Ledger Stuff Here</h2>
                    <p>here you can browse all ShintoCoin transacitons.</p>
                </div>
                <div className="row">
                    <div className="columns small-7 padding-top-medium">
                        <table className="table" summary="This is a table that contains listing of all bought, sold and mined ShintoCoin transactions.">
                            <caption className="show-for-sr">Shinto Coin Ledger of Transaction</caption>
                                <thead>
                                    <tr>
                                        <th width="800" className="text-center" colSpan="4">ShintoCoin Ledger</th>
                                    </tr>
                                    <tr>
                                        <th width="500">Action</th>
                                        <th width="100" className="text-center">Amount</th>
                                        <th width="100" className="text-center">Value</th>
                                        <th width="100">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.shintoLedger.length === 0 ? 
                                        <tr><td width="800" colSpan="4">No transactions to show</td></tr>
                                        :
                                        this.props.shintoLedger.map(this.mapLedgerObjectForDisplay)
                                    }
                                </tbody>
                            </table>
                    </div>
                    <div className="columns small-5 padding-top-medium">
                        <Route path={localPath + "/:tranNum"} component={LedgerItem}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shintoLedger: state.shintoTransactionLedger
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
      return {
       /* sellCoinsNow: (enteredValue) => {
              dispatch(sellShintoCoin(enteredValue));
        } */
      };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Ledger);
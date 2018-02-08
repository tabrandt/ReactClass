import React, { Component } from 'react';
import '../ui-toolkit/css/nm-cx/main.css';

//package imports
import { connect } from "react-redux";


//App Imports

class LedgerItem extends Component {
//export const Users = (props) => {
    constructor(props) {
        super(props);

        //bindings
        this.mapLedgerListItemForDisplay = this.mapLedgerListItemForDisplay.bind(this);
        this.filterForSpecificLedgerItem = this.filterForSpecificLedgerItem.bind(this);
    }

    mapLedgerListItemForDisplay = (ledgerItemObject, arrayIndex) => {
        return (
            <div key={"ledgerItem" + arrayIndex} className="row">
                <div className="columns small-1 padding-top-medium" key={"ledgerItemSpacerColumn" + arrayIndex} >
                    &nbsp;
                </div>
                <div className="columns small-11 padding-top-medium" key={"ledgerItemContentColumn" + arrayIndex} > 
                    <div className="row" key={"ledgerItemHeaderRow" + arrayIndex}>
                        <h2 key={"ledgerItemHeader" + arrayIndex}>Ledger Transaction Details</h2>
                        <p key={"ledgerItemViewDesc" + arrayIndex}>Detailed view of a transaction from the ledger.</p>
                        <p key={"ledgerItemTransaction" + arrayIndex}>Transaction #{ledgerItemObject.sequenceNumber}</p>
                        <p key={"ledgerItemDesc" + arrayIndex}>{ledgerItemObject.tranType} {ledgerItemObject.tranAmount} Shinto Coin</p>
                    </div>
                </div>
            </div>
        );
    }

    filterForSpecificLedgerItem = (ledgerListItem) => {
        let localTransactionID = this.props.match.params.tranNum;
        console.log("filterForSpecificLedgerItem ID to filter on: ", localTransactionID);
        console.log(ledgerListItem);
        console.log(ledgerListItem.sequenceNumber);
        return (ledgerListItem.sequenceNumber === parseInt(localTransactionID, 10)) ? true : false;
    }

    render() {

        //console.log("Entering Users - props: ", props); //debug
        console.log("LedgerItem Props: ", this.props);
        let localPath = this.props.match.path;
        console.log(localPath);
        let localFilteredArray = this.props.ledgerList.filter(this.filterForSpecificLedgerItem);
        console.log("Filtered array: ", localFilteredArray);

        return (
            <div className="card padding-none" style={{margin: "5px"}}>
                {localFilteredArray.length === 0 ?
                    <div>Selct a ledger item to see more details</div>
                    :
                    localFilteredArray.map(this.mapLedgerListItemForDisplay)
                }
                    
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ledgerList: state.shintoTransactionLedger
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
      return {
        /*addNewUser: (user) => {
              dispatch(addNewUser(user));
         }*/
      };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(LedgerItem);
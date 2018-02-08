import React, { Component } from 'react';
import '../ui-toolkit/css/nm-cx/main.css';

//package imports
import { connect } from "react-redux";

//App Imports
import { buyShintoCoin } from '../actions/actions';


class BuyCoins extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shintoCoinPurchaseEntry: ''
        }
    }

    handleBuyShintoCoinEntry = (event) => {
        console.log("Entering handleBuyShintoCoinEntry");

        //create local variable - makes for easier debugging
        let localValue = event.target.value;

        //check if non-numeric value is entered
        if (isNaN(localValue))
        {
            console.log("Rejected Entry - handleSellShintoCoinEntry - non-numeric value entered");
            return;
        }

        //Update state
        this.setState({shintoCoinPurchaseEntry: localValue});

        console.log("Leaving handleBuyShintoCoinEntry");
    }

    handleBuyShintoCoins = () => {
        console.log("Entering handleBuyShintoCoins");

        //prevent user from adding an empty value
        if (this.state.shintoCoinPurchaseEntry.trim() === '')
        {
            console.log("Leaving handleBuyShintoCoins - user tried to add an empty value");
            //do nothing, return
            return; 
        }

        //Call store function/action to mine shinto coins
        this.props.buyCoinsNow(this.state.shintoCoinPurchaseEntry);

        //user has been added, clear out current input
        this.setState({shintoCoinPurchaseEntry: ''})

        console.log("Leaving handleBuyShintoCoins");
    }

    render() {

        //console.log("Entering Users - props: ", props); //debug
        console.log("Users Props: ", this.props);
        let localPath = this.props.match.path;
        console.log(localPath);

        return (
            <div>
                <div className="row">
                    <h2>Buy Shinto Coin</h2>
                </div>
                <div className="row">
                    <p>Current Shinto Coin Value: {this.props.currentShintoCoinValue}</p>
                    <p>Number of Shinto Coins Owned: {this.props.numberOfShintoCoinsOwned}</p>
                </div>
                <div className="row">
                    <div className="columns small-2 padding-top-medium">
                        &nbsp;
                    </div>
                    <div className="columns small-10 padding-top-medium">
                        <input onChange={this.handleBuyShintoCoinEntry} value={this.state.shintoCoinPurchaseEntry} />&nbsp;
                        <button className="button btn-cta tiny" onClick={this.handleBuyShintoCoins}>Buy</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentShintoCoinValue: state.shintoCoinValue,
        numberOfShintoCoinsOwned: state.shintoCoinsOwned
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
      return {
        buyCoinsNow: (enteredValue) => {
              dispatch(buyShintoCoin(enteredValue));
        }
      };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(BuyCoins);
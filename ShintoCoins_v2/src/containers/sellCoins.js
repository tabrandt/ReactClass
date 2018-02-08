import React, { Component } from 'react';
import '../ui-toolkit/css/nm-cx/main.css';

//package imports
import { connect } from "react-redux";

//App Imports
import { sellShintoCoin } from '../actions/actions';


class SellCoins extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shintoCoinSaleEntry: ''
        }
    }

    handleSellShintoCoinEntry = (event) => {
        console.log("Entering handleSellShintoCoinEntry");
 
        //create local variable - makes for easier debugging
        let localValue = event.target.value;
 
        //check if non-numeric value is entered
        if (isNaN(localValue))
        {
            console.log("Rejected Entry - handleSellShintoCoinEntry - non-numeric value entered");
            return;
        }
 
        //local integer value
        let sellShintoCoinValue = parseInt(localValue, 10);
 
        //prevent user from entering a shinto coin sale value greater than what they have
        if(this.props.numberOfShintoCoinsOwned < sellShintoCoinValue)
        {
            //console.log("in shintocoin shortsale check");
            alert('You cannot short sell your shinto coins!');
            return;
        }
 
        //Update state
        this.setState({shintoCoinSaleEntry: localValue});
 
        console.log("Leaving handleSellShintoCoinEntry");
    }

    handleSellShintoCoins = () => {
        console.log("Entering handleSellShintoCoins");

        //prevent user from adding an empty value
        if (this.state.shintoCoinSaleEntry.trim() === '')
        {
            console.log("Leaving handleSellShintoCoins - user tried to submit an empty value");
            //do nothing, return
            return; 
        }

        //Call store function/action to mine shinto coins
        this.props.sellCoinsNow(this.state.shintoCoinSaleEntry);

        //user has been added, clear out current input
        this.setState({shintoCoinSaleEntry: ''})

        console.log("Leaving handleSellShintoCoins");
    }

    render() {

        //console.log("Entering Users - props: ", props); //debug
        console.log("Users Props: ", this.props);
        let localPath = this.props.match.path;
        console.log(localPath);

        return (
            <div>
                <div className="row">
                    <h2>Sell Shinto Coin</h2>
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
                        <input onChange={this.handleSellShintoCoinEntry} value={this.state.shintoCoinSaleEntry} />&nbsp;
                        <button className="button btn-cta tiny" onClick={this.handleSellShintoCoins}>Sell</button>
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
        sellCoinsNow: (enteredValue) => {
              dispatch(sellShintoCoin(enteredValue));
        }
      };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SellCoins);
import React, { Component } from 'react';
import '../ui-toolkit/css/nm-cx/main.css';

//package imports
import { connect } from "react-redux";

//App Imports
import { mineShintoCoin } from '../actions/actions';


class MineCoins extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mineAnswer: ''
        }
    }

    handleShintoMineAnswerEntry = (event) => {
        console.log("Entering handleShintoMineAnswerEntry");

        //create local variable - makes for easier debugging
        let localValue = event.target.value;

        //Update state
        this.setState({mineAnswer: localValue});

        console.log("Leaving handleShintoMineAnswerEntry");
    }

    handleShintoMineAnswer = () => {
        console.log("Entering handleShintoMineAnswer");

        //prevent user from adding an empty value
        if (this.state.mineAnswer.trim() === '')
        {
            console.log("Leaving handleShintoMineAnswer - user tried to add an empty value");
            //do nothing, return
            return; 
        }

        //Call store function/action to mine shinto coins
        this.props.mineCoinsNow();

        //user has been added, clear out current input
        this.setState({mineAnswer: ''})

        console.log("Leaving handleShintoMineAnswer");
    }

    render() {

        //console.log("Entering Users - props: ", props); //debug
        console.log("Users Props: ", this.props);
        let localPath = this.props.match.path;
        console.log(localPath);

        return (
            <div>
                <div className="row">
                    <h2>Mine Shinto Coin</h2>
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
                        <input onChange={this.handleShintoMineAnswerEntry} value={this.state.mineAnswer} />&nbsp;
                        <button className="button btn-cta tiny" onClick={this.handleShintoMineAnswer}>Mine</button>
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
        mineCoinsNow: () => {
              dispatch(mineShintoCoin(1));
        }
      };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MineCoins);
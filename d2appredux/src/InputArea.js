import React, {Component} from 'react';
import {connect} from 'react-redux'
import { UPDATE_COLOR } from './types';

class InputArea extends Component{
    constructor(props){
      super(props)
      this.state = {
        newColor: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }

   
  
    handleChange(e){
        this.setState({newColor: e.target.value})
    }
    render(){
      return(
        <div className='inputArea'>
        <input type='text' value={this.state.newColor} onChange={this.handleChange}/>
        <button type='button' onClick={() => {this.props.updateColor(this.state.newColor)}}> Change Color </button>
      </div>
      ) 
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return{
            updateColor(newColor){
                dispatch({
                    type: UPDATE_COLOR,
                    color: newColor
                })
            }
        }    
    }

 export default connect(null, mapDispatchToProps)(InputArea);
import React from 'react';
import {connect} from 'react-redux';

const Header = (props) => {
    const newColor = props.color;
    return(
      <h2 style={{color: newColor}}>THIS IS MY COLOR CHANGING TITLE</h2>
    )
  }

  const mapStateToProps = (state) =>{
    return {
      color: state.color
    }
  }

export default connect(mapStateToProps)(Header);
 

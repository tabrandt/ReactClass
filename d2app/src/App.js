import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class InputArea extends Component{
  constructor(props){
    super(props)
    this.state = {
      input: '',
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

const Header = (props) => {
  const newColor = props.color;
  return(
    <h2 style={{color: newColor}}>THIS IS MY COLOR CHANGING TITLE</h2>
  )
}

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      color: 'black'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header />
          {/* <Header color={this.state.color}/> */}
        </header>
        <InputArea /> 
        {/* <InputArea updateColor={(newColor) => this.setState({color:newColor})} /> */}
      </div>
    );
  }
}

export default App;

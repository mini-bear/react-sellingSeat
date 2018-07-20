import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Common/Navbar"
import Sidebar from "./components/Common/Sidebar"

class App extends Component {


  constructor(props){

    super(props)

    this.state = {

      isShow:false

    }


  }

  render() {

    return (
      <div className="App">
        
        <Navbar myevent={()=>{
          this.setState({
            isShow:!this.state.isShow
          })
        }}></Navbar>

        <Sidebar myshow={this.state.isShow} myevent={()=>{
          this.setState({
            isShow:false
          })
        }}></Sidebar> 

        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}

export default App;

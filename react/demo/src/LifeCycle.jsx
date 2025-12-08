import React, { Component } from 'react'
import Header from './Layout/Coman/Header'

class LifeCycle extends Component {

    constructor(){
        super();
        this.state ={
            name : "het patel"
        }
    }

    // 1) first mouting phase
    componentDidMount(){
        console.log("mouting phase")
    }

    // 2) update state/props change
    componentDidUpdate(){
        console.log("This is Update Phase")
    }

    // shouldComponentUpdate(){
    //     console.log("Change data")
    // }

    componentWillUnmount(){
        console.log("Unmouting Phase...")
    }

  render() {
    return (
      <div>
        <Header />

        <h1>Hello this React class Life cycle</h1>
        {/* 1) mouting phase
        2) updated phase 
        3) unmouting phase */}


        <h1>hello name : {this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Hello"})}>change name</button>
      </div>
    )
  }
}

export default LifeCycle

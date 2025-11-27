// state :- it's varibale
// we can change a value same file
// this.state = varibale define
// this.setstate : chnage data / inbuilt function
// state : object only use not use,single,array

import React, { Component } from 'react'
import Imge from './Imge';

class ClassState extends Component {

    constructor(){
        super();
        this.state = {
            name : "Harsh",
            count : 0,
            isImage : true
        }
    }

  render() {
    
    console.log(this.state)
    return (
      <div>
        <h1>hell name : {this.state.name}</h1>
        <button onClick={()=>{this.setState({name : "het patel"})}}>Change name</button>
        <button onClick={()=>this.setState({name : "varj patel"})}>Chnage name 2</button>

        <h1>Hello count : {this.state.count}</h1>

        <button onClick={()=>this.setState({count : this.state.count + 1})}>Increment</button>
        <button onClick={()=>this.setState({count : this.state.count - 1})}>Decrement</button>

        <button onClick={()=>this.setState({count :  0})}>Zero</button>

        <br /> <br />

        <button onClick={()=>this.setState({isImage : false})}>Hide</button>
         <button onClick={()=>this.setState({isImage : true})}>Show</button>

         <button onClick={()=>this.setState({isImage : !this.state.isImage})}>Toggle</button>

        {
          (this.state.isImage)?<Imge /> : false
        }

      </div>
    )
  }
}

export default ClassState

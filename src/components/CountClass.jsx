import { Component } from "react";
//useState->Variable, function
//object ->state,setState
class CountClass extends Component {
   // counter = 1;
   state={
    counter:1
   }
    changeHandler=()=>{
       // this.state.counter++;
    //    this.setState({counter:this.state.counter+1})
    //     this.setState({counter:this.state.counter+1})
    //      this.setState({counter:this.state.counter+1})
//this.state
    this.setState((prevState)=>({counter:prevState.counter+1}))
     this.setState((prevState)=>({counter:prevState.counter+1}))
      this.setState((prevState)=>({counter:prevState.counter+1}))
      

    }
    render() {
        return (
            <>
                <div>Counter:{this.state.counter}
                    <button onClick={this.changeHandler}>Change</button>
                </div>
            </>
        )

    }
}
export default CountClass;

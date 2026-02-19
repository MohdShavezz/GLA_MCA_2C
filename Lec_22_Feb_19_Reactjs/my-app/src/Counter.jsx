import { Component } from "react";

class Counter extends Component{

    constructor(prop){
        super(prop)
        this.state={
            count:0
        }
    }

    inc=()=>{
        this.setState({count:this.state.count+1})
    }

    componentDidMount(){
        console.log('componentDidMount run..')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate run..')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount run..')

    }


    render(){
        return(
            <>
                <h2>This is counter</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.inc}>INC</button>
            </>
        )
    }
}

export default Counter
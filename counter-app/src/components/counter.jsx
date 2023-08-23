//imrc
import React, { Component } from 'react'
//cc
class Counter extends Component {
    state = {
        count:1
    };
    // State is a special property in React component, and basically
    //  it's an object that includes any data that this component needs.

    render() { 
        return (
        <React.Fragment>
            <span>{2+2}</span>
            {/* in between these curly braces we can write any valid JavaScript
            expressions. An expression is something that produces a value. */}
            <button>Increment</button>
        </React.Fragment>
        //ctl+d -> multiply cursor
        );
    }
    formatCount(){
        return this.state.count === 0 ? 'zero' : this.state.count;
    }
}

export default Counter;
//imrc
import React, { Component } from 'react'
//cc
class Counter extends Component {

    render() { 

        // what we have here is a jsx expression
        //, it's not a string, it's a jsx expression
        //, which eventually gets compiled to calls
        // to React.createElement. That's why
        // we have to import the React object on the top even though
        // we are not going to directly use this in our code
        return (
        <React.Fragment>
            <h1>Hello World</h1>
            <button>Increment</button>
        </React.Fragment>
        //ctl+d -> multiply cursor
        );
    }
}

export default Counter;
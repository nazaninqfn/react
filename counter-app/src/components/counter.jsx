//imrc
import React, { Component } from 'react'
//cc
class Counter extends Component {
    state = {
        count:0
    };
    
    render() { 
        return (
        <React.Fragment>
            <span>{this.formatCount()}</span>
            
            <button>Increment</button>
        </React.Fragment>
        //ctl+d -> multiply cursor
        );
    }
    formatCount(){
        const{count} = this.state;
        return count === 0 ? 'zero': count;
    }
}

export default Counter;
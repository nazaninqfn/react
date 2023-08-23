//imrc
import React, { Component } from 'react'
//cc
class Counter extends Component {
    state = {
        count:0,
        imageUrl:'https://picsum.photos/200'
    };
    
    render() { 
        return (
        <React.Fragment>

            <img src={this.state.imageUrl} alt=""/>
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
//imrc
import React, { Component } from 'react'
//cc
class Counter extends Component {
    state = {
        count:1
    };

    
    
    render() { 

        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        
        return (
        <React.Fragment>

            <span className={classes}>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm'>Increment</button>

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
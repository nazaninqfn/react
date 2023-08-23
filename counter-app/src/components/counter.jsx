//imrc
import React, { Component } from 'react'
//cc
class Counter extends Component {
    state = {
        count:0,
    };
    
    
    handleIncrement = (product) => {
        console.log(product);
        this.setState({count:this.state.count+1});
    }
    
    render() { 

        return (
        <React.Fragment>

            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
            
            //whenever you need to pass an argument, your event handlers simply
            //pass an arrow function here, in the body of that function called
            //the event handler, and pass an argument.

            onClick={() => this.handleIncrement({ product })} 
            className='btn btn-secondary btn-sm'>Increment</button>

        </React.Fragment>

        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const{count} = this.state;
        return count === 0 ? 'zero': count;
    }
}

export default Counter;
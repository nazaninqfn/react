//imrc
import React, { Component } from 'react'
//cc
class Counter extends Component {
    state = {
        count:0,
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    //     //So because we added a constructor in this child class.
    //     // First we have to call the constructor of the parent class,
    //     // using the super keyword
    // }

    
    //arrow functions don't rebind with this keyword, they inherit it
    handleIncrement () {
        console.log('Increment Clicked', this);
    }

    render() { 

        return (
        <React.Fragment>

            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>

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
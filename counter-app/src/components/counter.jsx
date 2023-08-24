import React, { Component } from 'react'

class Counter extends Component {
    state = {
        value:this.props.value,
    };
    
    
    handleIncrement = () => {
        this.setState({value:this.state.value+1});
    };

    render() { 

        return (
        <React.Fragment>

            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button           
            onClick={this.handelIncrement} 
            className='btn btn-secondary btn-sm'>Increment</button>

        </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount(){
        const{value: count} = this.state;
        return count === 0 ? 'zero': count;
    }
}
export default Counter;
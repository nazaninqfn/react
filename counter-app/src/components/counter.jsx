import React, { Component } from 'react'

class Counter extends Component {
// remove the local state, and only rely on the props
// and receive the data that this component needs.
// since we no longer have the local state it doesn't make sense
// to have handle increment
    handleIncrement = () => {
        
        this.setState({value:this.state.value + 1});
    };

    render() { 
        
        return (
        <div>

            <span className={this.getBadgeClasses() }>{this.formatCount()}</span>
            
            <button           
                onClick={() => this.props.onIncrement(this.props.counter)} 
                className='btn btn-secondary btn-sm'
            >
                Increment
            </button>

            <button 
                onClick={() => this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-2"
            >
                delete
            </button>

        </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? 'zero': value;
    }
}
export default Counter;
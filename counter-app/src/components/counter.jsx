import React, { Component } from 'react'

class Counter extends Component {
    state = {
        value:this.props.value,
        //we're using props
        //to initialize the state

        // Props includes
        // data that we give to a component, whereas state includes
        // data that is local or private to that component
    };
    
    
    handleIncrement = () => {
        this.props.value = 0;
        // props is read only.
        this.setState({value:this.state.value+1});
    };

    render() { 
        
        

        return (
        <React.Fragment>

            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button           
            onClick={this.handleIncrement} 
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
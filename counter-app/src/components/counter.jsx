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
        <div>

            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button           
                onClick={this.handleIncrement} 
                className='btn btn-secondary btn-sm'>
                    Increment
            </button>
            <button onClick={this.handleDelete} className="btn btn-danger btn-sm m-2">
                delete
            </button>
            {/* 
            how can we modify this state from
            counter component?, because this is where we have placed
            our delete button. To solve this button, we should modify
            our counter component to raise an event. We're going to call that event
            onDelete. 
            So, our components can raise events
            and this is the naming convention that we use to name those events.
            */}


        </div>
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
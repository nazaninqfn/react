import React, { Component } from 'react'

class Counter extends Component {

// this method is called after a component is updated. Which means we
// have new state or new props, so we can compare this new state
// with the old state or the new props with the old props
// and if there's a change we can make an AJAX request to get
// new data from the server. If there are no changes perhaps we don't
// want to make an additional AJAX request, this is an optional
// technique
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps',prevProps);
        console.log('prevState',prevState);
        if (prevProps.Counter.value !== this.props.counter.value){
            //ajax call and get new data from the server
        }

    };

    handleIncrement = () => {
        
        this.setState({value:this.state.value + 1});
    };

    render() { 
        console.log('counter');
        
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
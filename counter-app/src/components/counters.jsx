import React, { Component } from 'react'
import Counter from './counter';


class Counters extends Component {
    state = {
        counters:
            [
                {id:1, value:4 },
                {id:2, value:0 },
                {id:3, value:0 },
                {id:4, value:0 },
                
            ]
        } ;

        handleReset = () => {
            const counters = this.state.counters.map(c =>{
                c.value = 0;
                return c;
            });
            this.setState({ counters});
        };

        handleDelete = counterId => {
            const counters = this.state.counters.filter(c => c.id !== counterId);
            this.setState({ counters });
        };

    render() {


        return (
        <div>
            <buttton 
            onclick={this.handleReset}
            className="btn btn-primary btn-sm m-2">reset</buttton>
            {/* we don't have a single source of truth 
                Each of our components have our own local state
                counters component, has an array of counters, and each
                counter component has a value. This value is currently
                disconnected from the value property of each counter
                object that we have in this array
                We need to remove the local state in our counter component
                and have a single source of truth
            */}
            {this.state.counters.map(counter => (
                <Counter 
                key={counter.id} 
                onDelete={this.handleDelete} 
                //to encapsulate related values
                counter={counter}
            />
            ))}

        </div>);
    }
}

export default Counters;
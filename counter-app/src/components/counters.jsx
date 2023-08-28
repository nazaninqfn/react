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
                // in React we do not update the state
                // directly, in other words, we are not going to remove a counter
                // from this array, instead, we're going to create a new array
                // without a given counter, and then call the setState method
                // of our component, and let react update the state.
            ]
        } ;

        handleDelete = counterId => {
            const counters = this.state.counters.filter(c => c.id !== counterId);
            this.setState({ counters });
        };

    render() {


        return (
        <div>

            {this.state.counters.map(counter => (
                <Counter 
                key={counter.id} 
                onDelete={this.handleDelete} 
                value={counter.value} 
                id={counter.id}
            />
            ))}

        </div>);
    }
}

export default Counters;
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
            // The component that
            // owns a piece of the state should be the one modifying it
            ]
        } ;

        handleDelete =() => {
            console.log('event handler called')
        };

    render() { 


        return (
        <div>

            {this.state.counters.map(counter => (
                <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} />
            ))}

        </div>);
    }
}

export default Counters;
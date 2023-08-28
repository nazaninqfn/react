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

    render() { 


        return (
        <div>

            {this.state.counters.map(counter => (
                <Counter key={counter.id} value={counter.value} />
            ))}

            {/* a special prop called children, and we use that
            when we want to pass something between the opening and closing
            tag of an element */}

            {/* example */}

                {/* <Counter key={counter.id} value={counter.value}>
                    <h4>title</h4>
                <counter/>
                */}

        </div>);
    }
}

export default Counters;
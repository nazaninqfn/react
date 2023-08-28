import React, { Component } from 'react'
import Counter from './counter';

//render a list of counters
class Counters extends Component {
    state = { 
        counters: 
            [
                {id:1, value:4 },
                {id:2, value:0 },
                {id:3, value:0 },
                {id:4, value:0 },
                //Each object should have an id property,
                // and we're going to use this to uniquely identify each countner.
                // We should also have a value property, we use this
                // to set the initial value for each counter
            ]
        } ;

    render() { 

        // So every React component

        // has a property called props, and this is basically a

        // plain JavaScript object, that includes all the attributes

        // that we set in counters component, so,

        // these two attributes, value and selected, will be the

        // properties of that props object. Key will not be

        // part of that because this is a special attribute for

        // elements.


        return (
        <div>

            {this.state.counters.map(counter => (
                <Counter key={counter.id} value={counter.value} />
            ))}

        </div>);
    }
}

export default Counters;
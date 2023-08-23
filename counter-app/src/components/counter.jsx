//imrc
import React, { Component } from 'react'
//cc
class Counter extends Component {
    state = {
        count:0,
        tags:[],
    };

    renderTags(){
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return  <ul>
                {this.state.tags.map(tag => <li key ={tag}>{ tag }</li>)}
            </ul>
    }
    
    render() { 
//refactoring-> select the lines ,hold with mouse, push ctrl+shift+r
        
        return (
        <React.Fragment>

        {this.renderTags()}

        </React.Fragment>
        //ctl+d -> multiply cursor
        );
    }
}

export default Counter;
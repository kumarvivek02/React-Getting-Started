import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 1,
        
      }
    render() { 
        

        return (

            <div>
            <span className={this.getClassBadge()}>{this.state.count}</span >
            <button className='btn btn-secondary  m-2'> Test button</button>
            </div>
        )
    };

    getClassBadge() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;
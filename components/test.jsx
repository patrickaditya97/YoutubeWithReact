import React, { Component } from 'react';

class Box extends Component
{
    state = { 
        count : 1,
        tags : ['tag1', 'tag2', 'tag3']
    }

    
    render(){

        return(
            <div className="mx-auto">
                <ul>
                    {this.state.tags.map(t => <li key={t}>{t}</li>)}
                </ul>
            </div>
        );
    }
    
}
 
export default Box;
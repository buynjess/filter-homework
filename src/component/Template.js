import React from 'react'


export default class extends React.Component{
   //const data.map(senators => {return senators})
    render () {
        return(
        <div>
            <h3>Senator Info</h3>
            <div><strong>name: </strong>{this.props.info.person.firstname + " " + this.props.info.person.lastname}</div>
            <hr/>
            
        </div>
        )
    }
}


// <div><strong>party: </strong></div>
// <div><strong>state: </strong></div>